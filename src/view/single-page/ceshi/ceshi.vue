<template>
  <div>
    <Card title="产品明细" shadow>

    </Card>
  </div>
</template>
<script>
  import echarts from 'echarts'
  import Cookies from 'js-cookie'
  import {ChartPie, ChartBar} from '_c/charts'
  import {getTableData} from '@/api/data'
  import Tables from '_c/tables'

  export default {
    components: {
      ChartPie,
      ChartBar,
      Tables
    },
    data() {
      return {
        modal3: false,
        inforCardData: [
          {title: '新增用户', icon: 'md-person-add', count: 803, color: '#2d8cf0'},
          {title: '累计点击', icon: 'md-locate', count: 23432, color: '#19be6b'},
          {title: '新增问答', icon: 'md-help-circle', count: 142, color: '#ff9900'},
          {title: '分享统计', icon: 'md-share', count: 657, color: '#ed3f14'},
          {title: '新增互动', icon: 'md-chatbubbles', count: 12, color: '#E46CBB'},
          {title: '新增页面', icon: 'md-map', count: 14, color: '#9A66E4'}
        ],
        pieData1: {
          data: [
            {value: 28, name: '蔬菜'},
            {value: 100, name: '其他'}
          ],
          color: ['#48A1FE', '#F0F2F5'],
          textColor: ['#1890FF', '#1890FF'],
        },
        pieData2: {
          data: [{value: 22, name: '水果'},
            {value: 100, name: '其他'}],
          color: ['#77D38A', '#F0F2F5'],
          textColor: ['#929292', '#272727'],
        },
        pieData3: {
          data: [
            {value: 28, name: '水产品'},
            {value: 100, name: '其他'}
          ],
          color: ['#FCDB6C', '#F0F2F5'],
          textColor: ['#929292', '#272727'],
        },
        pieData4: {
          data: [
            {value: 28, name: '畜禽'},
            {value: 100, name: '其他'}
          ],
          color: ['#FCDB6C', '#F0F2F5'],
          textColor: ['#929292', '#272727'],
        },
        pieData5: {
          data: [
            {value: 28, name: '粮油'},
            {value: 100, name: '其他'}
          ],
          color: ['#FCDB6C', '#F0F2F5'],
          textColor: ['#929292', '#272727'],
        },
        pieData6: {
          data: [
            {value: 28, name: '其他'},
            {value: 100, name: '总数'}
          ],
          color: ['#FCDB6C', '#F0F2F5'],
          textColor: ['#929292', '#272727'],
        },
        barData: {
          Mon: 13253,
          Tue: 34235,
          Wed: 26321,
          Thu: 12340,
          Fri: 24643,
          Sat: 1322,
          Sun: 1324
        },
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
        columns: [
          {
            title: '序号', width: 60, align: 'center', type: 'index'
          },
          {title: '产品', key: 'chanpin', width: 80},
          {title: '数量', key: 'shuliang', width: 60},
          {title: '占蔬菜产品比重', key: 'baifen',},
          {title: '占总产品比重', key: 'baifen',}
        ],
        tableData: [],
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
        modal2: false,
        single: false,
        yichang: 2,
        dateType: 'day',
        countDate: [(new Date()), (new Date())],
        tableColumns: [
          {
            type: 'index'
          }, {
            title: '名称',
            key: 'name'
          }, {
            title: '销售额',
            key: 'sell'
          }],
        tableData2: [
          {
            name: '门店1',
            sell: '123000'
          }, {
            name: '门店2',
            sell: '123000'
          }, {
            name: '门店3',
            sell: '123000'
          }, {
            name: '门店4',
            sell: '123000'
          }, {
            name: '门店5',
            sell: '123000'
          },]
      }
    },
    methods: {
      setRemind() {
        if (this.single) {
          Cookies.set('remind', 'false', {expires: 1})
        } else {
          Cookies.set('remind', 'true', {expires: 1})
        }
      },
      getRemind() {
        let remind = Cookies.get('remind')
        if (typeof remind == 'undefined') {
          if (this.yichang > 0) {
            this.modal2 = true
          }
        } else {
          if (remind == 'false') {
            this.modal2 = false
          } else {
            this.modal2 = true
          }
        }
      },
      handleSetDate(type) {
        const today = (new Date()).getTime()
        let date
        switch (type) {
          case 'day':
            date = today
            break
          case 'week':
            date = today - 86400000 * 7
            break
          case 'month':
            date = today - 8640000 * 30
            break
          case 'year':
            date = today - 8640000 * 365
            break
        }
        this.countDate = [(new Date(date)), (new Date(today))]
      },
      classObject(e) {
        if (e > 3) {
          return true
        }
      },
      initChart() {
        const myChart = echarts.init(this.$refs.chart)
        myChart.setOption(this.option)
      },
      initChart2() {
        const myChart = echarts.init(this.$refs.chart2)
        myChart.setOption(this.option2)
      },
      selfAdaption() {
        let _this = this;
        setTimeout(() => {
          window.addEventListener('resize', function () {
            const myChart = echarts.init(_this.$refs.chart2)
            myChart.resize();
          })
        }, 10)
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initChart()
        this.initChart2()
        this.selfAdaption()
      })

      this.getRemind()
      getTableData().then(res => {
        this.tableData = res.data
      })
    }
  }
</script>
<style scoped>
  .count {
    font-size: 24px;
  }

  .breadcrumbstyle {
    height: 54px;
    width: 100%;
    text-align: left;
    background: #fff;
    line-height: 54px;
    padding-left: 20px;
    margin-bottom: 20px;
    color: #8D8D8D;
  }

  .fwb {
    font-weight: bold;
    color: red;
  }

  .dbsj_list {
    height: 40px;
    line-height: 40px;
    text-align: left;
    list-style: none;
    border-bottom: 1px dashed #D2D2D2;
  }

  .dbsj_list a {
    float: right;
  }

  .dbsj_list i {
    margin-left: 5px;
    color: #FE9D37;
    font-style: normal;
  }

  .tongji_body {
    padding: 16px;
  }

  .suyuan_message {
    border: 1px solid #E4E4E4;
    box-sizing: border-box;
    text-align: center;
    height: 120px;
  }

  .suyuan_message h3 {
    font-size: 14px;
    padding-top: 30px;
    font-weight: 400;
  }

  .suyuan_message span {
    font-size: 28px;
    color: #1890FF;
  }

  .suyuan_message p {
    margin-top: 10px;
  }

  .dcxj_list {
    text-align: center;
    height: 120px;
  }

  .dcxj_list h3 {
    font-size: 14px;
    padding-top: 30px;
    font-weight: 400;
    color: #515a6e;
  }

  .dcxj_list span {
    font-size: 28px;
    color: #1890FF;
  }

  .dcxj_list p {
    margin-top: 10px;
    color: #515a6e;
  }

  .bg-white {
    background: #fff;
  }

  .more {
    padding-top: 10px;
    margin-right: 20px;
    display: block;
  }

  .sycppzfb {
    text-align: left;
    margin-top: 20px;
    background: #fff;
  }

  .charts {
    width: 100%;
    height: 400px;
    margin-top: 20px;
  }

  .syztfb {
    text-align: left;
    background: #fff;
    overflow: hidden;
  }

  .syztfb_list {
    margin-top: 20px;
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

  .mt0 {
    margin-top: 0;
    margin-bottom: 0;
  }

  .dabing p {
    text-align: center;
  }

  .dabing {
    text-align: center;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }

  .dabing span {
    font-size: 24px;
    color: #1890FF;
  }

  .chart2 {
    width: 440px;
    height: 450px;
  }

</style>
