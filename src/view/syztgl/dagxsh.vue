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

    <Row class="zcrzsh_search_row">
      <Row :gutter="16">
        <Form :label-width="100">
          <i-col span="8">
            <FormItem label="地区：">
              <Cascader :data="data" trigger="hover" transfer></Cascader>
            </FormItem>
          </i-col>
          <i-col span="8">
            <FormItem label="溯源企业：">
              <Input v-model="traceabilityEnterprise" placeholder="请输入主体名称"/>
            </FormItem>
          </i-col>
          <i-col span="8">
            <FormItem label="审核状态：">
              <Select v-model="reviewStatusModel">
                <Option v-for="item in reviewStatus" :value="item.value" :key="item.value">{{ item.label }}</Option>
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
    <div class="zcrzsh_table">
      <Row :gutter="16">
        <Col>
          <i-col span="3">
            <i-col span="12">
              <Button type="primary" size="large" class="fl">审核</Button>
            </i-col>
            <i-col span="12">
              <Button size="large" class="fl">查看</Button>
            </i-col>
          </i-col>
        </Col>
      </Row>
      <Row :gutter="16">
        <Col>
          <tables ref="tables" v-model="tableData" :columns="columns"/>
        </Col>
      </Row>
      <Row :gutter="16" type="flex" justify="end">
        <Col span="24" justify="end" class="page_right">
          <Page :total="100" show-sizer show-elevator show-total/>
        </Col>
        <Col span="1"></Col>
      </Row>
    </div>
    <Modal v-model="modal_see" class="modal_see" width="600" footer-hide="true" header-hide="true">
      <Card title="审核">
        <div class="shenhe_style">
          <Form :label-width="100">
            <i-col span="24">
              <FormItem label="意见：">
                <RadioGroup v-model="animal">
                  <Radio label="通过"></Radio>
                  <Radio label="不通过"></Radio>
                </RadioGroup>
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
  </div>
</template>
<script>
  import Tables from '_c/tables'
  import {getTableData} from '@/api/data'

  export default {
    name: 'dagxsh',
    components: {
      Tables
    },
    data() {
      return {
        listztHover: 0,
        traceabilityEnterprise: '',
        modal_see: false,
        listzt: [
          {
            name: '合计主体数',
            num: 1332
          },
          {
            name: '待审核',
            num: 322
          },
          {
            name: '待复审',
            num: 352
          },
          {
            name: '已审核',
            num: 24
          }
        ],
        reviewStatus: [
          {
            value: '',
            label: '全部'
          },
          {
            value: '0',
            label: '待审核'
          },
          {
            value: '1',
            label: '已审核'
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
          {title: '地区', key: 'address', sortable: true, ellipsis: true},
          {title: '主体名称', key: 'zhuti', ellipsis: true},
          {title: '负责人', key: 'name', ellipsis: true},
          {title: '联系电话', key: 'tel', ellipsis: true},
          {title: '申请时间', key: 'dataTime', width: 180},
          {
            title: '审核状态',
            key: 'status',
            render: (h, {row}) => {
              if (row.status === 0) {
                return h('Badge', {
                  props: {
                    status: 'default',
                    text: '待审核'
                  }
                })
              } else if (row.status === 1) {
                return h('Badge', {
                  props: {
                    status: 'success',
                    text: '已审核'
                  }
                })
              }
            }
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'left',
            render: (h, {row, index}) => {
              if (row.status === 0) {
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
                          path: '/syztgl/dagxsh/' + row.id
                        });
                      }
                    }
                  }, '查看'),
                  h('Button', {
                    props: {
                      type: 'error',
                      size: 'small'
                    },
                    on: {
                      click: () => {
                        this.shenhes(index)
                      }
                    }
                  }, '审核')
                ])
              } else if (row.status === 1) {
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
                          path: '/syztgl/dagxsh/1231'
                        });
                      }
                    }
                  }, '查看')
                ])
              }
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
          ]
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
          content: `Name：${this.tableData[index].name}`
        })
      },
      shenhe(index) {
        this.tableData[index].status = 1
      },
      shenhes(index) {
        this.modal_see = true
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

