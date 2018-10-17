<template>
  <div>
    <Row justify="space-between" class="iv-bg-w">
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
    <Row class="zcrzsh_search_row">
      <Row :gutter="16">
        <Form :label-width="100">
          <i-col span="8">
            <FormItem label="处理状态：">
              <Select v-model="processingStateModel">
                <Option v-for="item in processingState" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </FormItem>
          </i-col>
          <i-col span="8">
            <FormItem label="地区：">
              <Cascader :data="data" trigger="hover" transfer></Cascader>
            </FormItem>
          </i-col>
          <i-col span="8">
            <FormItem label="溯源企业：">
              <Input v-model="value" placeholder="请输入主体名称"/>
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
      <Row :gutter="16">
        <Col>
          <i-col span="24">
            <Button type="primary" size="large" class="fl ml30">处理</Button>
          </i-col>
        </Col>
      </Row>
      <Row :gutter="16">
        <Col>
          <Table :columns="columns" :data="data1" ref="table"></Table>
        </Col>
      </Row>
      <Row :gutter="16" type="flex" justify="end">
        <Col span="24" justify="end" class="page_right">
          <Page :total="100" show-sizer show-elevator show-total/>
        </Col>
        <Col span="1"></Col>
      </Row>
    </div>
    <!--处理信息modal-->
    <Modal v-model="modal_see" class="modal_see" width="600" footer-hide="true" header-hide="true">
      <Card title="审核">
        <div class="shenhe_style">
          <Form :label-width="100">
            <i-col span="24">
              <FormItem label="处理：">
                <CheckboxGroup v-model="disabledGroup">
                  <Checkbox label="禁止打印"></Checkbox>
                  <Checkbox label="禁止查询"></Checkbox>
                  <Checkbox label="禁止登陆"></Checkbox>
                  <Checkbox label="忽略"></Checkbox>
                </CheckboxGroup>
              </FormItem>
            </i-col>
            <i-col span="24">
              <FormItem label="不通过的原因：">
                <Input v-model="yunyin" type="textarea" placeholder="请输入原因"/>
              </FormItem>
            </i-col>
            <i-col span="24">
              <Button type="primary" size="large">提交</Button>
            </i-col>
          </Form>
        </div>
      </Card>
    </Modal>
    <!--处理信息modal-->
    <!--恢复modal-->
    <template>
      <Modal v-model="huifuModal" width="360">
        <div style="text-align:center">
          <p>该企业有新的异常情况发生，确定要恢复吗？</p>
        </div>
        <div slot="footer">
          <Row :gutter="16">
            <Col span="8" offset="3">
              <Button type="primary">确定</Button>
            </Col>
            <Col span="8">
              <Button @click="huifuModal=false">取消</Button>
            </Col>
          </Row>
        </div>
      </Modal>
    </template>
    <!--恢复modal-->
  </div>
</template>
<script>
  import {getTableData} from '@/api/data'
  import Tables from '_c/tables'
  import expandRow from '_c/tables/table-expand2.vue'

  export default {
    name: 'ycztgl',
    components: {
      Tables,
      expandRow
    },
    data() {
      return {
        listztHover: 0,
        modal_see: false,
        huifuModal: false,
        listzt: [
          {
            name: '合计主体数',
            num: 1332
          },
          {
            name: '异常待处理',
            num: 322
          },
          {
            name: '异常已处理',
            num: 352
          },
          {
            name: '恢复审核中',
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
        processingState: [
          {
            value: '0',
            label: '全部'
          },
          {
            value: '1',
            label: '异常待处理'
          },
          {
            value: '2',
            label: '异常已处理'
          },
          {
            value: '3',
            label: '恢复审核中'
          }
        ],
        organizationalFormModel: '0',
        reviewStatusModel: '0',
        enterprisesModel: '0',
        processingStateModel: '0',
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
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            type: 'expand',
            width: 50,
            render: (h, params) => {
              return h(expandRow, {
                props: {
                  row: params.row
                }
              })
            }
          },
          {
            title: '地区',
            key: 'name'
          },
          {
            title: '主体名称',
            key: 'key1'
          },
          {
            title: '异常次数',
            key: 'key2'
          },
          {
            title: '处理状态',
            key: 'key3'
          },
          {
            title: '处理结果',
            key: 'key4'
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'left',
            render: (h, params) => {
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
                      this.huifuModal = true
                    }
                  }
                }, '恢复'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.modal_see = true
                    }
                  }
                }, '处理')
              ])
            }
          }
        ],
        data1: [
          {
            name: '天宁区',
            key: 10000,
            key1: 10000,
            key2: 10000,
            key3: 10000,
            key4: 10000,
            key5: 10000,
            key6: 10000,
          }, {
            name: '天宁区',
            key: 10000,
            key1: 10000,
            key2: 10000,
            key3: 10000,
            key4: 10000,
            key5: 10000,
            key6: 10000,
          }, {
            name: '天宁区',
            key: 10000,
            key1: 10000,
            key2: 10000,
            key3: 10000,
            key4: 10000,
            key5: 10000,
            key6: 10000,
          }, {
            name: '天宁区',
            key: 10000,
            key1: 10000,
            key2: 10000,
            key3: 10000,
            key4: 10000,
            key5: 10000,
            key6: 10000,
          }, {
            name: '天宁区',
            key: 10000,
            key1: 10000,
            key2: 10000,
            key3: 10000,
            key4: 10000,
            key5: 10000,
            key6: 10000,
          }, {
            name: '天宁区',
            key: 10000,
            key1: 10000,
            key2: 10000,
            key3: 10000,
            key4: 10000,
            key5: 10000,
            key6: 10000,
          }, {
            name: '天宁区',
            key: 10000,
            key1: 10000,
            key2: 10000,
            key3: 10000,
            key4: 10000,
            key5: 10000,
            key6: 10000,
          },

        ],
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
    mounted: function () {

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
    margin-top: 20px;
    background: #fff;
  }

  .list_table {
    padding-top: 20px;
    background: #fff;
  }

  .search_list2 {
    padding-top: 10px;
    margin: 10px !important;
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

  /*处理结果class*/
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

  .zcrzsh_search_row .ivu-form-item {
    margin-bottom: 15px;
  }

  .zcrzsh_search_row .ivu-form .ivu-form-item-label {
    text-align: left;
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

  .expand-row {
    margin-bottom: 16px;
  }

  td.ivu-table-expanded-cell {
    padding: 10px 0px;
  }

  .zcrzsh_table td.ivu-table-expanded-cell.ivu-table-wrapper {
    margin: 0;
  }

  .ml30 {
    margin-left: 30px;
  }

  .mr10 {
    margin-right: 10px;
  }

  /*处理结果class*/
</style>

