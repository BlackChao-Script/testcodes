<template>
  <div id="toolNav">
    <div class="lefttool">
      <div class="service">
        <div class="iconfont icon-kefu"></div>
        <div class="servicetext">客服</div>
      </div>
      <div class="store">
        <div class="iconfont icon-dianpu"></div>
        <div class="storetext">店铺</div>
      </div>
      <div class="collection">
        <div class="iconfont icon-shoucang"></div>
        <div class="collectiontext">收藏</div>
      </div>
    </div>
    <div class="reghttool">
      <div class="join">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "toolNav",
};
</script>

<style lang="scss" scoped>
#toolNav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 49px;
  background-color: #fff;
}
.lefttool {
  flex: 1;
  display: flex;
  text-align: center;
}
.reghttool {
  flex: 1;
  display: flex;
  text-align: center;
  line-height: 49px;
  color: #fff;
}
.service {
  flex: 1;
}
.icon-kefu,
.icon-dianpu,
.icon-shoucang {
  margin-top: 2px;
  font-size: 25px;
}
.servicetext,
.storetext,
.collectiontext {
  margin-top: 5px;
  font-size: 12px;
}
.store {
  flex: 1;
}
.collection {
  flex: 1;
}
.join {
  flex: 1;
  background-image: linear-gradient(120deg, #ffc81d 0%, #ff9218 100%);
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.buy {
  flex: 1;
  background-color: #f11827;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
</style>
