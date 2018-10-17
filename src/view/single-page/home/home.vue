<template>
  <div>
    <Row :gutter="16" class="tongji_body">
      <i-col span="17">
        <Card shadow title="溯源信息统计" style="text-align: left">
          <Row :gutter="16">
            <Col span="4">
              <div class="suyuan_message"><h3>溯源主体总数</h3>
                <p><span>682</span>家</p>
              </div>
            </Col>
            <Col span="4">
              <div class="suyuan_message"><h3>溯源三品企业数</h3>
                <p><span>682</span>家</p>
              </div>
            </Col>
            <Col span="4">
              <div class="suyuan_message"><h3>溯源产品数</h3>
                <p><span>682</span>家</p>
              </div>
            </Col>
            <Col span="4">
              <div class="suyuan_message"><h3>溯源产品品种数</h3>
                <p><span>682</span>家</p>
              </div>
            </Col>
            <Col span="4">
              <div class="suyuan_message"><h3>追溯码打印张数</h3>
                <p><span>682</span>家</p>
              </div>
            </Col>
            <Col span="4">
              <div class="suyuan_message"><h3>追溯码查询次数</h3>
                <p><span>682</span>家</p>
              </div>
            </Col>
          </Row>
        </Card>
      </i-col>
      <i-col span="7">
        <Card shadow title="待办事件">
          <Row>
            <ul>
              <li class="dbsj_list"><span>主体注册待审核 <i>3</i>家 <router-link to="/syztgl/zcrzsh">点击立即处理</router-link></span>
              </li>
              <li class="dbsj_list"><span>主体更新待审核 <i>3</i>家 <router-link to="/syztgl/dagxsh">点击立即处理</router-link></span>
              </li>
              <li class="dbsj_list" :class="{'fwb':yichang>0}"><span>异常主体待处理 <i>{{yichang}}</i>家 <router-link
                to="/syztgl/ycztgl">点击立即处理</router-link></span></li>
            </ul>
          </Row>
        </Card>
      </i-col>
    </Row>
    <Row :gutter="16" class="tongji_body">
      <i-col span="17">
        <Tabs value="dcxj" class="bg-white dcxc_class">
          <TabPane label="督查巡检" name="dcxj">
            <router-link to="/dcxcgl/dcxcjl">
              <Row :gutter="16">
                <Col span="4">
                  <div class="dcxj_list"><h3>未巡查主体数</h3>
                    <p><span>6</span>家</p>
                  </div>
                </Col>
                <Col span="4">
                  <div class="dcxj_list"><h3>巡查1次主体数</h3>
                    <p><span>2</span>家</p>
                  </div>
                </Col>
                <Col span="4">
                  <div class="dcxj_list"><h3>巡查2次主体数</h3>
                    <p><span>62</span>家</p>
                  </div>
                </Col>
                <Col span="4">
                  <div class="dcxj_list"><h3>巡查主体总数</h3>
                    <p><span>68</span>家</p>
                  </div>
                </Col>
                <Col span="4">
                  <div class="dcxj_list"><h3>巡查覆盖率</h3>
                    <p><span>68</span>%</p>
                  </div>
                </Col>
                <Col span="4">
                  <div class="dcxj_list"><h3>巡查总次数</h3>
                    <p><span>62</span>次</p>
                  </div>
                </Col>
              </Row>
            </router-link>
          </TabPane>
          <TabPane label="产品抽检" name="cpcj">
            <router-link to="/cpcjgl/cpcjjl">
              <Row :gutter="16">
                <Col span="4">
                  <div class="dcxj_list"><h3>未抽检主体数</h3>
                    <p><span>6</span>家</p>
                  </div>
                </Col>
                <Col span="4">
                  <div class="dcxj_list"><h3>抽检1次主体数</h3>
                    <p><span>2</span>家</p>
                  </div>
                </Col>
                <Col span="4">
                  <div class="dcxj_list"><h3>抽检2次主体数</h3>
                    <p><span>62</span>家</p>
                  </div>
                </Col>
                <Col span="4">
                  <div class="dcxj_list"><h3>抽检主体总数</h3>
                    <p><span>68</span>家</p>
                  </div>
                </Col>
                <Col span="4">
                  <div class="dcxj_list"><h3>抽检覆盖率</h3>
                    <p><span>68</span>%</p>
                  </div>
                </Col>
                <Col span="4">
                  <div class="dcxj_list"><h3>抽检总次数</h3>
                    <p><span>62</span>次</p>
                  </div>
                </Col>
              </Row>
            </router-link>
          </TabPane>
          <a href="" slot="extra" class="more">更多</a>
        </Tabs>
        <!--溯源产品分布-->
        <Card title="溯源产品品种分布" :padding="0" shadow class="sycppzfb">
          <a href="" slot="extra">更多</a>
          <Row :gutter="16" class='dabing'>
            <div @click="modal3 = true">
              <Col span="4">
                <chart-pie style="height: 100px;" :value="pieData1"></chart-pie>
                <p><span>122</span>种</p>
              </Col>
              <Col span="4">
                <chart-pie style="height: 100px;" :value="pieData2"></chart-pie>
                <p><span>122</span>种</p>
              </Col>
              <Col span="4">
                <chart-pie style="height: 100px;" :value="pieData3"></chart-pie>
                <p><span>122</span>种</p>
              </Col>
              <Col span="4">
                <chart-pie style="height: 100px;" :value="pieData4"></chart-pie>
                <p><span>122</span>种</p>
              </Col>
              <Col span="4">
                <chart-pie style="height: 100px;" :value="pieData5"></chart-pie>
                <p><span>122</span>种</p>
              </Col>
              <Col span="4">
                <chart-pie style="height: 100px;" :value="pieData6"></chart-pie>
                <p><span>122</span>种</p>
              </Col>
            </div>
          </Row>
        </Card>
        <!--追溯码打印趋势-->
        <Card title="追溯码打印趋势" :padding="0" shadow class="sycppzfb">
          <a href="" slot="extra">更多</a>
          <div class="charts" ref="chart"></div>
        </Card>
      </i-col>
      <i-col span="7">
        <Card title="溯源主体分布" :padding="0" shadow class="syztfb">
          <a href="" slot="extra">更多</a>
          <ul class="syztfb_list">
            <li v-for="(item,index) in tableData2">
              <div v-if="index<3">
                <i-col span="4"><i class="active">{{index+1}}</i></i-col>
                <i-col span="12" class="shenglue"><span>{{item.name}}</span></i-col>
                <i-col span="7" offset="1" class="shenglue"><span>{{item.sell}}</span></i-col>
              </div>
              <div v-else>
                <i-col span="4"><i>{{index+1}}</i></i-col>
                <i-col span="12" class="shenglue"><span>{{item.name}}</span></i-col>
                <i-col span="7" offset="1" class="shenglue"><span>{{item.sell}}</span></i-col>
              </div>
            </li>
          </ul>
        </Card>
        <Card title="追溯码打印情况" :padding="0" shadow class="syztfb sycppzfb">
          <router-link to="/sjtjfx/ncpzsmtj" slot="extra">更多</router-link>
          <Tabs value="name1">
            <TabPane label="按地区" name="name1">
              <ul class="syztfb_list mt0">
                <li v-for="(item,index) in tableData2">
                  <div v-if="index<3">
                    <i-col span="4"><i class="active">{{index+1}}</i></i-col>
                    <i-col span="12" class="shenglue"><span>{{item.name}}</span></i-col>
                    <i-col span="7" offset="1" class="shenglue"><span>{{item.sell}}</span></i-col>
                  </div>
                  <div v-else>
                    <i-col span="4"><i>{{index+1}}</i></i-col>
                    <i-col span="12" class="shenglue"><span>{{item.name}}</span></i-col>
                    <i-col span="7" offset="1" class="shenglue"><span>{{item.sell}}</span></i-col>
                  </div>
                </li>
              </ul>
            </TabPane>
            <TabPane label="按主体" name="name2">标签二的内容</TabPane>
          </Tabs>
        </Card>
        <Card title="投入品使用排行" :padding="0" shadow class="syztfb sycppzfb">
          <router-link to="/sjtjfx/trpsyfx" slot="extra">更多</router-link>
          <Tabs value="name1">
            <TabPane label="农药" name="name1">
              <ul class="syztfb_list mt0">
                <li v-for="(item,index) in tableData2">
                  <div v-if="index<3">
                    <i-col span="4"><i class="active">{{index+1}}</i></i-col>
                    <i-col span="12" class="shenglue"><span>{{item.name}}</span></i-col>
                    <i-col span="7" offset="1" class="shenglue"><span>{{item.sell}}</span></i-col>
                  </div>
                  <div v-else>
                    <i-col span="4"><i>{{index+1}}</i></i-col>
                    <i-col span="12" class="shenglue"><span>{{item.name}}</span></i-col>
                    <i-col span="7" offset="1" class="shenglue"><span>{{item.sell}}</span></i-col>
                  </div>
                </li>
              </ul>
            </TabPane>
            <TabPane label="兽药" name="name2">标签二的内容</TabPane>
            <TabPane label="肥料" name="name3">标签三的内容</TabPane>
            <TabPane label="饲料" name="name4">标签四的内容</TabPane>
          </Tabs>
        </Card>
      </i-col>
    </Row>
    <Modal v-model="modal2" width="360" :closable="false">
      <div style="text-align:center">
        <p>某某某，您好。常州市目前有待处理异常主体{{yichang}}家，是否现在处理？</p>
        <Row>
          <Col span="9">
            <Checkbox @on-change="setRemind" v-model="single">下次登录不在提醒</Checkbox>
          </Col>
        </Row>
      </div>
      <div slot="footer">
        <Row :gutter="16">
          <Col span="8" offset="3">
            <Button type="primary" to="/syztgl/ycztgl">立即处理</Button>
          </Col>
          <Col span="8">
            <Button @click="modal2=false">稍后处理</Button>
          </Col>
        </Row>
      </div>
    </Modal>
    <Modal v-model="modal3" width="1000" footer-hide="true">
      <p slot="header" style="color:#f60;text-align:center">
        <span>常州市蔬菜产品种类分布</span>
      </p>
      <div>
        <Row :gutter="16">
          <Col span="12">
            <Card title="种类分布图" shadow>
              <div class="chart2" ref="chart2"></div>
            </Card>
          </Col>
          <Col span="12">
            <Card title="产品明细" shadow>
              <tables ref="tables" editable v-model="tableData" :columns="columns"/>
            </Card>
          </Col>
        </Row>
      </div>
    </Modal>
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
            name: '门店1门店1门店1门店1门店1门店1门店1',
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
            const myChart = echarts.init(_this.$refs.chart)
            myChart.resize();
            const myChart2 = echarts.init(_this.$refs.chart2)
            myChart2.resize();
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

  .ivu-modal-body {
    padding: 16px;
  }

  .shenglue {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .syztfb_list span {
    text-align: left;
    display: block;
  }

  .dcxc_class .more {
    font-size: 14px;
    padding-top: 15px;
  }

</style>
<style>
  .dcxc_class .ivu-tabs-tab {
    padding: 16px 16px;
  }
</style>
