<style scoped>
  .expand-row {
    margin-bottom: 16px;
  }
</style>
<template>
  <div>
    <Row class="expand-row">
      <Col span="4">
        <span class="expand-key">检测日期: </span>
        <span class="expand-value">{{ row.job }}</span>
      </Col>
      <Col span="4">
        <span class="expand-key">检查内容: </span>
        <span class="expand-value">{{ row.interest }}</span>
      </Col>
      <Col span="4">
        <span class="expand-key">检查单位: </span>
        <span class="expand-value">{{ row.birthday }}</span>
      </Col>
      <Col span="4">
        <span class="expand-key">检查人员: </span>
        <span class="expand-value">{{ row.birthday }}</span>
      </Col>
      <Col span="4">
        <span class="expand-key">检查记录: </span>
        <span class="expand-value">{{ row.birthday }}</span>
      </Col>
      <Col span="4">
        <span class="expand-key">操作: </span>
        <span class="expand-value">{{ row.birthday }}</span>
      </Col>
    </Row>
    <Row>
      <Col span="4">
        <span class="expand-key">检测日期: </span>
        <span class="expand-value">{{ row.job }}</span>
      </Col>
      <Col span="4">
        <span class="expand-key">检查内容: </span>
        <span class="expand-value">{{ row.interest }}</span>
      </Col>
      <Col span="4">
        <span class="expand-key">检查单位: </span>
        <span class="expand-value">{{ row.birthday }}</span>
      </Col>
      <Col span="4">
        <span class="expand-key">检查人员: </span>
        <span class="expand-value">{{ row.birthday }}</span>
      </Col>
      <Col span="4">
        <span class="expand-key">检查记录: </span>
        <span class="expand-value">{{ row.birthday }}</span>
      </Col>
      <Col span="4">
        <span class="expand-key">操作: </span>
        <span class="expand-value">{{ row.birthday }}</span>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default {
    props: {
      row: Object
    }
  };
</script>
