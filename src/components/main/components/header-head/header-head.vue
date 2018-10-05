<template>
  <Header class="header">
    <Row>
      <i-col span="20">
        <div class="logo">江苏省农产品质量溯源管理系统</div>
      </i-col>
      <i-col span="4">
        <Row>
          <i-col span="10">
            <div class="yanshi">
              <Icon type="md-contact" color="#fff" size="22"/>
              常州演示
            </div>
          </i-col>
          <i-col span="10">
            <div class="tuichu" @click="handleClick(logout)">
              <Icon type="md-power" color="#fff" size="22"/>
              退出登录
            </div>
          </i-col>
        </Row>
      </i-col>
    </Row>
  </Header>
</template>
<script>
  import './header-head.less'
  import { mapActions } from 'vuex'
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
      handleClick (name) {
        this.handleLogOut().then(() => {
          this.$router.push({
            name: 'login'
          })
        })
      }
    }
  }
</script>
