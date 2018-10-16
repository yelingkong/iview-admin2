<template>
  <div>
    <Row justify="space-between" class="list-zt-body">
      <div v-for="(item,index) in listzt">
        <Col class="list_zt_5">
          <div class="list-zt" :class="{'hover':index==listztHover}" @click="listztHover=index">
            <div class="list-zt-top"></div>
            <span>{{item.name}}</span>
            <p>{{item.num}}户</p>
            <div class="list-zt-bottom"></div>
          </div>
        </Col>
      </div>
    </Row>
    <Row class="zcrzsh_search_row">
      <Row :gutter="16">
        <Form :label-width="100">
          <i-col span="8">
            <FormItem label="地区：">
              <Cascader :data="data" trigger="hover" transfer></Cascader>
            </FormItem>
          </i-col>
          <i-col span="8">
            <FormItem label="投入品类型：">
              <Cascader :data="tourupin" trigger="hover" transfer></Cascader>
            </FormItem>
          </i-col>
          <i-col span="8">
            <FormItem label="投入品名称：">
              <Input v-model="value" placeholder="请输入"/>
            </FormItem>
          </i-col>
          <i-col span="8">
            <FormItem label="产品名称：">
              <Input v-model="value" placeholder="请输入"/>
            </FormItem>
          </i-col>
          <i-col span="8">
            <FormItem label="主体名称：">
              <Input v-model="value" placeholder="请输入"/>
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
    <div class="zcrzsh_table">
      <Row>
        <Button type="primary" size="large" @click="exportData(1)">导出数据</Button>
        <Col>
          <Table :columns="columns" :data="tableData" ref="table"></Table>
        </Col>
      </Row>
      <Row type="flex" justify="end">
        <Col span="24" justify="end" class="page_right">
          <Page :total="100" show-sizer  show-elevator show-total />
        </Col>
        <Col span="1"></Col>
      </Row>
    </div>
    <Modal v-model="modal_see" class="modal_see" width="1000" footer-hide="true" header-hide="true">
      <Card title="投入品使用详情">
        <div class="shenhe_style">
          <Card title="产品信息" :padding="0" style="margin-top: 0px;" shadow class="detailed">
            <Row :gutter="16">
              <div class="detaileds">
                <i-col span="10">
                  <div class="detailed">投入品类型：<span>农药</span></div>
                </i-col>
                <i-col span="14">
                  <div class="detailed">投入品名称：<span>毒死蜱</span></div>
                </i-col>
                <i-col span="10">
                  <div class="detailed">产品名称：<span>白菜</span></div>
                </i-col>
                <i-col span="14">
                  <div class="detailed">使用日期：<span>2016-09-21</span></div>
                </i-col>
                <i-col span="10">
                  <div class="detailed">主体名称：<span>江苏省常州市金剑蜜梨专业合作社</span></div>
                </i-col>
                <i-col span="14">
                  <div class="detailed">所在地区：<span>天宁区郑陆镇</span></div>
                </i-col>
                <i-col span="20">
                  <div class="detailed">产品追溯码：<span>
1.2.62563584652132545X.02010102.20180904180329.001</span></div>
                </i-col>
              </div>
            </Row>
          </Card>
        </div>
      </Card>
    </Modal>
    <Modal v-model="modal_bqdymx" class="modal_see" width="1000" footer-hide="true" header-hide="true">
      <Card title="标签打印明细">
        <div class="shenhe_style">
          <Table :columns="bqdyColumns" :data="bqdyTableData" ref="table"></Table>
        </div>
      </Card>
    </Modal>
  </div>
</template>
<script>
  import {getTableData} from '@/api/data'
  import Tables from '_c/tables'

  export default {
    name:'trpsyjl',
    components: {
      Tables
    },
    data() {
      return {
        modal_bqdymx: false,
        listztHover: 0,
        modal_see: false,
        bqdyColumns: [
          {type: 'selection', width: 60, align: 'center'},
          {title: '产品名称', key: 'zhuti',},
          {title: '数量', key: 'shuliang',},
          {title: '产品追溯码', key: 'zhuisuma', width: 230},
          {title: '打印日期', key: 'createTime',},
          {title: '打印张数', key: 'shuliang',},
        ],
        bqdyTableData: [],
        listzt: [
          {
            name: '合计投入品使用记录',
            num: 1333
          },
          {
            name: '农药',
            num: 322
          },
          {
            name: '兽药',
            num: 352
          },
          {
            name: '肥料',
            num: 24
          },
          {
            name: '饲料',
            num: 352
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
        tourupin: [
          {
            value: '0',
            label: '全部'
          },
          {
            value: '1',
            label: '农药'
          },
          {
            value: '2',
            label: '兽药'
          },
          {
            value: '3',
            label: '肥料'
          },
          {
            value: '4',
            label: '饲料'
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
          {title: '投入品类型', key: 'address', sortable: true},
          {title: '投入品名称', key: 'zhuti',},
          {title: '产品名称', key: 'shuliang',},
          {title: '使用日期', key: 'createTime',},
          {title: '主体名称', key: 'zhuti',width:230},
          {title: '所在地', key: 'address',width:230},
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'left',
            render: (h, {row, index}) => {
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
              ])
            }
          }
        ],
        tableData: [],
        data: [
          {
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
        this.bqdyTableData = res.data
      })
    },
    methods: {
      exportData(type) {
        this.$refs.table.exportCsv({
          filename: 'The original data'
        })
      },
      show(index) {
        this.modal_see=true
      },
      remove(index) {
        this.data1.splice(index, 1)
      },
      bqdymx_show(index) {
        this.modal_bqdymx = true
      },
    }
  }

</script>
<style lang="less">
  .count-style {
    font-size: 50px;
  }

  .list-zt-body {
    background: #fff;
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
    padding-top: 10px;
    padding: 10px !important;
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

  .list_zt_5 {
    width: 20%;
    float: left;
  }

  .exportdata {
    margin-left: 10px;
    margin-bottom: 10px;
  }
  .shenhe_style {
    overflow: hidden;
  }

  .shenhe_style button {
    margin: 0 auto;
    display: block;
  }

  .modal_see .ivu-modal-body {
    padding: 0;
  }
  .detailed h2 {
    margin-bottom: 20px;
  }

  .detailed {
    font-size: 14px;
    color: #383938;
    margin-top: 10px;
    margin-bottom: 10px;
  }


  .detaileds {
    margin-top: 20px;
    margin-left: 20px;
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
    margin-left: 30px;
  }

  .zcrzsh_table .ivu-table-wrapper {
    margin: 0 30px;
  }

  .zcrzsh_table .page_right {
    margin: 10px 30px;
  }
</style>

