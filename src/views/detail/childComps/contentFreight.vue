<template>
  <div class="freight">
    <div class="freightItem">
      <span class="iconfont icon-dui"></span>
      <span>退货补运费</span>
    </div>
    <div class="freightItem">
      <span class="iconfont icon-dui"></span>
      <span>全球包邮</span>
    </div>
    <div class="freightItem">
      <span class="iconfont icon-dui"></span>
      <span>七天无理由退货</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "contentFreight",
  data() {
    return {
      freights: ["退货补运费", "全球包邮", "七天无理由退货"],
    };
  },
};
</script>

<style lang="scss" scoped>
.freight {
  display: flex;
  height: 85px;
  line-height: 85px;
  font-size: 14px;
  text-align: center;
  box-shadow: 0 8px 1px #fdfaf6;
}
.freightItem {
  flex: 1;
  margin-right: 9px;
}
.icon-dui {
  margin-right: 2px;
  color: red;
}
</style>
