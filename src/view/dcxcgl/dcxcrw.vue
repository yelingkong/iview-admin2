<template>
  <div>
    <Row class="zcrzsh_search_row mtpt0">
      <Row :gutter="16">
        <Form :label-width="100">
          <i-col span="8">
            <FormItem label="地区：">
              <Cascader :data="data" trigger="hover" transfer></Cascader>
            </FormItem>
          </i-col>
          <i-col span="8">
            <FormItem label="巡查日期：">
              <DatePicker :value="countDate" type="daterange" placement="bottom-end"
                          style="width: 100%" transfer></DatePicker>
            </FormItem>
          </i-col>
          <i-col span="8">
            <FormItem label="追溯企业：">
              <Input v-model="value" placeholder="请输入"/>
            </FormItem>
          </i-col>
          <i-col span="8">
            <FormItem label="巡查结果：">
              <Input v-model="value" placeholder="请输入"/>
            </FormItem>
          </i-col>

          <i-col span="24">
            <Button size="large" class="fr">重置</Button>
            <Button type="primary" size="large" class="fr mr10">查询</Button>
          </i-col>
        </Form>
      </Row>
    </Row>
    <div class="zcrzsh_table">
      <Row>
        <router-link to="/dcxcgl/dcxcrwadd">
          <Button class=" ml30 mr10" type="primary" size="large">
            <Icon type="md-add"/>
            新增任务
          </Button>
        </router-link>
        <Button size="large">删除</Button>
        <Col>
          <Table :columns="columns" :data="tableData" ref="table"></Table>
        </Col>
      </Row>
      <Row :gutter="16" type="flex" justify="end">
        <Col span="24" justify="end" class="page_right">
          <Page :total="100" show-sizer  show-elevator show-total />
        </Col>
        <Col span="1"></Col>
      </Row>
    </div>
  </div>
</template>
<script>
  import {getTableData} from '@/api/data'
  import Tables from '_c/tables'

  export default {
    name:'dcxcrw',
    components: {
      Tables
    },
    data() {
      return {
        listztHover: 0,
        listzt: [
          {
            name: '巡查次数',
            num: 133333
          },
          {
            name: '巡查人数',
            num: 322
          },
          {
            name: '巡查覆盖率',
            num: 352
          },
          {
            name: '巡查合格率',
            num: 24
          },
          {
            name: '畜禽',
            num: 352
          },
          {
            name: '粮油',
            num: 24
          },
          {
            name: '其他',
            num: 24
          }
        ],
        reviewStatus: [
          {
            value: '0',
            label: '全部'
          },
          {
            value: '1',
            label: '待审核'
          },
          {
            value: '2',
            label: '待复审'
          },
          {
            value: '3',
            label: '已复审'
          },
          {
            value: '4',
            label: '已复审'
          }
        ],
        enterprises: [
          {
            value: '0',
            label: '全部'
          },
          {
            value: '1',
            label: '是'
          },
          {
            value: '2',
            label: '否'
          }
        ],
        organizationalForm: [
          {
            value: '0',
            label: '全部'
          },
          {
            value: '1',
            label: '企业/个体工商户'
          },
          {
            value: '2',
            label: '合作社'
          },
          {
            value: '3',
            label: '家庭农场'
          },
          {
            value: '4',
            label: '个人'
          }
        ],
        organizationalFormModel: '0',
        reviewStatusModel: '0',
        enterprisesModel: '0',
        countDate: [],
        form: {
          mail: '',
          name: '',
          desc: '',
          country: '中国',
          zone: '010',
          phone: '1000000'
        },
        columns: [
          {type: 'selection', width: 60, align: 'center'},
          {title: '任务名称', key: 'address', sortable: true},
          {title: '巡查地区', key: 'zhuti',},
          {title: '任务起止时间', key: 'shuliang',},
          {title: '巡查要求', key: 'zhuisuma', width: 230},
          {title: '任务发布时间', key: 'createTime',},
          {title: '任务完成率', key: 'zhangshu',},
          {
            title: '操作',
            key: 'action',
            width: 250,
            align: 'left',
            render: (h, { row,index }) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.$router.push({
                        path: '/dcxcgl/dcxcjl/'+row.id
                      });
                    }
                  }
                }, '查看'),
                h('Button', {
                  props: {
                    type: 'success',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.shenhe(index)
                    }
                  }
                }, '编辑'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.shenhe(index)
                    }
                  }
                }, '删除')
              ])
            }
          }
        ],
        tableData: [],
        data: [{
          value: 'beijing',
          label: '北京',
          children: [
            {
              value: 'gugong',
              label: '故宫'
            },
            {
              value: 'tiantan',
              label: '天坛'
            },
            {
              value: 'wangfujing',
              label: '王府井'
            }
          ]
        }, {
          value: 'jiangsu',
          label: '江苏',
          children: [
            {
              value: 'nanjing',
              label: '南京',
              children: [
                {
                  value: 'fuzimiao',
                  label: '夫子庙',
                }
              ]
            },
            {
              value: 'suzhou',
              label: '苏州',
              children: [
                {
                  value: 'zhuozhengyuan',
                  label: '拙政园',
                },
                {
                  value: 'shizilin',
                  label: '狮子林',
                }
              ]
            }
          ],
        }]
      }
    },
    mounted() {
      getTableData().then(res => {
        this.tableData = res.data
      })
    },
    methods: {
      exportData(type) {
        this.$refs.table.exportCsv({
          filename: 'The original data'
        })
      },
      show(index) {
        this.$Modal.info({
          title: 'User Info',
          content: `Name：${this.data1[index].name}<br>Age：${this.data1[index].age}<br>Address：${this.data1[index].address}`
        })
      },
      remove(index) {
        this.data1.splice(index, 1)
      }
    }
  }

</script>
<style lang="less">
  .count-style {
    font-size: 50px;
  }


  .list-zt {
    text-align: center;
    margin: 25px auto;
    box-sizing: border-box;
    border-right: 1px solid #E9E9E9;
    cursor: pointer;

  }

  .list-zt p {
    color: #272727;
    font-size: 24px;
    line-height: 45px
  }

  .list-zt span {
    color: #969696;
    font-size: 14px
  }

  .list-zt.hover p, .list-zt.hover span {
    color: #48A1FF
  }

  .list-zt.hover {
    position: relative
  }

  .list-zt.hover .list-zt-top {
    position: absolute;
    top: -31px;
    width: 100%;
    background: #72B2FC;
    height: 6px
  }

  .list-zt.hover .list-zt-top::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-top: 10px solid #72B2FC;
    z-index: 99;
    bottom: -10px;
    left: 50%;
    margin-left: -10px
  }

  .list-zt.hover .list-zt-bottom {
    position: absolute;
    bottom: -31px;
    width: 100%;
    background: #72B2FC;
    height: 6px
  }

  .list-zt.hover .list-zt-bottom::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 10px solid #72B2FC;
    z-index: 99;
    top: -10px;
    left: 50%;
    margin-left: -10px
  }

  .list-mt20 {
    margin: 20px auto
  }

  .xuncha_tongjibiao {
    text-align: left;
  }

  .exportdata {
    margin-top: -5px;
  }

  .breadcrumbstyle {
    background: #fff;
    line-height: 45px;
    text-align: left;
    padding-left: 20px;
  }

  .dcxctj {
    padding: 16px;
  }

  .search_list {
    background: #fff;
    margin: 0;
  }

  .list_table {
    background: #fff;
  }

  .search_list2 {
    padding-top: 10px;
    padding: 10px !important;
    margin: 0 !important;
  }

  .fr {
    float: right;
  }

  .page_right {
    text-align: right;
    margin-right: 17px;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .fl {
    float: left;
  }

  .button_left {
    margin-left: 10px !important;
  }

  .list_zt_7 {
    width: 14.28%;
    float: left;
  }

  .exportdata {
    margin-left: 10px;
    margin-bottom: 10px;
  }
  .zcrzsh_search_row {
    margin-top: 20px;
    background: #fff;
    padding-top: 10px;
    padding-left: 30px;
    padding-right: 30px;
  }

  .zcrzsh_search_row button.ivu-btn-large {
    padding: 3px 15px 3px 15px;
  }
  .zcrzsh_search_row .ivu-form .ivu-form-item-label{text-align: left;}
  .zcrzsh_search_row .ivu-form-item {
    margin-bottom: 15px;
  }

  .zcrzsh_search {
  }

  .zcrzsh_table {
    background: #fff;
  }

  .zcrzsh_table button.ivu-btn-large {
    padding: 3px 15px 3px 15px;
    margin-bottom: 10px;
  }

  .zcrzsh_table .ivu-table-wrapper {
    margin: 0 30px;
  }

  .zcrzsh_table .page_right {
    margin: 10px 30px;
  }
  .mtpt0{margin-top: 0;}

  .ml30 {
    margin-left: 30px;
  }

  .mr10 {
    margin-right: 10px;
  }
</style>

