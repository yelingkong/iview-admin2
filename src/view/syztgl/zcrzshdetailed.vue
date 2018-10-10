<template>
  <div>
    <Affix :offset-top="60">
      <Card>
        <!--<h2>ID: {{ $route.params.id }}</h2>-->
        <Row>
          <i-col span="20">
            <h2>常州市洛丰果品专业合作社</h2>
          </i-col>
          <div>
            <i-col span="4">
              <Button class="shtg" @click="modal_see=true" type="primary">审核通过</Button>
              <Button class="shtg" @click="modal_see=true" type="error">不通过</Button>
            </i-col>
            <i-col span="20">
              <i-col class="detailed" span="12"><p>法定代表人：<span>张佳明</span></p></i-col>
              <i-col class="detailed" span="12"><p>联系电话：<span>13810123398</span></p></i-col>
              <i-col class="detailed" span="12"><p>主体类型：<span>生产主体</span></p></i-col>
              <i-col class="detailed" span="12"><p>主体属性：<span>一般主体</span></p></i-col>
              <i-col class="detailed" span="12"><p>注册时间：<span>2018-01-10 16:13:36</span></p></i-col>
            </i-col>
            <i-col span="4" class="detailed status">
              <span>状态</span>
              <p>待审核</p>
            </i-col>
          </div>
        </Row>
      </Card>
    </Affix>
    <Card title="主体信息" :padding="0" shadow class="detailed">
      <Row :gutter="16">
        <div class="detaileds">
          <i-col span="8">
            <div class="detailed">主体名称：<span>常州市洛丰果品专业合作社</span></div>
          </i-col>
          <i-col span="8">
            <div class="detailed">主体性质：<span>合作社</span></div>
          </i-col>
          <i-col span="8">
            <div class="detailed">证件类型：<span>普通营业执照</span></div>
          </i-col>
          <i-col span="8">
            <div class="detailed">企业注册号：<span>32042119570929022X</span></div>
          </i-col>
          <i-col span="8">
            <div class="detailed">组织机构代码：<span>75053388-2</span></div>
          </i-col>
          <i-col span="8">
            <div class="detailed">营业期限：<span>2003/06/04 - 2023/06/03</span></div>
          </i-col>
          <i-col span="8">
            <div class="detailed">主体类型：<span>生产主体</span></div>
          </i-col>
          <i-col span="8">
            <div class="detailed">主体属性：<span>一般主体</span></div>
          </i-col>
          <i-col span="8">
            <div class="detailed">所属行业：<span>种植业，畜牧业，渔业</span></div>
          </i-col>
          <i-col span="8">
            <div class="detailed">年产量(种植业)：<span>13.5吨</span></div>
          </i-col>
          <i-col span="8">
            <div class="detailed">年产量(畜牧业)：<span>300头</span></div>
          </i-col>
          <i-col span="8">
            <div class="detailed">年产量(水产品)：<span>300公斤</span></div>
          </i-col>
          <i-col span="8">
            <div class="detailed">注册地所在：<span>常州市武进区洛阳镇洛东村</span></div>
          </i-col>
          <i-col span="8">
            <div class="detailed">详细地址：<span>洛阳镇洛东村101县道</span></div>
          </i-col>
          <i-col span="8">
            <div class="detailed">经纬度：<span>经度119.811893    纬度31.763468</span></div>
          </i-col>
        </div>
      </Row>
    </Card>
    <Card title="法定代表人信息" :padding="0" shadow class="detailed">
      <Row :gutter="16">
        <div class="detaileds">
          <i-col span="8">
            <div class="detailed">法定代表人：<span>梅桂芳</span></div>
          </i-col>
          <i-col span="8">
            <div class="detailed">法人身份证：<span>32042119570929022X</span></div>
          </i-col>
          <i-col span="8">
            <div class="detailed">法人联系电话：<span>13911223098</span></div>
          </i-col>
        </div>
      </Row>
    </Card>
    <Card title="联系人信息" :padding="0" shadow class="detailed">
      <Row :gutter="16">
        <div class="detaileds">
          <i-col span="8">
            <div class="detailed">联系人姓名：<span>梅桂芳</span></div>
          </i-col>
          <i-col span="8">
            <div class="detailed">联系人身份证：<span>32042119570929022X</span></div>
          </i-col>
          <i-col span="8">
            <div class="detailed">联系人电话：<span>13911223098</span></div>
          </i-col>
          <i-col span="8">
            <div class="detailed">联系人电子邮箱：<span>13911223098@139.com</span></div>
          </i-col>
          <i-col span="8">
            <div class="detailed">联系人传真号码：<span>0519-81891128</span></div>
          </i-col>
        </div>
      </Row>
    </Card>
    <Card title="主体证照信息" :padding="0" shadow class="detailed">
      <Row :gutter="16">
        <div class="detaileds zzjgdm">
          <i-col span="4">
            <div class="detailed">
              <img :src="yyzz"/>
              <p>营业执照</p>
            </div>
          </i-col>
          <i-col span="4">
            <div class="detailed">
              <img :src="zzjgdm"/>
              <p>组织机构代码</p>
            </div>
          </i-col>

        </div>
      </Row>
    </Card>
    <Card title="法定代表人证照信息" :padding="0" shadow class="detailed">
      <Row :gutter="16">
        <div class="detaileds zzjgdm">
          <i-col span="4">
            <div class="detailed">
              <img :src="sfzz"/>
              <p>身份证正面</p>
            </div>
          </i-col>
          <i-col span="4">
            <div class="detailed">
              <img :src="sfzf"/>
              <p>身份证反面</p>
            </div>
          </i-col>
          <i-col span="4">
            <div class="detailed">
              <img :src="sfzsc"/>
              <p>手持身份证</p>
            </div>
          </i-col>

        </div>
      </Row>
    </Card>
    <Modal v-model="modal_see" class="modal_see" width="600" footer-hide="true" header-hide="true">
      <Card title="审核">
        <div class="shenhe_style">
          <Form :label-width="100">
            <i-col span="24">
              <FormItem label="意见：">
                <RadioGroup>
                  <Radio label="通过"></Radio>
                  <Radio label="不通过"></Radio>
                </RadioGroup>
              </FormItem>
            </i-col>
            <i-col span="24">
              <FormItem label="不通过的原因：">
                <Input type="textarea" placeholder="请输入原因"/>
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
  import yyzz from '@/assets/images/yyzz.jpg'
  import zzjgdm from '@/assets/images/zhengshu1.jpg'
  import sfzz from '@/assets/images/sfzz.jpg'
  import sfzf from '@/assets/images/sfzf.jpg'
  import sfzsc from '@/assets/images/sfzsc.jpg'

  export default {
    name: 'argu_page',
    data() {
      return {
        yyzz,
        zzjgdm,
        sfzf,
        sfzz,
        sfzsc,
        modal_see: false,
      }
    }
  }
</script>

<style>
  .detailed h2 {
    margin-bottom: 20px;
  }

  .detailed {
    font-size: 14px;
    color: #383938;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .detaileds {
    margin-top: 20px;
    margin-left: 20px;
  }

  .detailed img {
    height: 120px;
    display: block;
    margin: auto;
  }

  .zzjgdm {
    text-align: center;
  }

  .detailed img {
    margin-bottom: 10px;
  }

  .shtg {
    float: right;
    margin-left: 10px;
  }

  .status span {
    font-size: 14px;
    color: #8D8D92;
    display: block;
    text-align: right;
  }

  .status p {
    font-size: 20px;
    color: #272727;
    display: block;
    text-align: right;
  }

  .modal_see .ivu-modal-body {
    padding: 0;
    overflow: hidden;
  }

  .shenhe_style {
    overflow: hidden;
  }

  .shenhe_style button {
    margin: 0 auto;
    display: block;
  }
</style>
