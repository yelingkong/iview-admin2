<style scoped>
  .expand-row {
    margin-bottom: 16px;
  }
</style>
<template>
  <div>
    <Table :columns="columns1" :data="expand_data"></Table>
    <Modal v-model="modal_ex" class="modal_see" width="1200" footer-hide="true" header-hide="true">
      <Card title="基本信息" :padding="0" style="margin-top: 0px;" shadow class="detailed">
        <Row :gutter="16">
          <div class="detaileds">
            <i-col span="8">
              <div class="detailed">被检区域：<span>金坛市 » 指前镇</span></div>
            </i-col>
            <i-col span="8">
              <div class="detailed">被检单位：<span>金坛江南百果园生态农业科技发展有限公司</span></div>
            </i-col>
            <i-col span="8">
              <div class="detailed">检查单位：<span>武进区南夏墅街道农产品质量安全监督管理站</span></div>
            </i-col>
            <i-col span="8">
              <div class="detailed">检查日期：<span>2018-07-24</span></div>
            </i-col>
            <i-col span="8">
              <div class="detailed">检查人员：<span>张文艳，肖召旺</span></div>
            </i-col>
            <i-col span="8">
              <div class="detailed">检查行业：<span>种植业</span></div>
            </i-col>
          </div>
        </Row>
      </Card>
      <Card title="检查信息" :padding="0" shadow class="detailed">
        <Row :gutter="16">
          <div class="detaileds">
            <i-col span="10">
              <div class="detailed">农产品质量安全首要责任落实情况：</div>
            </i-col>
            <i-col span="14">
              <div class="detailed"><span class="hg">合格</span></div>
            </i-col>
            <i-col span="10">
              <div class="detailed">生产过程中所使用的农药、兽药等农业投入品存放和使用记录情况：</div>
            </i-col>
            <i-col span="14">
              <div class="detailed"><span class="jbhg">基本合格</span></div>
            </i-col>
            <i-col span="10">
              <div class="detailed">农药间隔期和兽药休药期制度落实情况：</div>
            </i-col>
            <i-col span="14">
              <div class="detailed"><span class="hg">合格</span></div>
            </i-col>
            <i-col span="10">
              <div class="detailed">农产品收获和出栏日期、数量及销售记录：</div>
            </i-col>
            <i-col span="14">
              <div class="detailed"><span class="hg">合格</span></div>
            </i-col>
            <i-col span="10">
              <div class="detailed">产品开展自检或委托有关质检机构进行检测情况，及相关检测记录：</div>
            </i-col>
            <i-col span="14">
              <div class="detailed"><span class="hg">合格</span></div>
            </i-col>
            <i-col span="10">
              <div class="detailed">其他：</div>
            </i-col>
            <i-col span="14">
              <div class="detailed"><span class="hg">合格</span></div>
            </i-col>
          </div>
        </Row>
      </Card>
    </Modal>
  </div>
</template>
<script>
  export default {
    props: {
      row: Object,
    },
    data() {
      return {
        modal_ex:false,
        columns1: [
          {
            title: '异常项',
            key: 'ycx',
            align: 'left',
          },
          {
            title: '异常情况',
            key: 'ycqk',
            align: 'left',
            render: (h, {row, index}) => {
              return h('div', [
                h('span', {
                }, row.ycqk),
                h('Badge', {
                  props: {
                    count: 'New',
                  },
                  style: {
                    marginLeft: '10px'
                  },
                }),
              ])
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
                      this.modal_ex=true
                    }
                  }
                }, '查看')
              ])
            }
          }
        ],
        expand_data: [
          {
            ycx: 'John Brown',
            ycqk: 'New York No. 1 Lake Park',
          }, {
            ycx: 'John Brown',
            ycqk: 'New York No. 1 Lake Park',
          }
        ],
      }
    }
  };
</script>
<style>
  .detaileds{padding: 10px;overflow: hidden;line-height: 30px;}
</style>
