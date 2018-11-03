<template>
  <Header class="header">
    <div class="logo fl">
      <div class="title">江苏省农产品质量溯源管理系统</div>
      <div class="fbt">常州农委</div>
    </div>
      <div class="logout fr" @click="handleClick(logout)">
        <Icon type="md-power" color="#fff" size="28"/>
        退出
      </div>
      <div class="user fr mr20">
        <Icon type="md-contact" color="#fff" size="28"/>
        用户名：admin
      </div>
  </Header>
</template>
<script>
  import './header-head.less'
  import {mapActions} from 'vuex'

  export default {
    name: 'HeaderHead',
    props: {
      userAvator: {
        type: String,
        default: ''
      }
    },
    methods: {
      ...mapActions([
        'handleLogOut'
      ]),
      handleClick(name) {
        this.handleLogOut().then(() => {
          this.$router.push({
            name: 'login'
          })
        })
      }
    }
  }
</script>
