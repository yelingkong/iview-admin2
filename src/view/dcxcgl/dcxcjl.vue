<template>
  <div>
    <Row justify="space-between" class="list-zt-body">
      <div v-for="(item,index) in listzt">
        <Col span="6">
          <div class="list-zt" :class="{'hover':index==listztHover}" @click="listztHover=index">
            <div class="list-zt-top"></div>
            <span>{{item.name}}</span>
            <p>{{item.num}}户</p>
            <div class="list-zt-bottom"></div>
          </div>
        </Col>
      </div>
    </Row>
    <Row class="search_list">
      <Row :gutter="16" class="search_list2">
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
              <Select v-model="reviewStatusModel">
                <Option v-for="item in xunchajieguo" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </FormItem>
          </i-col>
          <i-col span="3" offset="21">
            <i-col span="12">
              <Button type="primary" size="large" class="fr">查询</Button>
            </i-col>
            <i-col span="12">
              <Button size="large" class="fr">重置</Button>
            </i-col>
          </i-col>
        </Form>
      </Row>
    </Row>
    <div class="list_table">
      <Row :gutter="16" class="button_left">
        <Button class="exportdata" type="primary" size="large"><Icon type="md-add" />新增任务</Button>
        <Button class="exportdata" size="large">删除</Button>
      </Row>
      <Row :gutter="16" class="search_list2">
        <Col>
          <tables ref="tables" editable v-model="tableData" :columns="columns"/>
        </Col>
      </Row>
      <Row :gutter="16" type="flex" justify="end">
        <Col span="24" justify="end" class="page_right">
          <Page :total="100"/>
        </Col>
        <Col span="1"></Col>
      </Row>
    </div>

  </div>
</template>
<script>
  import Tables from '_c/tables'
  import { getTableData } from '@/api/data'

  export default {
    name: 'zcrzsh',
    components: {
      Tables
    },
    data () {
      return {
        listztHover: 0,
        listzt: [
          {
            name: '巡查次数',
            num: 1332
          },
          {
            name: '巡查人次',
            num: 322
          },
          {
            name: '巡查覆盖率',
            num: 352
          },
          {
            name: '巡查合格率',
            num: 24
          }
        ],
        reviewStatus: [
          {
            value: '',
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
          }
        ],
        xunchajieguo: [
          {
            value: '',
            label: '全部'
          },
          {
            value: '1',
            label: '合格'
          },
          {
            value: '2',
            label: '基本合格'
          },
          {
            value: '3',
            label: '不合格'
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
          { type: 'selection', width: 60, align: 'center' },
          { title: '地区', key: 'address', sortable: true },
          { title: '企业名称', key: 'zhuti', },
          { title: '检查单位', key: 'createTime', },
          {
            title: '巡查结果',
            key: 'reviewTheStatus',
            render: (h, { row }) => {
              if (row.reviewTheStatus === 0) {
                return h('Badge', {
                  props: {
                    status: 'default',
                    text: '待审核'
                  }
                })
              } else if (row.reviewTheStatus === 1) {
                return h('Badge', {
                  props: {
                    status: 'error',
                    text: '待复审'
                  }
                })
              } else if (row.reviewTheStatus === 2) {
                return h('Badge', {
                  props: {
                    status: 'success',
                    text: '已复审'
                  }
                })
              }
            }
          },
          {
            title: '巡查日期',
            key: 'dateOfAudit',
            render: (h, { row }) => {
              if (row.reviewTheStatus === 0) {
                return h('div', {
                })
              }else{
                return h('div', {
                },row.dateOfAudit)
              }
            }
          },
          {
            title: '操作',
            key: 'action',
            width: 250,
            align: 'center',
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
                      this.show(row.index)
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
    mounted () {
      getTableData().then(res => {
        this.tableData = res.data
      })
    },
    methods: {
      show (index) {
        this.$Modal.info({
          title: 'User Info',
          content: `Name：${this.tableData[index].name}<br>Age：${this.tableData[index].age}<br>Address：${this.tableData[index].address}`
        })
      },
      shenhe (index) {
        this.tableData[index].reviewTheStatus=1
      },
      fushen(index){
        this.tableData[index].reviewTheStatus=2
      }
    }
  }

</script>
<style lang="less">
  .count-style {
    font-size: 50px;
  }

  .list-zt-body {
    background: #fff;
    margin-bottom: 10px;
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
    margin-top: 20px;
    background: #fff;
  }

  .list_table {
    background: #fff;
  }

  .search_list2 {

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
</style>

