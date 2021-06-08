<template>
  <div class="back-top">
    <span class="iconfont icon-arrowTop-fill"></span>
  </div>
</template>

<script>
  export default {
    name:'backTop',
  }
</script>

<style lang="scss" scoped>
  .back-top{
    position: fixed;
    right: 10px;
    bottom: 55px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(100, 100, 100, .5);
  }
  .iconfont{
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 30px;
    color: var(--color-high-text);
  }
</style>