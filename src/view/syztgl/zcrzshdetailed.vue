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
    <Card title="主体信息" :padding="0" shadow class="detailed_card">
      <Row :gutter="16">
        <div class="detaileds">
          <i-col span="24">
            <i-col span="8">
              <div class="detailed">
                <i-col span="7">主体名称：</i-col>
                <i-col span="16">常州市洛丰果品专业合作社常州市洛丰果品专业合作社常州市洛丰果品专业合作社</i-col>
              </div>
            </i-col>
            <i-col span="8">
              <div class="detailed">
                <i-col span="7">主体性质：</i-col>
                <i-col span="16">合作社</i-col>
              </div>
            </i-col>
            <i-col span="8">
              <div class="detailed">
                <i-col span="7">证件类型：</i-col>
                <i-col span="16">普通营业执照</i-col>
              </div>
            </i-col>
          </i-col>
          <i-col span="24">
            <i-col span="8">
              <div class="detailed">
                <i-col span="7">企业注册号：</i-col>
                <i-col span="16">32042119570929022X</i-col>
              </div>
            </i-col>
            <i-col span="8">
              <div class="detailed">
                <i-col span="7">组织机构代码：</i-col>
                <i-col span="16">75053388-2</i-col>
              </div>
            </i-col>
            <i-col span="8">
              <div class="detailed">
                <i-col span="7">营业期限：</i-col>
                <i-col span="16">2003/06/04 - 2023/06/03</i-col>
              </div>
            </i-col>
          </i-col>
          <i-col span="24">
            <i-col span="8">
              <div class="detailed">
                <i-col span="7">主体类型：</i-col>
                <i-col span="16">生产主体</i-col>
              </div>
            </i-col>
            <i-col span="8">
              <div class="detailed">
                <i-col span="7">主体属性：</i-col>
                <i-col span="16">一般主体</i-col>
              </div>
            </i-col>
            <i-col span="8">
              <div class="detailed">
                <i-col span="7">所属行业：</i-col>
                <i-col span="16">种植业，畜牧业，渔业</i-col>
              </div>
            </i-col>
          </i-col>
          <i-col span="24">
            <i-col span="8">
              <div class="detailed">
                <i-col span="7">年产量(种植业)：</i-col>
                <i-col span="16">13.5吨</i-col>
              </div>
            </i-col>
            <i-col span="8">
              <div class="detailed">
                <i-col span="7">年产量(畜牧业)：</i-col>
                <i-col span="16">300头</i-col>
              </div>
            </i-col>
            <i-col span="8">
              <div class="detailed">
                <i-col span="7">年产量(水产品)：</i-col>
                <i-col span="16">300公斤</i-col>
              </div>
            </i-col>
          </i-col>
          <i-col span="24">
            <i-col span="8">
              <div class="detailed">
                <i-col span="7">注册地所在：</i-col>
                <i-col span="16">常州市武进区洛阳镇洛东村</i-col>
              </div>
            </i-col>
            <i-col span="8">
              <div class="detailed">
                <i-col span="7">详细地址：</i-col>
                <i-col span="16">洛阳镇洛东村101县道</i-col>
              </div>
            </i-col>
            <i-col span="8">
              <div class="detailed">
                <i-col span="7">经纬度：</i-col>
                <i-col span="16">经度119.811893 纬度31.763468<Icon type="ios-eye" @click="handler_map" size="20" style="margin-left: 10px;cursor: pointer"/></i-col>
              </div>
            </i-col>
          </i-col>
        </div>
      </Row>
    </Card>
    <Card title="法定代表人信息" :padding="0" shadow class="detailed_card">
      <Row :gutter="16">
        <div class="detaileds">
          <i-col span="24">
            <i-col span="8">
              <div class="detailed">
                <i-col span="7">法定代表人：</i-col>
                <i-col span="16">梅桂芳</i-col>
              </div>
            </i-col>
            <i-col span="8">
              <div class="detailed">
                <i-col span="7">法人身份证：</i-col>
                <i-col span="16">32042119570929022X</i-col>
              </div>
            </i-col>
            <i-col span="8">
              <div class="detailed">
                <i-col span="7">法人联系电话：</i-col>
                <i-col span="16">13911223098</i-col>
              </div>
            </i-col>
          </i-col>
        </div>
      </Row>
    </Card>
    <Card title="联系人信息" :padding="0" shadow class="detailed_card">
      <Row :gutter="16">
        <div class="detaileds">
          <i-col span="24">
            <i-col span="8">
              <div class="detailed">
                <i-col span="7">联系人姓名：</i-col>
                <i-col span="16">梅桂芳</i-col>
              </div>
            </i-col>
            <i-col span="8">
              <div class="detailed">
                <i-col span="7">联系人身份证：</i-col>
                <i-col span="16">32042119570929022X</i-col>
              </div>
            </i-col>
            <i-col span="8">
              <div class="detailed">
                <i-col span="7">联系人电话：</i-col>
                <i-col span="16">13911223098</i-col>
              </div>
            </i-col>
          </i-col>
          <i-col span="24">
            <i-col span="8">
              <div class="detailed">
                <i-col span="7">联系人电子邮箱：</i-col>
                <i-col span="16">13911223098@139.com</i-col>
              </div>
            </i-col>
            <i-col span="8">
              <div class="detailed">
                <i-col span="7">联系人传真号码：</i-col>
                <i-col span="16">0519-81891128</i-col>
              </div>
            </i-col>
          </i-col>
        </div>
      </Row>
    </Card>
    <Card title="主体证照信息" :padding="0" shadow class="detailed_card">
      <Row :gutter="16">
        <viewer :images="zjzxx">
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
        </viewer>
      </Row>
    </Card>
    <Card title="法定代表人证照信息" :padding="0" shadow class="detailed_card">
      <Row :gutter="16">
        <viewer :images="sfzz">
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
        </viewer>
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
    <Modal v-model="modal_map" class="modal_map" width="1000" footer-hide="true" header-hide="true">
      <Card title="常州市洛丰果品专业合作社">
        <baidu-map class="map" :center="center" :zoom="zoom">
          <bm-marker :position="center" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
          </bm-marker>
        </baidu-map>
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
    name: 'zcrzshdetailed',
    data() {
      return {
        modal_map: false,
        center: {lng: 120.088214, lat: 31.650013},
        zoom: 17,
        yyzz,
        zzjgdm,
        sfzf,
        sfzz,
        sfzsc,
        modal_see: false,
        sfz: [{img: sfzf}, {img: sfzz}, {img: sfzsc}],
        zjzxx: [{img: yyzz}, {img: zzjgdm}],
      }
    },
    methods:{
      handler_map({BMap, map}) {
        this.modal_map = true
        console.log(BMap, map)
        // 31.649513
        this.center.lng = 120.088214-0.009
        this.center.lat = 31.650013+0.004
        this.zoom = 17
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

  .detailed span {
    display: inline-block;
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

  .detailed {
    padding-bottom: 0px;
    overflow: hidden;
  }

  .detailed_card {
    margin-bottom: 10px;
    margin-top: 10px;
    padding-bottom: 20px;
  }
  modal_map {
    width: 1000px;
    height: 500px;
  }

  .modal_map .ivu-modal-body, .modal_map .ivu-card-body {
    padding: 0;
  }

  .modal_map .map {
    padding: 0;
    width: 997px;
    height: 500px;
  }
</style>
