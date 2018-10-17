<template>
  <div>
    <Row class="zcrzsh_search_row iv-mt0 iv-mb10 iv-pb20">
      <Row :gutter="16">
        <Form :label-width="100">
          <i-col span="8">
            <FormItem label="地区：">
              <Cascader :data="data" trigger="hover" transfer></Cascader>
            </FormItem>
          </i-col>
          <i-col span="8">
            <FormItem label="日期：">
              <DatePicker :value="countDate" type="daterange" placement="bottom-end"
                          style="width: 100%" transfer></DatePicker>
            </FormItem>
          </i-col>
          <i-col span="24">
            <Button size="large" class="fr">重置</Button>
            <Button type="primary" size="large" class="fr mr10">查询</Button>
          </i-col>
        </Form>
      </Row>
    </Row>
    <Card title="常州市各类品种溯源产品分布" :padding="0" shadow class="qytj_table">
      <Row justify="space-between" class="iv-bg-w iv-mb10">
        <div v-for="(item,index) in listzt">
          <Col class="list-zt-7">
            <div class="list-zt" :class="{'hover':index==listztHover}" @click="listztHover=index">
              <span>{{item.name}}</span>
              <p>{{item.num}}户</p>
            </div>
          </Col>
        </div>
      </Row>
    </Card>
    <Card title="常州市各地区溯源产品统计" :padding="0" shadow class="qytj_table">
      <Button type="primary" size="large" slot="extra">导出数据</Button>
      <div>
        <Row>
          <Col>
            <tables ref="tables" :highlight-row="true" editable v-model="tableData" :columns="columns"/>
          </Col>
        </Row>
        <Row :gutter="16" type="flex" justify="end">
          <Col span="24" justify="end" class="page_right">
            <Page :total="100" show-sizer  show-elevator show-total />
          </Col>
          <Col span="1"></Col>
        </Row>
      </div>
    </Card>
  </div>
</template>
<script>
  import Tables from '_c/tables'
  import {getTableData} from '@/api/data'

  export default {
    name: 'sycptj',
    components: {
      Tables
    },
    data() {
      return {
        listztHover: 0,
        listzt: [
          {
            name: '合计主体数',
            num: 1332
          },
          {
            name: '蔬菜',
            num: 322
          },
          {
            name: '水果',
            num: 352
          },
          {
            name: '水产品',
            num: 24
          },
          {
            name: '畜禽',
            num: 24
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
          {title: '地区', key: 'address', sortable: true},
          {title: '蔬菜（种）', key: 'zhuti',},
          {title: '水果（种）', key: 'zhuti',},
          {title: '水产品（种）', key: 'zhuti',},
          {title: '禽畜（种）', key: 'zhuti',},
          {title: '粮油（种）', key: 'zhuti',},
          {title: '其他（种）', key: 'zhuti',}
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
      show(index) {
        this.$Modal.info({
          title: 'User Info',
          content: `Name：${this.tableData[index].name}<br>Age：${this.tableData[index].age}<br>Address：${this.tableData[index].address}`
        })
      },
      shenhe(index) {
        this.tableData[index].reviewTheStatus = 1
      },
      fushen(index) {
        this.tableData[index].reviewTheStatus = 2
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
    margin-top: 0px;
    background: #fff;
    margin-bottom: 20px;
  }

  .list_table {
    background: #fff;
  }

  .search_list2 {
    margin: 10px !important;
    padding: 0 !important;
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

  .list-zt-7 {
    width: 14.28%;
    float: left;
  }
  .dcsj{margin-top: -5px;}
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

  .qytj_table {
    background: #fff;
  }

  .qytj_table button.ivu-btn-large {
    padding: 3px 15px 3px 15px;
    margin-bottom: 10px;
    margin-left: 30px;
  }

  .qytj_table .ivu-table-wrapper {
    margin: 10px 10px;
  }

  .qytj_table .page_right {
    margin: 10px 30px;
  }
  .qytj_table .ivu-card-extra {
    right: 10px;
  }
  .qytj_table .ivu-card-head {
    padding: 14px 10px;
  }
  .mb20{margin-bottom: 20px;padding-bottom: 10px;}
  .mtpt0{margin-top: 0px;}

  .ml30 {
    margin-left: 30px;
  }

  .mr10 {
    margin-right: 10px;
  }
</style>

