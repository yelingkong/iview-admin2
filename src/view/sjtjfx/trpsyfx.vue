<template>
  <div>
    <div class="dcxctj">
      <Card class="search">
        <Row>
          <i-col span="8">
            <Form :label-width="80">
              <FormItem label="地区：">
                <Cascader :data="data" trigger="hover" transfer></Cascader>
              </FormItem>
            </Form>
          </i-col>
          <i-col span="8">
            <Form :label-width="80">
              <FormItem label="巡查日期：">
                <DatePicker :value="countDate" type="daterange" placement="bottom-end"
                            style="width: 100%" transfer></DatePicker>
              </FormItem>
            </Form>
          </i-col>
          <i-col span="3" offset="21">
            <i-col span="12">
              <Button type="primary" size="large">查询</Button>
            </i-col>
            <i-col span="12">
              <Button size="large">重置</Button>
            </i-col>
          </i-col>
        </Row>
      </Card>
      <Row>
        <i-col span="9">
          <Card title="农药使用情况" class="search">
            <ul class="syztfb_list mt0">
              <li v-for="(item,index) in tableData2"  @click="listactive=index">
                <div v-if="index<3" :class="{'active':index==listactive}">
                  <i-col span="2"><i class="active">{{index+1}}</i></i-col>
                  <i-col span="8"><span>{{item.name}}</span></i-col>
                  <i-col span="14"><span>{{item.sell}}</span></i-col>
                </div>
                <div v-else :class="{'active':index==listactive}">
                  <i-col span="2"><i>{{index+1}}</i></i-col>
                  <i-col span="8"><span>{{item.name}}</span></i-col>
                  <i-col span="14"><span>{{item.sell}}</span></i-col>
                </div>
              </li>
            </ul>
            <Page :total="100"/>
          </Card>
        </i-col>
        <i-col span="2">
          <Row type="flex" justify="center">
              <Icon type="ios-arrow-round-forward" class="icon_jiantou_class"/>
          </Row>
        </i-col>
        <i-col span="13">
          <Card title="毒死蜱的使用分布" :padding="0" class="syztfb sycppzfb">
            <router-link to="/sjtjfx/trpsyfx" slot="extra">查看详情</router-link>
            <div class="chart2" ref="chart2"></div>
          </Card>
        </i-col>
      </Row>
      <Row class="shiyong_qingkuang">
        <i-col span="9">
          <Card title="农药使用情况" class="search">
            <ul class="syztfb_list mt0">
              <li v-for="(item,index) in tableData2">
                <div v-if="index<3">
                  <i-col span="2"><i class="active">{{index+1}}</i></i-col>
                  <i-col span="8"><span>{{item.name}}</span></i-col>
                  <i-col span="14"><span>{{item.sell}}</span></i-col>
                </div>
                <div v-else>
                  <i-col span="2"><i>{{index+1}}</i></i-col>
                  <i-col span="8"><span>{{item.name}}</span></i-col>
                  <i-col span="14"><span>{{item.sell}}</span></i-col>
                </div>
              </li>
            </ul>
            <Page :total="100"/>
          </Card>
        </i-col>
        <i-col span="2">
          <Row type="flex" justify="center">
            <Icon type="ios-arrow-round-forward" class="icon_jiantou_class"/>
          </Row>
        </i-col>
        <i-col span="13">
          <Card title="毒死蜱的使用分布" :padding="0" class="syztfb sycppzfb">
            <router-link to="/sjtjfx/trpsyfx" slot="extra">查看详情</router-link>
            <div class="chart2" ref="chart1"></div>
          </Card>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
  import Tables from '_c/tables'
  import echarts from 'echarts'

  export default {
    name: "dcxctj",
    components: {
      Tables
    },
    data() {
      return {
        listactive:0,
        countDate: [],
        form: {
          mail: '',
          name: '',
          desc: '',
          country: '中国',
          zone: '010',
          phone: '1000000'
        },
        columns1: [
          {
            title: '地区',
            key: 'name'
          },
          {
            title: '未巡查企业数（家)',
            key: 'key1'
          },
          {
            title: '巡查1次企业数（家）',
            key: 'key2'
          },
          {
            title: '巡查2次及以上企业数（家）',
            key: 'key3'
          },
          {
            title: '巡查主体总数（家）',
            key: 'key4'
          },
          {
            title: '巡查覆盖率（%）',
            key: 'key5'
          },
          {
            title: '巡查合格率（%）',
            key: 'key6'
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
        option2: {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '萝卜'},
                {value: 310, name: '白菜'},
                {value: 234, name: '土豆'},
                {value: 135, name: '其他'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        },
        option1: {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '萝卜'},
                {value: 310, name: '白菜'},
                {value: 234, name: '土豆'},
                {value: 135, name: '其他'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        },
        tableData2: [
          {
          name: '萝卜1',
          sell: '123000'
        }, {
          name: '萝卜2',
          sell: '123000'
        }, {
          name: '萝卜3',
          sell: '123000'
        }, {
          name: '萝卜4',
          sell: '123000'
        }, {
          name: '萝卜5',
          sell: '123000'
        }, {
          name: '萝卜6',
          sell: '123000'
        }, {
          name: '萝卜7',
          sell: '123000'
        }, {
          name: '萝卜8',
          sell: '123000'
        }, {
          name: '萝卜9',
          sell: '123000'
        },],
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
    methods: {
      initChart2() {
        const myChart = echarts.init(this.$refs.chart2)
        myChart.setOption(this.option2)
      },
      initChart1() {
        const myChart = echarts.init(this.$refs.chart1)
        myChart.setOption(this.option1)
      },
      change_list(e){
        this.listactive=e;
      }
    },
    mounted() {
      this.initChart2()
      this.initChart1()
    }
  }
</script>

<style scoped>
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
    background: #F5F7F9;
  }

  .search {
    margin-bottom: 20px;
  }

  .chart2 {
    width: 500px;
    height: 400px;
    margin: 10px auto;
  }

  .shiyong_qingkuang {
    margin-top: 10px;
  }

  .icon_jiantou_class {
    font-size: 40px;
    margin-top: 40px;
    margin-left: 10%;
  }

  .syztfb_list {
    margin-top: 0px;
    margin-bottom: 20px;
    overflow: hidden;
  }

  .syztfb_list li {
    list-style: none;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
    overflow: hidden;
  }

  .syztfb_list li i {
    display: block;
    width: 20px;
    height: 20px;
    margin-left: 20px;
    line-height: 20px;
    text-align: center;
    background: #F0F2F5;
    border-radius: 20px;
    color: #555556;
    font-style: normal
  }

  .syztfb_list li i.active {
    background: #314659;
    color: #fff;
  }
</style>
