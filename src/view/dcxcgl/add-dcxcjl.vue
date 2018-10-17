<template>
  <div>
    <Form :model="formItem" :label-width="120">
      <Card title="基本资料" class="detailed_card2">
        <Row>
          <Col span="20" offset="2">
            <template>
              <FormItem label="*被检测区域：">
                <template>
                  <cascaderMulti @on-change="array => end_code = array" :data="data" placeholder="地区"></cascaderMulti>
                </template>
              </FormItem>
              <FormItem label="任务起止时间：">
                <Row>
                  <DatePicker type="date" placeholder="2015-10-02" style="width: 200px"></DatePicker>
                </Row>
              </FormItem>
              <FormItem label="*检查内容：">
                <Row>
                  <CheckboxGroup v-model="disabledGroup">
                    <Checkbox label="无公害农产品"></Checkbox>
                    <Checkbox label="绿色食品"></Checkbox>
                    <Checkbox label="有机食品"></Checkbox>
                    <Checkbox label="地理标志农产品"></Checkbox>
                    <Checkbox label="日常监管"></Checkbox>
                  </CheckboxGroup>
                </Row>
              </FormItem>
              <FormItem label="*所属行业：">
                <Row>
                  <CheckboxGroup v-model="disabledGroup">
                    <Checkbox label="种植业"></Checkbox>
                    <Checkbox label="畜牧业"></Checkbox>
                    <Checkbox label="渔业"></Checkbox>
                    <Checkbox label="其他"></Checkbox>
                  </CheckboxGroup>
                </Row>
              </FormItem>
              <FormItem label="检测记录：">
                <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                       placeholder="请输入"></Input>
              </FormItem>
              <i-col class="tijiao">
                <Button type="primary">提交</Button>
              </i-col>
            </template>
          </Col>
        </Row>
      </Card>
      <Card title="被检单位" class="detailed_card2">
        <Row>
          <Col span="20" offset="2">
            <i-col span="20">
              <FormItem label="*被检单位：">
                <Select v-model="modellist" filterable="true">
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
                  <Select filterable="true">
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
      <Card title="检查单位" class="detailed_card2">
        <Row>
          <Col span="20" offset="2">
            <i-col span="20">
              <FormItem label="*被检单位：">
                <Select filterable="true" v-model="modellist">
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
                  <Select filterable="true">
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
      <Card title="检查人员" class="detailed_card2">
        <Row>
          <Col span="20" offset="2">
            <i-col span="20">
              <FormItem label="*检查人员：">
                <Select filterable="true" v-model="jcryModel">
                  <Option v-for="item in list" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
            </i-col>
            <i-col span="4">
              <Button v-on:click="jcry += 1">+添加</Button>
            </i-col>
            <div v-for="(item,index) in jcry">
              <i-col span="20">
                <FormItem label="*检查人员：">
                  <Select filterable="true">
                    <Option v-for="item in list" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                </FormItem>
              </i-col>
              <i-col span="4">
                <Button v-on:click="jcry += 1">+添加</Button>
                <Button v-on:click="jcry -= 1" type="error">-删除</Button>
              </i-col>
            </div>
          </Col>
        </Row>
      </Card>
      <Card title="产地环境的安全性" class="detailed_card2">
        <Row>
          <Col span="20" offset="2">
            <i-col span="20">
              <FormItem label="*检查人员：">
                <Select  filterable="true" v-model="modellist">
                  <Option v-for="item in list" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
            </i-col>
            <i-col span="4">
              <Button v-on:click="jcry += 1">+添加</Button>
            </i-col>
            <div v-for="(item,index) in jcry">
              <i-col span="20">
                <FormItem filterable="true" label="*检查人员：">
                  <Select>
                    <Option v-for="item in list" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                </FormItem>
              </i-col>
              <i-col span="4">
                <Button v-on:click="jcry += 1">+添加</Button>
                <Button v-on:click="jcry -= 1" type="error">-删除</Button>
              </i-col>
            </div>
          </Col>
        </Row>
      </Card>
      <Card title="生产经营的规范性" class="detailed_card2">
        <Row>
          <Col span="20" offset="2">
            <i-col span="20">
              <FormItem label="*检查结果：">
                <Select filterable="true" v-model="jcjg2Model">
                  <Option v-for="item in jcjg2" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
            </i-col>
          </Col>
        </Row>
      </Card>
      <Card title="产品质量的安全性" class="detailed_card2">
        <Row>
          <Col span="20" offset="2">
            <i-col span="20">
              <FormItem label="*检查结果：">
                <Select filterable="true" v-model="jcjg3Model">
                  <Option v-for="item in jcjg3" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
            </i-col>
          </Col>
        </Row>
      </Card>
      <Card title="包装标识的合法性" class="detailed_card2">
        <Row>
          <Col span="20" offset="2">
            <i-col span="20">
              <FormItem label="*检查结果：">
                <Select filterable="true" v-model="jcjg4Model">
                  <Option v-for="item in jcjg4" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
            </i-col>
          </Col>
        </Row>
      </Card>
      <Card title="其他" class="detailed_card2">
        <Row>
          <Col span="20" offset="2">
            <i-col span="20">
              <FormItem label="*检查结果：">
                <Select filterable="true" v-model="jcjg5Model">
                  <Option v-for="item in jcjg5" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
            </i-col>
          </Col>
        </Row>
      </Card>
      <Card title="上传图片（图片大小不得大于2M）" class="detailed_card2">
        <template>
          <div class="demo-upload-list" v-for="item in uploadList">
            <template v-if="item.status === 'finished'">
              <img :src="item.url">
              <div class="demo-upload-list-cover">
                <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
              </div>
            </template>
            <template v-else>
              <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
            </template>
          </div>
          <Upload
            ref="upload"
            :show-upload-list="false"
            :default-file-list="defaultList"
            :on-success="handleSuccess"
            :format="['jpg','jpeg','png']"
            :max-size="2048"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            multiple="true"
            type="drag"
            action="//jsonplaceholder.typicode.com/posts/"
            style="display: inline-block;width:58px;">
            <div style="width: 58px;height:58px;line-height: 58px;">
              <Icon type="ios-camera" size="20"></Icon>
            </div>
          </Upload>
          <Modal title="View Image" v-model="visible">
            <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
          </Modal>
        </template>
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
    name:'add-dcxcjl',
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
                label: '故宫',
                multiple: true
              },
              {
                value: 'tiantan',
                label: '天坛',
                multiple: true
              },
              {
                value: 'wangfujing',
                label: '王府井',
                multiple: true
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
                    multiple: true
                  },
                  {
                    value: 'shizilin',
                    label: '狮子林',
                    multiple: true
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


