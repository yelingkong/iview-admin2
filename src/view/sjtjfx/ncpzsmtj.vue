<template>
  <div>
    <div class="zcrzsh_search_row mtpt0 mb20">
      <Tabs value="name1">
        <TabPane label="按地区查看" name="name1">
          <Row>
            <Row :gutter="16">
              <Form :label-width="100">
                <i-col span="8">
                  <FormItem label="地区：">
                    <Cascader :data="data" trigger="hover" transfer></Cascader>
                  </FormItem>
                </i-col>
                <i-col span="8">
                  <FormItem label="组织形式：">
                    <Cascader :value="organizationalFormModel" :data="organizationalForm" trigger="hover"
                              transfer></Cascader>
                  </FormItem>
                </i-col>
                <i-col span="8">
                  <FormItem label="日期：">
                    <DatePicker :value="countDate" type="daterange" placement="bottom-end"
                                style="width: 100%" transfer></DatePicker>
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
        </TabPane>
        <TabPane label="按企业查看" name="name2">
          <Row class="search_list">
            <Row :gutter="16" class="search_list2">
              <Form :label-width="100">
                <i-col span="8">
                  <FormItem label="地区：">
                    <Cascader :data="data" trigger="hover" transfer></Cascader>
                  </FormItem>
                </i-col>
                <i-col span="8">
                  <FormItem label="组织形式：">
                    <Cascader :value="organizationalFormModel" :data="organizationalForm" trigger="hover"
                              transfer></Cascader>
                  </FormItem>
                </i-col>
                <i-col span="8">
                  <FormItem label="日期：">
                    <DatePicker :value="countDate" type="daterange" placement="bottom-end"
                                style="width: 100%" transfer></DatePicker>
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
        </TabPane>
      </Tabs>
    </div>
    <Card title="常州市农产品追溯码统计表" :padding="0" shadow class="qytj_table">
      <Button type="primary" size="large" slot="extra">导出数据</Button>
      <div>
        <Row>
          <Col>
            <tables ref="tables" editable v-model="tableData" :columns="columns"/>
          </Col>
        </Row>
      </div>
    </Card>
    <Card title="常州市2018年农产品追溯码打印趋势" :padding="0" shadow class="syztfb sycppzfb zhuisuma_chart">
      <div class="charts" ref="chart"></div>
    </Card>
    <Modal title="农产品生产批次码" v-model="modal4" width="1000" footer-hide="true" :padding="0" header-hide="true" class="ncpscpc">

        <Row :gutter="16" class="search_list2">
          <Col>
            <i-col span="22" offset="1"><p>农产品在产出或组合时，农产品生产经营者在江苏追溯平台进行生产批次管理，系统自动生成与产品批次相对应的代码，可打印在产品追溯标识或追溯凭证上。</p>
            </i-col>
          </Col>
          <i-col span="24" class="ncppcm">
            <i-col span="12">
              <img :src="ncppcm" key="min-logo"/>
              <p>产品追溯码标签</p>
            </i-col>
            <i-col span="12">
              <img :src="pc2" key="min-logo"/>
              <p>追溯凭证标签</p>
            </i-col>
          </i-col>
        </Row>

    </Modal>
    <Modal title="产品流通批次码" v-model="modal6" width="1000" footer-hide="true" :padding="0" header-hide="true" class="ncpscpc">
        <Row :gutter="16" class="search_list2">
          <Col>
            <i-col span="22" offset="1"><p>农产品在产出或组合时，农产品生产经营者在江苏追溯平台进行生产批次管理，系统自动生成与产品批次相对应的代码，可打印在产品追溯标识或追溯凭证上。</p>
            </i-col>
          </Col>
          <i-col span="24" class="ncppcm">
            <i-col span="12">
              <img :src="ncppcm" key="min-logo"/>
              <p>产品追溯码标签</p>
            </i-col>
            <i-col span="12">
              <img :src="pc2" key="min-logo"/>
              <p>追溯凭证标签</p>
            </i-col>
          </i-col>
        </Row>

    </Modal>
    <Modal title="产品流通批次码" v-model="modal5" width="1000" footer-hide="true" :padding="0" header-hide="true" class="ncpscpc">
        <Row :gutter="16" class="search_list2">
          <Col>
            <i-col span="22" offset="1">
              <p>农产品入市（进入批发市场、零售市场或生产加工企业环节）时，农产品生产经营者在江苏追溯平台填写交易信息后，系统自动生成对应该入市批次产品的代码，可打印在入市追溯凭证上。</p>
            </i-col>
          </Col>
          <i-col span="24" class="ncppcm">
            <img :src="pc3" key="min-logo"/>
            <p>入市追溯凭证标签</p>
          </i-col>
        </Row>

    </Modal>
  </div>
</template>
<script>
  import {getTableData} from '@/api/data'
  import Tables from '_c/tables'
  import echarts from 'echarts'
  import ncppcm from '@/assets/images/ncppcm.png'
  import pc2 from '@/assets/images/pc2.png'
  import pc3 from '@/assets/images/pc3.png'

  export default {
    name: 'ncpzsmtj',
    components: {
      Tables
    },
    data() {
      return {
        modal4: false,
        modal5: false,
        modal6: false,
        ncppcm,
        pc2,
        pc3,
        listztHover: 0,
        listzt: [
          {
            name: '合计主体数',
            num: 1332
          },
          {
            name: '企业/个体工商',
            num: 322
          },
          {
            name: '合作社',
            num: 352
          },
          {
            name: '家庭农场',
            num: 24
          },
          {
            name: '个人',
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
          {type: 'selection', width: 60, align: 'center'},
          {title: '地区', key: 'address', sortable: true},
          {
            title: '产品生产批次码（张）', key: 'zhuti',
            renderHeader: (h, index) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'md-alert',
                    size: '20'
                  },
                  style: {
                    marginRight: '5px',
                    cursor: 'pointer'
                  },
                  on: {
                    click: () => {
                      this.modal4 = true
                    }
                  }
                },),
                h('span', '产品生产批次码（张）')
              ]);
            }
          },
          {
            title: '产品流通批次码（张）', key: 'zhuti',
            renderHeader: (h, index) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'md-alert',
                    size: '20'
                  },
                  style: {
                    marginRight: '5px',
                    cursor: 'pointer'
                  },
                  on: {
                    click: () => {
                      this.modal6 = true
                    }
                  }
                },),
                h('span', '产品流通批次码（张）')
              ]);
            }
          },
          {
            title: '产品入市批次码（张）', key: 'zhuti',
            renderHeader: (h, index) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'md-alert',
                    size: '20'
                  },
                  style: {
                    marginRight: '5px',
                    cursor: 'pointer'
                  },
                  on: {
                    click: () => {
                      this.modal5 = true
                    }
                  }
                },),
                h('span', '产品入市批次码（张）')
              ]);
            }
          },
          {
            title: '合计（张）',
            key: 'reviewTheStatus',
          },
        ],
        tableData: [],
        option: {
          title: {
            text: '2018年常州农产品追溯码打印趋势',
            subtext: '截止日期：2018-09028',
            x: 'center',
            align: 'right',
            textStyle: {
              fontSize: '14'
            }
          },
          xAxis: {
            type: 'category',
            data: [1, 2, 3, 4, 5, 6, 7]
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            lineStyle: {
              normal: {
                color: '#7CB5EC',
              }
            },
            itemStyle: {
              normal: {
                color: '#7CB5EC',
              }
            }
          }]
        },
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
      this.$nextTick(() => {
        this.initChart()
        this.selfAdaption()
      })
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
      },
      initChart() {
        const myChart = echarts.init(this.$refs.chart)
        myChart.setOption(this.option)
      },
      selfAdaption() {
        let _this = this;
        setTimeout(() => {
          window.addEventListener('resize', function () {
            const myChart = echarts.init(_this.$refs.chart)
            myChart.resize();
          })
        }, 10)
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
    margin-bottom: 20px;
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
  }

  .list_table {
    background: #fff;
  }

  .search_list2 {
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

  .list-zt-5 {
    width: 20%;
    float: left;
  }

  .dcsj {
    margin-top: -5px;
  }

  .search_list_index {
    background: #fff;
    margin-bottom: 10px;
  }

  .charts {
    width: 100%;
    height: 400px;
    margin-top: 20px;
    max-width: 1278px;
  }

  .zhuisuma_chart {
    margin-top: 10px !important;
  }

  .ncpscpc {
    padding: 0 !important;
  }

  .ncppcm {
    margin-top: 20px;
  }

  .ncppcm p {
    text-align: center;
  }

  .ncppcm img {
    display: block;
    margin: 10px auto;
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
</style>

