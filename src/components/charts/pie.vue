<template>
  <div ref="dom" class="charts chart-pie"></div>
</template>

<script>
  import echarts from 'echarts'
  import tdTheme from './theme.json'

  echarts.registerTheme('tdTheme', tdTheme)
  export default {
    name: 'ChartPie',
    props: {
      value: Array,
      text: String,
      subtext: String
    },
    mounted() {
      this.$nextTick(() => {
        let option = {
          color: this.value.color,
          title: {
            text: this.value.data[0].name,
            subtext: parseInt((this.value.data[0].value / (this.value.data[0].value + this.value.data[1].value)) * 100) + '%',
            x: 'center',
            y: '25',
            textStyle: {
              fontSize: '14',
              color: this.value.textColor[0],
              fontWeight: 'normal',
              verticalAlign: 'bottom',
            },
            subtextStyle: {
              fontSize: '20',
              fontWeight: 'bold',
              color: this.value.textColor[1],
            }
          },
          tooltip: {
            show: false,
            trigger: 'item',
            textStyle: {
              color: '#333'
            }
          },
          series: [
            {
              type: 'pie',
              radius: ['80%', '100%'],
              avoidLabelOverlop: false,
              hoverAnimation: false,
              silent: true,
              label: {
                normal: {
                  show: false,
                  position: 'center',
                  formatter: function () {
                    return '测试'
                  },
                  textStyle: {
                    fontSize: 14,
                    color: 'green'
                  }
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '14',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.value.data
            }
          ]
        }
        let dom = echarts.init(this.$refs.dom, 'tdTheme')
        dom.setOption(option)
      })
    }
  }
</script>

<style lang="less">
  .charts {
    //
  }
</style>
