<template>
  <div>
    <Card>
      <Row>
        <Col span="20" offset="2">
          <template>
            <Form :model="formItem" :label-width="120">
              <FormItem label="*任务名称：">
                <Input v-model="formItem.input" placeholder="请输入"></Input>
              </FormItem>
              <FormItem label="*巡查地区：">
                <template>
                  <Cascader :data="data" v-model="value1"></Cascader>
                </template>
              </FormItem>
              <FormItem label="任务起止时间：">
                <Row>
                  <DatePicker transfer type="daterange" style="width: 100%;" placement="bottom-end"
                              placeholder="请选择"></DatePicker>
                </Row>
              </FormItem>
              <FormItem label="*抽检要求：">
                <Row>
                  <Input v-model="formItem.inputxc" placeholder="请输入">
                    <span slot="append">个样品/企业</span>
                  </Input>
                </Row>
              </FormItem>
              <FormItem label="备注：">
                <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                       placeholder="请输入"></Input>
              </FormItem>
              <FormItem label="上传附件：">
                <i-col span="20" class="fr upcolor"><p>支持扩展名：.rar .zip .doc .docx .pdf .jpg...</p></i-col>
                <Upload action="//jsonplaceholder.typicode.com/posts/" multiple="true">
                  <Button icon="ios-cloud-upload-outline">上传文件</Button>
                </Upload>
              </FormItem>
              <i-col class="tijiao">
                <Button type="primary">提交</Button>
              </i-col>
            </Form>
          </template>
        </Col>
      </Row>
    </Card>
  </div>
</template>
<script>

  export default {
    name:'add-cpcjrw',
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
          }]
      }
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
</style>


