<template>
  <div>
    <Form :model="formItem" :label-width="120">
      <Card title="基本资料">
        <Row>
          <Col span="20" offset="2">
            <i-col span="24">
              <FormItem label="*被检区域：">
                <template>
                  <Cascader :data="data" v-model="value1"></Cascader>
                </template>
              </FormItem>
            </i-col>
          </Col>
          <Col span="20" offset="2">
            <i-col span="12">
              <FormItem label="*被检单位：">
                <template>
                  <Cascader :data="data" v-model="value1"></Cascader>
                </template>
              </FormItem>
            </i-col>
            <i-col span="12">
              <FormItem label="*通讯地址：">
                <Row>
                  <Input v-model="value" placeholder="请输入"/>
                </Row>
              </FormItem>
            </i-col>
            <i-col span="12">
              <FormItem label="*负责人：">
                <Row>
                  <Input v-model="value" placeholder="请输入"/>
                </Row>
              </FormItem>
            </i-col>
            <i-col span="12">
              <FormItem label="*联系方式：">
                <Row>
                  <Input v-model="value" placeholder="请输入"/>
                </Row>
              </FormItem>
            </i-col>
            <i-col span="12">
              <FormItem label="检测单位：">
                <Select v-model="jcdw">
                  <Option v-for="item in jcdwList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
            </i-col>
            <i-col span="12">
              <FormItem label="任务来源：">
                <Select v-model="jcdw">
                  <Option v-for="item in jcdwList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
            </i-col>
            <i-col span="12">
              <FormItem label="执行标准：">
                <Input v-model="value" placeholder="请输入"/>
              </FormItem>
            </i-col>
            <i-col span="12">
              <FormItem label="检测类别：">
                <Select v-model="jcdw">
                  <Option v-for="item in jcdwList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
            </i-col>
            <i-col span="12">
              <FormItem label="检测任务：">
                <Input v-model="value" placeholder="请输入"/>
              </FormItem>
            </i-col>
            <i-col span="12">
              <FormItem label="*采样时间：">
                <DatePicker type="date" placeholder="2015-10-02" style="width: 100%;"></DatePicker>
              </FormItem>
            </i-col>
          </Col>
        </Row>
      </Card>
      <Card title="采样人员">
        <Row>
          <Col span="20" offset="2">
            <i-col span="20">
              <FormItem label="*姓名：">
                <Select v-model="modellist">
                  <Option v-for="item in list" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
            </i-col>
            <i-col span="4">
              <Button v-on:click="bjdw += 1">+添加</Button>
            </i-col>
            <div v-for="(item,index) in bjdw">
              <i-col span="20">
                <FormItem label="*被检单位：">
                  <Select>
                    <Option v-for="item in list" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                </FormItem>
              </i-col>
              <i-col span="4">
                <Button v-on:click="bjdw += 1">+添加</Button>
                <Button v-on:click="bjdw -= 1" type="error">-删除</Button>
              </i-col>
            </div>
          </Col>
        </Row>
      </Card>
      <Card title="检测记录">
        <Row>
          <Col span="20" offset="2">
            <i-col span="12">
              <FormItem label="*产品类别：">
                <template>
                  <Cascader :data="data" v-model="value1"></Cascader>
                </template>
              </FormItem>
            </i-col>
            <i-col span="12">
              <FormItem label="*产品名称：">
                <Row>
                  <Input v-model="value" placeholder="请输入"/>
                </Row>
              </FormItem>
            </i-col>
            <i-col span="12">
              <FormItem label="*抽样地点：">
                <Row>
                  <Input v-model="value" placeholder="请输入"/>
                </Row>
              </FormItem>
            </i-col>
            <i-col span="12">
              <FormItem label="*检测性质：">
                <Row>
                  <Input v-model="value" placeholder="请输入"/>
                </Row>
              </FormItem>
            </i-col>
            <i-col span="12">
              <FormItem label="*样品编号：">
                <Select v-model="jcdw">
                  <Option v-for="item in jcdwList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
            </i-col>
            <i-col span="12">
              <FormItem label="*检测依据：">
                <Input value="GB/T5009.199-2003" />
              </FormItem>
            </i-col>
            <i-col span="12">
              <FormItem label="*检测方式：">
                <Input value="酶抑制率法"/>
              </FormItem>
            </i-col>
            <i-col span="12">
              <FormItem label="*检测结论：">
                <Select v-model="jcdw">
                  <Option v-for="item in jcdwList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
            </i-col>
          </Col>
        </Row>
      </Card>
      <Card>
        <Row>
          <Col>
            <i-col class="tijiao">
              <Button type="primary">提交</Button>
            </i-col>
          </Col>
        </Row>
      </Card>
    </Form>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        formItem: {
          input: '',
          select: '',
          radio: 'male',
          checkbox: [],
          switch: true,
          date: '',
          time: '',
          slider: [20, 50],
          textarea: '',
          inputxx: ''
        },
        value1: [],
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
          }],
        modellist: 0,
        list: [
          {
            value: '0',
            label: '带自动搜索的选择，单选'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ],
        jcdwList: [
          {
            value: '0',
            label: '带自动搜索的选择，单选'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ],
        bjdw: 0,
        jcry: 0,
        jcdw: 0,
        jcjg1Model: 0,
        jcjg2Model: 0,
        jcjg3Model: 0,
        jcjg4Model: 0,
        jcjg5Model: 0,
        jcjg1: [
          {
            value: '0',
            label: '合格'
          }, {
            value: '1',
            label: '基本合格'
          }, {
            value: '2',
            label: '不合格'
          },],
        jcjg2: [
          {
            value: '0',
            label: '合格'
          }, {
            value: '1',
            label: '基本合格'
          }, {
            value: '2',
            label: '不合格'
          },],
        jcjg3: [
          {
            value: '0',
            label: '合格'
          }, {
            value: '1',
            label: '基本合格'
          }, {
            value: '2',
            label: '不合格'
          },],
        jcjg4: [
          {
            value: '0',
            label: '合格'
          }, {
            value: '1',
            label: '基本合格'
          }, {
            value: '2',
            label: '不合格'
          },],
        jcjg5: [
          {
            value: '0',
            label: '合格'
          }, {
            value: '1',
            label: '基本合格'
          }, {
            value: '2',
            label: '不合格'
          },],
        defaultList: [
          {
            'name': 'a42bdcc1178e62b4694c830f028db5c0',
            'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
          },
          {
            'name': 'bc7521e033abdd1e92222d733590f104',
            'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
          }
        ],
        imgName: '',
        visible: false,
        uploadList: []
      }
    },
    methods: {
      handleView(name) {
        this.imgName = name;
        this.visible = true;
      },
      handleRemove(file) {
        const fileList = this.$refs.upload.fileList;
        this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
      },
      handleSuccess(res, file) {
        file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
        file.name = '7eb99afb9d5f317c912f08b5212fd69a';
      },
      handleFormatError(file) {
        this.$Notice.warning({
          title: 'The file format is incorrect',
          desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
        });
      },
      handleMaxSize(file) {
        this.$Notice.warning({
          title: 'Exceeding file size limit',
          desc: 'File  ' + file.name + ' is too large, no more than 2M.'
        });
      },
      handleBeforeUpload() {
        const check = this.uploadList.length < 5;
        if (!check) {
          this.$Notice.warning({
            title: 'Up to five pictures can be uploaded.'
          });
        }
        return check;
      }
    },
    mounted() {
      this.uploadList = this.$refs.upload.fileList;
    }
  }

</script>
<style>
  .tijiao button {
    display: block;
    margin: 10px auto;
  }

  .fr {
    float: right;
  }

  .upcolor {
    color: #8D8D8D;
  }

  .demo-upload-list {
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    margin-right: 4px;
  }

  .demo-upload-list img {
    width: 100%;
    height: 100%;
  }

  .demo-upload-list-cover {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .6);
  }

  .demo-upload-list:hover .demo-upload-list-cover {
    display: block;
  }

  .demo-upload-list-cover i {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
  }
</style>


