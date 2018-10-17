<template>
  <div>
    <Affix :offset-top="60">
      <Card>
        <!--<h2>ID: {{ $route.params.id }}</h2>-->
        <Row>
          <i-col span="20" class="title">
            <h2>常州市洛丰果品专业合作社</h2>
          </i-col>
          <div>
            <i-col span="4">
              <Button class="shtg" @click="modal_see=true" type="primary">溯源管理</Button>
            </i-col>
            <Divider/>
            <Row justify="space-between" class="iv-bg-w">
              <div v-for="(item,index) in listzt">
                <Col span="4">
                  <div class="list-zt" :class="{'hover':index==listztHover,'bor':item.bor}" @click="listztHover=index">
                    <span>{{item.name}}</span>
                    <p>{{item.num}}户</p>
                  </div>
                </Col>
              </div>
            </Row>
          </div>
        </Row>
      </Card>
    </Affix>
    <div class="tabs" v-show="dcxc">
      <Tabs value="name1">
        <TabPane label="主体概况" name="name1">
          <Card title="主体信息" :padding="0" style="margin-top: 0px;" shadow class="detailed_card">
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
                      <i-col span="16">经度119.811893 纬度31.763468
                        <Icon type="ios-eye" @click="handler_map" size="20" style="margin-left: 10px;cursor: pointer"/>
                      </i-col>
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
              <viewer :images="sfz">
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
        </TabPane>
        <TabPane label="溯源产品" name="name2">
          <Row class="zcrzsh_search_row mt0">
            <Row :gutter="16">
              <Form :label-width="100">
                <i-col span="8">
                  <FormItem label="产品名称：">
                    <Input v-model="value" placeholder="请输入"/>
                  </FormItem>
                </i-col>
                <i-col span="8">
                  <FormItem label="赋码日期：">
                    <DatePicker :value="countDate" type="daterange" placement="bottom-end"
                                style="width: 100%" transfer></DatePicker>
                  </FormItem>
                </i-col>
                <i-col span="24">
                  <Button size="large" class="fr">重置</Button>
                  <Button type="primary" size="large" class="fr mr10">查询</Button>
                </i-col>
              </Form>
            </Row>
          </Row>
          <div class="zcrzsh_table">
            <Row>
              <Button type="primary" size="large" class="ml30" @click="exportData(1)">导出数据</Button>
              <Col>
                <Table :columns="columns" :data="tableData" ref="table"></Table>
              </Col>
            </Row>
            <Row :gutter="16" type="flex" justify="end">
              <Col span="24" justify="end" class="page_right">
                <Page :total="100" show-sizer show-elevator show-total/>
              </Col>
              <Col span="1"></Col>
            </Row>
          </div>
        </TabPane>
        <TabPane label="投入品使用" name="name3">
          <Row class="zcrzsh_search_row mt0">
            <Row :gutter="16">
              <Form :label-width="100">
                <i-col span="8">
                  <FormItem label="投入品类型：">
                    <Select v-model="trpListModel">
                      <Option v-for="item in trpList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                  </FormItem>
                </i-col>
                <i-col span="8">
                  <FormItem label="投入品名称：">
                    <Input v-model="value" placeholder="请输入"/>
                  </FormItem>
                </i-col>
                <i-col span="8">
                  <FormItem label="产品名称：">
                    <Input v-model="value" placeholder="请输入"/>
                  </FormItem>
                </i-col>
                <i-col span="24">
                  <Button size="large" class="fr">重置</Button>
                  <Button type="primary" size="large" class="fr mr10">查询</Button>
                </i-col>
              </Form>
            </Row>
          </Row>
          <div class="zcrzsh_table">
            <Row>
              <Button type="primary" size="large" class="ml30" @click="exportData(1)">导出数据</Button>
              <Col>
                <Table :columns="trpColumns" :data="trpTableData" ref="table"></Table>
              </Col>
            </Row>
            <Row :gutter="16" type="flex" justify="end">
              <Col span="24" justify="end" class="page_right">
                <Page :total="100" show-sizer show-elevator show-total/>
              </Col>
              <Col span="1"></Col>
            </Row>
          </div>
        </TabPane>
        <TabPane label="督查巡查" name="name4">
          <Row class="zcrzsh_search_row mt0">
            <Row :gutter="16">
              <Form :label-width="100">
                <i-col span="8">
                  <FormItem label="巡查日期：">
                    <DatePicker :value="countDate" type="daterange" placement="bottom-end"
                                style="width: 100%" transfer></DatePicker>
                  </FormItem>
                </i-col>
                <i-col span="8">
                  <FormItem label="巡查结果：">
                    <Select v-model="xcListModel">
                      <Option v-for="item in xcList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                  </FormItem>
                </i-col>
                <i-col span="24">
                  <Button size="large" class="fr">重置</Button>
                  <Button type="primary" size="large" class="fr mr10">查询</Button>
                </i-col>
              </Form>
            </Row>
          </Row>
          <div class="zcrzsh_table">
            <Row class="mt10">
              <Col>
                <Table :columns="xcColumns" :data="xcTableData" ref="table"></Table>
              </Col>
            </Row>
            <Row type="flex" justify="end">
              <Col span="24" justify="end" class="page_right">
                <Page :total="100" show-sizer show-elevator show-total/>
              </Col>
              <Col span="1"></Col>
            </Row>
          </div>
        </TabPane>
        <TabPane label="产品抽检" name="name5">
          <Row class="zcrzsh_search_row mt0">
            <Row :gutter="16">
              <Form :label-width="100">
                <i-col span="8">
                  <FormItem label="检查日期：">
                    <DatePicker :value="countDate" type="daterange" placement="bottom-end"
                                style="width: 100%" transfer></DatePicker>
                  </FormItem>
                </i-col>
                <i-col span="8">
                  <FormItem label="检测产品：">
                    <Input v-model="value" placeholder="请输入"/>
                  </FormItem>
                </i-col>
                <i-col span="8">
                  <FormItem label="检测结果：">
                    <Select v-model="jcjgListModel">
                      <Option v-for="item in jcjgList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                  </FormItem>
                </i-col>
                <i-col span="8">
                  <FormItem label="检测类型：">
                    <Select v-model="jclxListModel">
                      <Option v-for="item in jclxList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                  </FormItem>
                </i-col>
                <i-col span="24">
                  <Button size="large" class="fr">重置</Button>
                  <Button type="primary" size="large" class="fr mr10">查询</Button>
                </i-col>
              </Form>
            </Row>
          </Row>
          <div class="zcrzsh_table mt10">
            <Row>
              <Col>
                <Table :columns="cpcjColumns" :data="cpcjTableData" ref="table"></Table>
              </Col>
            </Row>
            <Row type="flex" justify="end">
              <Col span="24" justify="end" class="page_right">
                <Page :total="100" show-sizer show-elevator show-total/>
              </Col>
              <Col span="1"></Col>
            </Row>
          </div>
        </TabPane>
        <TabPane label="变更历史" name="name6">
          <div>
            <Row :gutter="16" class="zcrzsh_table mt0">
              <Col>
                <Table :columns="bglsColumns" :data="bglsTableData" ref="table"></Table>
              </Col>
            </Row>
            <Row :gutter="16" type="flex" justify="end">
              <Col span="24" justify="end" class="page_right">
                <Page :total="100" show-sizer show-elevator show-total/>
              </Col>
              <Col span="1"></Col>
            </Row>
          </div>
        </TabPane>
        <TabPane label="异常历史" name="name7">
          <div class="zcrzsh_table mt0">
            <Row>
              <Col>
                <Table :columns="yclsColumns" :data="yclsTableData" ref="table"></Table>
              </Col>
            </Row>
            <Row :gutter="16" type="flex" justify="end">
              <Col span="24" justify="end" class="page_right">
                <Page :total="100" show-sizer show-elevator show-total/>
              </Col>
              <Col span="1"></Col>
            </Row>
          </div>
        </TabPane>
      </Tabs>
    </div>
    <div class="tabs jcxx" v-show="dcxcxq">
      <Card title="基本信息">
        <a href="#" slot="extra" @click="xc_hide">
          <Icon type="md-close"/>
        </a>
        <Row :gutter="16">
          <div class="detaileds">
            <i-col span="24">
              <i-col span="8">
                <div class="detailed">
                  <i-col span="5">被检区域：</i-col>
                  <i-col span="18">金坛市 » 指前镇</i-col>
                </div>
              </i-col>
              <i-col span="8">
                <div class="detailed">
                  <i-col span="5">被检单位：</i-col>
                  <i-col span="18">金坛江南百果园生态农业科技发展有限公司</i-col>
                </div>
              </i-col>
              <i-col span="8">
                <div class="detailed">
                  <i-col span="5">检查单位：</i-col>
                  <i-col span="18">武进区南夏墅街道农产品质量安全监督管理站</i-col>
                </div>
              </i-col>
            </i-col>
            <i-col span="24">
              <i-col span="8">
                <div class="detailed">
                  <i-col span="5">检查日期：</i-col>
                  <i-col span="18">2018-07-24</i-col>
                </div>
              </i-col>
              <i-col span="8">
                <div class="detailed">
                  <i-col span="5">检查人员：</i-col>
                  <i-col span="18">张文艳，肖召旺</i-col>
                </div>
              </i-col>
              <i-col span="8">
                <div class="detailed">
                  <i-col span="5">检查行业：</i-col>
                  <i-col span="18">种植业</i-col>
                </div>
              </i-col>
            </i-col>
          </div>
        </Row>
      </Card>
      <Card title="检查信息">
        <Row :gutter="16">
          <div class="detaileds">
            <i-col span="10">
              <div class="detailed">农产品质量安全首要责任落实情况：</div>
            </i-col>
            <i-col span="14">
              <div class="detailed"><span style="color: #1D9FD7">合格</span></div>
            </i-col>
            <i-col span="10">
              <div class="detailed">生产过程中所使用的农药、兽药等农业投入品存放和使用记录情况：</div>
            </i-col>
            <i-col span="14">
              <div class="detailed"><span style="color: #1D9FD7">合格</span></div>
            </i-col>
            <i-col span="10">
              <div class="detailed">农药间隔期和兽药休药期制度落实情况：</div>
            </i-col>
            <i-col span="14">
              <div class="detailed"><span style="color: #1D9FD7">合格</span></div>
            </i-col>
            <i-col span="10">
              <div class="detailed">农产品收获和出栏日期、数量及销售记录：</div>
            </i-col>
            <i-col span="14">
              <div class="detailed"><span style="color: #1D9FD7">合格</span></div>
            </i-col>
            <i-col span="10">
              <div class="detailed">产品开展自检或委托有关质检机构进行检测情况，及相关检测记录：</div>
            </i-col>
            <i-col span="14">
              <div class="detailed"><span style="color: #1D9FD7">合格</span></div>
            </i-col>
            <i-col span="10">
              <div class="detailed">其他：</div>
            </i-col>
            <i-col span="14">
              <div class="detailed"><span style="color: #1D9FD7">合格</span></div>
            </i-col>
          </div>
        </Row>
      </Card>
      <Card title="巡查照片">
        <Row :gutter="16">
          <div class="detaileds">
            <viewer :images="tupians">
              <i-col span="4" v-for="item in tupians">
                <div class="detailed">
                  <img :src="item.img" alt="">
                </div>
              </i-col>
            </viewer>
          </div>
        </Row>
      </Card>
    </div>
    <div class="tabs jcxx" v-show="cpcjbody">
      <Card title="基本信息">
        <a href="#" slot="extra" @click="cpcj_hide">
          <Icon type="md-close"/>
        </a>
        <Row :gutter="16">
          <div class="detaileds">
            <i-col span="24">
              <i-col span="8">
                <div class="detailed">
                  <i-col span="5">被检区域：</i-col>
                  <i-col span="18">金坛市 » 指前镇</i-col>
                </div>
              </i-col>
              <i-col span="8">
                <div class="detailed">
                  <i-col span="5">被检单位：</i-col>
                  <i-col span="18">金坛江南百果园生态农业科技发展有限公司</i-col>
                </div>
              </i-col>
              <i-col span="8">
                <div class="detailed">
                  <i-col span="5">地址：</i-col>
                  <i-col span="18">金坛区指前镇建春村委96号</i-col>
                </div>
              </i-col>
            </i-col>
            <i-col span="24">
              <i-col span="8">
                <div class="detailed">
                  <i-col span="5">负责人：</i-col>
                  <i-col span="18">曹珺</i-col>
                </div>
              </i-col>
              <i-col span="8">
                <div class="detailed">
                  <i-col span="5">联系方式：</i-col>
                  <i-col span="18">13961200682</i-col>
                </div>
              </i-col>
              <i-col span="8">
                <div class="detailed">
                  <i-col span="5">检测单位：</i-col>
                  <i-col span="18">金坛市指前镇农产品快速检测站</i-col>
                </div>
              </i-col>
            </i-col>

            <i-col span="24">
              <i-col span="8">
                <div class="detailed">
                  <i-col span="5">联系方式：</i-col>
                  <i-col span="18">0519-86310547</i-col>
                </div>
              </i-col>
              <i-col span="8">
                <div class="detailed">
                  <i-col span="5">任务来源：</i-col>
                  <i-col span="18">市农委</i-col>
                </div>
              </i-col>
              <i-col span="8">
                <div class="detailed">
                  <i-col span="5">检测类别：</i-col>
                  <i-col span="18">例行抽查</i-col>
                </div>
              </i-col>
            </i-col>
            <i-col span="24">
              <i-col span="8">
                <div class="detailed">
                  <i-col span="5">检测任务：</i-col>
                  <i-col span="18">2018年蔬菜例行监测</i-col>
                </div>
              </i-col>
              <i-col span="8">
                <div class="detailed">
                  <i-col span="5">采样人员：</i-col>
                  <i-col span="18">张文艳，肖召旺</i-col>
                </div>
              </i-col>
              <i-col span="8">
                <div class="detailed">
                  <i-col span="5">采样日期：</i-col>
                  <i-col span="18">2018-07-24</i-col>
                </div>
              </i-col>
            </i-col>
            <i-col span="24">
              <i-col span="8">
                <div class="detailed">
                  <i-col span="5">检测日期：</i-col>
                  <i-col span="18">2018-07-24</i-col>
                </div>
              </i-col>
              <i-col span="8">
                <div class="detailed">
                  <i-col span="5">员工人数：</i-col>
                  <i-col span="18">8</i-col>
                </div>
              </i-col>
            </i-col>
          </div>
        </Row>
      </Card>
      <Card title="检查信息">
        <Row :gutter="16">
          <Table :columns="cpcjjcxxColumns" :data="cpcjjcxxTableData" ref="table"></Table>
        </Row>
      </Card>
    </div>
    <Modal v-model="modal_see" class="modal_see" width="600" footer-hide="true" header-hide="true">
      <Card title="溯源管理">
        <div class="shenhe_style">
          <Form :label-width="100">
            <i-col span="24">
              <FormItem label="主体管理：">
                <CheckboxGroup v-model="disabledGroup">
                  <Checkbox label="禁止打印"></Checkbox>
                  <Checkbox label="禁止查询"></Checkbox>
                  <Checkbox label="禁止登陆"></Checkbox>
                </CheckboxGroup>
              </FormItem>
            </i-col>
            <i-col span="24">
              <FormItem label="说明：">
                <Input type="textarea" placeholder="请输入"/>
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
    <Modal v-model="modal_xiangqing" class="modal_see" width="1000" footer-hide="true" header-hide="true">
      <Card title="溯源产品详情">
        <div class="shenhe_style hide_after">
          <Card title="产品信息" :dis-hover="true" :bordered="false" :padding="0" style="margin-top: 0px;" class="detailed">
            <Row :gutter="16">
              <div class="detaileds">
                <i-col span="10">
                  <div class="detailed">产品名称：<span>白菜</span></div>
                </i-col>
                <i-col span="14">
                  <div class="detailed">产品追溯码：<span>1.2.62563584652132545X.02010102.20180904180329.001</span></div>
                </i-col>
                <i-col span="10">
                  <div class="detailed">产品来源：<span>自产</span></div>
                </i-col>
                <i-col span="14">
                  <div class="detailed">来源地：<span>蔬菜大棚基地</span></div>
                </i-col>
                <i-col span="10">
                  <div class="detailed">数量：<span>30公斤</span></div>
                </i-col>
                <i-col span="14">
                  <div class="detailed">赋码日期：<span>2018-07-19</span></div>
                </i-col>
                <i-col span="10">
                  <div class="detailed">质检类型：<span>自检合格</span></div>
                </i-col>
                <i-col span="14">
                  <div class="detailed">质检结果：<span>合格</span></div>
                </i-col>
              </div>
            </Row>
          </Card>
          <Card title="销售信息" :dis-hover="true" :bordered="false" :padding="0" style="margin-top: 0px;" class="detailed">
            <Row :gutter="16">
              <div class="detaileds">
                <i-col span="10">
                  <div class="detailed">销售类型：<span>销售入市</span></div>
                </i-col>
                <i-col span="14">
                  <div class="detailed">销售日期：<span>2018-07-19</span></div>
                </i-col>
                <i-col span="10">
                  <div class="detailed">客户名称：<span>XXX合作社</span></div>
                </i-col>
                <i-col span="14">
                  <div class="detailed">联系人：<span>张明</span></div>
                </i-col>
                <i-col span="10">
                  <div class="detailed">地址：<span>常州市XX区XX镇。。</span></div>
                </i-col>
                <i-col span="14">
                  <div class="detailed">联系电话：<span>18910128801</span></div>
                </i-col>
              </div>
            </Row>
          </Card>
          <Card title="标签打印" :dis-hover="true" :bordered="false" :padding="0" style="margin-top: 0px;" class="detailed">
            <Row :gutter="16">
              <div class="detaileds">
                <i-col span="20">
                  <div class="detailed">累计打印追溯标签30张</div>
                </i-col>
              </div>
            </Row>
          </Card>
        </div>
      </Card>
    </Modal>
    <Modal v-model="modal_bqdymx" class="modal_see" width="1000" footer-hide="true" header-hide="true">
      <Card title="标签打印明细">
        <div class="shenhe_style">
          <Table :columns="bqdyColumns" :data="bqdyTableData" ref="table"></Table>
          <Col span="24" justify="end" class="page_right">
            <Page :total="100" show-sizer show-elevator show-total transfer/>
          </Col>
        </div>
      </Card>
    </Modal>
    <Modal v-model="modal_trp" class="modal_see" width="1000" footer-hide="true" header-hide="true">
      <Card title="投入品使用详情">
        <div class="shenhe_style">
          <Row :gutter="16">
            <div class="detaileds">
              <i-col span="10">
                <div class="detailed">投入品类型：<span>农药</span></div>
              </i-col>
              <i-col span="14">
                <div class="detailed">投入品名称：<span>毒死蜱</span></div>
              </i-col>
              <i-col span="10">
                <div class="detailed">产品名称：<span>白菜、萝卜</span></div>
              </i-col>
              <i-col span="14">
                <div class="detailed">使用日期：<span>2016-09-21</span></div>
              </i-col>
              <i-col span="10">
                <div class="detailed">主体名称：<span>江苏省常州市金剑蜜梨专业合作社</span></div>
              </i-col>
              <i-col span="14">
                <div class="detailed">所在地区：<span>天宁区郑陆镇</span></div>
              </i-col>
            </div>
          </Row>
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
  import tupian1 from '@/assets/images/tupian1.jpeg'
  import tupian2 from '@/assets/images/tupian2.jpeg'
  import tupian3 from '@/assets/images/tupian3.jpeg'
  import {getTableData} from '@/api/data'
  import Tables from '_c/tables'

  export default {
    components: {
      Tables
    },
    data() {
      return {
        listztHover: 0,
        center: {lng: 120.088214, lat: 31.650013},
        zoom: 17,
        modal_xiangqing: false,
        sfz: [{img: sfzf}, {img: sfzz}, {img: sfzsc}],
        listzt: [
          {
            name: '溯源产品',
            num: 1332,
            bor: true
          },
          {
            name: '投入品使用',
            num: 322,
            bor: false
          },
          {
            name: '督查巡查',
            num: 352,
            bor: false
          },
          {
            name: '产品抽检',
            num: 24,
            bor: false
          },
          {
            name: '变更历史',
            num: 24,
            bor: false
          },
          {
            name: '历史异常',
            num: 0,
            bor: true
          }
        ],
        trpListModel: 0,
        jcjgList: [
          {
            value: 0,
            label: '全部'
          }, {
            value: 1,
            label: '合格'
          }, {
            value: 2,
            label: '不合格'
          }
        ],
        jcjgListModel: 0,
        jclxList: [
          {
            value: 0,
            label: '全部'
          }, {
            value: 1,
            label: '企业自检'
          }, {
            value: 2,
            label: '委托检测'
          }, {
            value: 3,
            label: '政府抽检'
          }
        ],
        jclxListModel: 0,
        trpList: [
          {
            value: 0,
            label: '全部'
          }, {
            value: 1,
            label: '农药'
          }, {
            value: 2,
            label: '肥料'
          }, {
            value: 3,
            label: '兽药'
          }, {
            value: 4,
            label: '饲料'
          },
        ],
        xcListModel: 0,
        xcList: [
          {
            value: 0,
            label: '全部'
          }, {
            value: 1,
            label: '合格'
          }, {
            value: 2,
            label: '基本合格'
          }, {
            value: 3,
            label: '不合格'
          }
        ],
        modal_trp: false,
        dcxc: true,
        dcxcxq: false,
        modal_map: false,
        yyzz,
        zzjgdm,
        sfzf,
        sfzz,
        sfzsc,
        zjzxx: [{img: yyzz}, {img: zzjgdm}],
        sfz: [{img: sfzf}, {img: sfzz}, {img: sfzsc}],
        tupians: [
          {
            img: tupian1,
          }, {
            img: tupian2,
          }, {
            img: tupian3,
          }
        ],
        modal_see: false,
        modal_bqdymx: false,
        columns: [
          {type: 'selection', width: 60, align: 'center'},
          {title: '产品名称', key: 'zhuti',},
          {title: '数量', key: 'shuliang',},
          {title: '产品追溯码', key: 'zhuisuma', width: 230},
          {title: '赋码日期', key: 'createTime',},
          {
            title: '标签打印数量', key: 'zhangshu',
            render: (h, {row, index}) => {
              return h('div', {
                style: {
                  color: '#1890FF',
                  cursor: 'pointer'
                },
                on: {
                  click: () => {
                    this.bqdymx_show(row.index)
                  }
                }
              }, row.zhangshu)
            }
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'left',
            render: (h, {row, index}) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.sycp_show(row.index)
                    }
                  }
                }, '查看'),
              ])
            }
          }
        ],
        bqdyColumns: [
          {type: 'selection', width: 60, align: 'center'},
          {title: '产品名称', key: 'zhuti',},
          {title: '数量', key: 'shuliang',},
          {title: '产品追溯码', key: 'zhuisuma', width: 230},
          {title: '打印日期', key: 'createTime',},
          {title: '打印张数', key: 'shuliang',},
        ],
        bqdyTableData: [],
        trpColumns: [
          {type: 'selection', width: 60, align: 'center'},
          {title: '投入品类型', key: 'zhuti',},
          {title: '投入品名称', key: 'zhuti',},
          {title: '产品名称', key: 'zhuti',},
          {title: '使用日期', key: 'createTime',},
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'left',
            render: (h, {row, index}) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.trp_show(row.index)
                    }
                  }
                }, '查看'),
              ])
            }
          }
        ],
        trpTableData: [],
        xcColumns: [
          {type: 'selection', width: 60, align: 'center'},
          {title: '检查单位', key: 'zhuti',},
          {title: '检查人员', key: 'zhuti',},
          {
            title: '巡查结果',
            key: 'reviewTheStatus',
            render: (h, {row}) => {
              if (row.reviewTheStatus === 0) {
                return h('Badge', {
                  props: {
                    status: 'error',
                    text: '不合格'
                  }
                })
              } else if (row.reviewTheStatus === 1) {
                return h('Badge', {
                  props: {
                    status: 'success',
                    text: '合格'
                  }
                })
              } else if (row.reviewTheStatus === 2) {
                return h('Badge', {
                  props: {
                    status: 'success',
                    text: '合格'
                  }
                })
              }
            }
          },
          {title: '巡查日期', key: 'createTime',},
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'left',
            render: (h, {row, index}) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.xc_show(row.index)
                    }
                  }
                }, '查看'),
              ])
            }
          }
        ],
        xcTableData: [],
        cpcjColumns: [
          {type: 'selection', width: 60, align: 'center'},
          {title: '检测类型', key: 'zhuti',},
          {title: '检测产品', key: 'zhuti',},
          {title: '检测人员', key: 'zhuti',},
          {
            title: '检测结果',
            key: 'reviewTheStatus',
            render: (h, {row}) => {
              if (row.reviewTheStatus === 0) {
                return h('Badge', {
                  props: {
                    status: 'error',
                    text: '不合格'
                  }
                })
              } else if (row.reviewTheStatus === 1) {
                return h('Badge', {
                  props: {
                    status: 'success',
                    text: '合格'
                  }
                })
              } else if (row.reviewTheStatus === 2) {
                return h('Badge', {
                  props: {
                    status: 'success',
                    text: '合格'
                  }
                })
              }
            }
          },
          {title: '检测日期', key: 'createTime',},
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'left',
            render: (h, {row, index}) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.cpcj_show(row.index)
                    }
                  }
                }, '查看'),
              ])
            }
          }
        ],
        cpcjTableData: [],
        bglsColumns: [
          {title: '变更内容', key: 'zhuti',},
          {title: '变更原因', key: 'zhuti',},
          {title: '变更时间', key: 'createTime',},
          {title: '审核人', key: 'zhuti',}
        ],
        bglsTableData: [],
        yclsColumns: [
          {title: '异常情况', key: 'zhuti',},
          {title: '处理结果', key: 'zhuti',},
          {title: '处理人', key: 'zhuti',},
          {title: '处理时间', key: 'createTime',},
          {title: '恢复人', key: 'zhuti',},
          {title: '恢复时间', key: 'createTime',}
        ],
        yclsTableData: [],
        cpcjjcxxColumns: [
          {title: '产品类型', key: 'zhuti',},
          {title: '产品名称', key: 'zhuti',},
          {title: '样品编号', key: 'zhuti',},
          {title: '抽样地点', key: 'zhuti',},
          {title: '检测性质', key: 'zhuti',},
          {title: '检测依据', key: 'zhuti',},
          {title: '检测方式', key: 'zhuti',},
          {title: '检测结果', key: 'zhuti',}
        ],
        cpcjjcxxTableData: [],
        tableData: [],
      }
    },
    mounted() {
      getTableData().then(res => {
        this.tableData = res.data
        this.trpTableData = res.data
        this.xcTableData = res.data
        this.cpcjTableData = res.data
        this.bglsTableData = res.data
        this.yclsTableData = res.data
        this.cpcjjcxxTableData = res.data
        this.bqdyTableData = res.data
      })
    },
    methods: {
      exportData(type) {
        this.$refs.table.exportCsv({
          filename: 'The original data'
        })
      },
      show(index) {
        this.modal_see = true
      },
      sycp_show(index) {
        this.modal_xiangqing = true
      },
      bqdymx_show(index) {
        this.modal_bqdymx = true
      },
      trp_show(index) {
        this.modal_trp = true
      },
      xc_show(index) {
        this.dcxc = false
        this.dcxcxq = true
      },
      xc_hide(index) {
        this.dcxc = true
        this.dcxcxq = false
      },
      cpcj_show(index) {
        this.dcxc = false
        this.cpcjbody = true
      },
      cpcj_hide(index) {
        this.dcxc = true
        this.cpcjbody = false
      },
      remove(index) {
        this.data1.splice(index, 1)
      },
      handler_map({BMap, map}) {
        this.modal_map = true
        console.log(BMap, map)
        // 31.649513
        this.center.lng = 120.088214 - 0.009
        this.center.lat = 31.650013 + 0.004
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
    margin-top: 15px;
    margin-bottom: 15px;
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

  .title {
    margin-bottom: 10px;
  }

  .tabs .ivu-tabs-bar {
    background: #fff;
    margin-top: 10px;
    margin-bottom: 0px;
  }

  .list-zt {
    text-align: center;
    box-sizing: border-box;
    border-right: 1px solid #E9E9E9;
    cursor: pointer;

  }

  .list-zt p {
    color: #272727;
    font-size: 24px;
    line-height: 45px
  }

  .list-zt span {
    color: #969696;
    font-size: 14px
  }

  .list-zt.hover p, .list-zt.hover span {
    color: #48A1FF
  }

  .list-zt.hover {
    position: relative
  }

  .list-zt.hover .list-zt-top {
    position: absolute;
    top: -31px;
    width: 100%;
    background: #72B2FC;
    height: 6px
  }

  .list-zt.hover .list-zt-top::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-top: 10px solid #72B2FC;
    z-index: 99;
    bottom: -10px;
    left: 50%;
    margin-left: -10px
  }

  .list-zt.hover .list-zt-bottom {
    position: absolute;
    bottom: -31px;
    width: 100%;
    background: #72B2FC;
    height: 6px
  }

  .list-zt.hover .list-zt-bottom::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 10px solid #72B2FC;
    z-index: 99;
    top: -10px;
    left: 50%;
    margin-left: -10px
  }

  .list-mt20 {
    margin: 20px auto
  }

  .bor {
    border: none;
  }

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
  }

  .search_list {
    margin-top: 20px;
    background: #fff;
  }

  .list_table {
    background: #fff;
    padding-top: 0;
  }

  .search_list2 {
    padding-top: 10px;
    padding: 10px !important;
  }

  .fr {
    float: right;
  }

  .page_right {
    text-align: right;
    margin-right: 17px;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .fl {
    float: left;
  }

  .button_left {
    margin-left: 10px !important;
  }

  .list_zt_5 {
    width: 20%;
    float: left;
  }

  .exportdata {
    margin-left: 10px;
    margin-bottom: 10px;
  }

  .shenhe_style {
    overflow: hidden;
  }

  .shenhe_style button {
    margin: 0 auto;
    display: block;
  }

  .modal_see .ivu-modal-body {
    padding: 0;
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

  .detailed h2 {
    margin-bottom: 20px;
  }

  .detaileds {
    margin-top: 20px;
    margin-left: 20px;
  }

  .jcxx .ivu-card {
    margin-top: 10px;
  }

  .zcrzsh_search_row {
    margin-top: 20px;
    background: #fff;
    padding-top: 10px;
    padding-left: 30px;
    padding-right: 30px;
  }

  .zcrzsh_search_row button.ivu-btn-large {
    padding: 3px 15px 3px 15px;
  }

  .zcrzsh_search_row .ivu-form .ivu-form-item-label {
    text-align: left;
  }

  .zcrzsh_search_row .ivu-form-item {
    margin-bottom: 15px;
  }

  .zcrzsh_search {
  }

  .zcrzsh_table {
    background: #fff;
  }

  .zcrzsh_table button.ivu-btn-large {
    padding: 3px 15px 3px 15px;
    margin-bottom: 10px;
  }

  .zcrzsh_table .ivu-table-wrapper {
    margin: 0 30px;
  }

  .zcrzsh_table .page_right {
    margin: 10px 30px;
  }

  .mt10 {
    padding-top: 10px;
  }

  .mt0 {
    margin-top: 0;
    padding-top: 20px;
  }

  .hide_after .ivu-row::after {
  }

  .detailed_card {
    margin-bottom: 10px;
    margin-top: 10px;
    padding-bottom: 20px;
  }

  .ml30 {
    margin-left: 30px;
  }

  .mr10 {
    margin-right: 10px;
  }
</style>
