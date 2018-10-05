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
      <Card title="常州市督查巡查统计" shadow class="xuncha_tongjibiao">
        <Button class="exportdata" slot="extra" type="primary" size="large" @click="exportData(1)">导出数据</Button>
        <template>
          <Table :columns="columns1" :data="data1" ref="table"></Table>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "dcxctj",
    data() {
      return {
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
    mounted: function () {
      this.hanleSetDate();
    },
    methods: {
      exportData(type) {
        this.$refs.table.exportCsv({
          filename: 'The original data'
        });
      },
      hanleSetDate() {
        const today = (new Date()).getTime();
        let date = (new Date()).getTime();
        date.setData(1);
        date.setMonth(0);
        this.countDate = [(new Date(date)), (new Date(today))]
      }

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
  .dcxctj{padding: 16px;background: #F5F7F9;}
  .search{margin-bottom: 20px;}
</style>
