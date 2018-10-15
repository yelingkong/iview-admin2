<template>
  <div>
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
    <Card title="巡查照片" :padding="0" shadow class="detailed">
      <Row :gutter="16">
        <div class="detaileds zzjgdm">
          <i-col span="4">
            <div class="detailed">
              <viewer :images="sfzz">
              <img :src="sfzz"/>
              </viewer>
            </div>
          </i-col>
          <i-col span="4">
            <div class="detailed">
              <viewer :images="sfzf">
                <img :src="sfzf"/>
              </viewer>
            </div>
          </i-col>
          <i-col span="4">
            <div class="detailed">
              <viewer :images="sfzsc">
                <img :src="sfzsc"/>
              </viewer>
            </div>
          </i-col>

        </div>
      </Row>
    </Card>
    <Card>
      <div class="edit">
        <Button type="primary">编辑</Button>
        <Button>删除</Button>
      </div>
    </Card>
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
    name:'dcxcjldetailed',
    components: {
      Tables
    },
    data() {
      return {
        listztHover: 0,
        modal_xiangqing: false,
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
        yyzz,
        zzjgdm,
        sfzf,
        sfzz,
        sfzsc,
        tupian1,
        tupian2,
        tupian3,
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
            align: 'center',
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
            align: 'center',
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
          {title: '巡查结果', key: 'zhuti',},
          {title: '巡查日期', key: 'createTime',},
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
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
          {title: '检测结果', key: 'zhuti',},
          {title: '检测日期', key: 'createTime',},
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
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

  .title {
    margin-bottom: 10px;
  }

  .tabs .ivu-tabs-bar {
    background: #fff;
    margin-top: 10px;
    margin-bottom: 0px;
  }

  .list-zt-body {
    background: #fff;
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

  .jcxx .ivu-card {
    margin-top: 10px;
  }

  .detailed span.hg {
    color: #35A6DB;
  }

  .detailed span.jbhg {
    color: #FF9902;
  }
  .edit{text-align: center;}
  .edit button{margin-left: 10px;margin-right: 10px;}
</style>
