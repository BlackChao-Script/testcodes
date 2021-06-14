<template>
  <div>
    <div class="title">
      <i class="titlea">....</i>
      <span class="titletext">看了又看</span>
      <i class="titlea">....</i>
    </div>
    <div class="recomment">
      <div
        v-for="(item, index) in recommentImg"
        :key="index"
        class="recommentImg"
      >
        <img v-lazy="item.image" />
        <p>{{ item.title }}</p>
        <div class="content">
          <span class="price">{{ item.price }}</span>
          <span class="iconfont icon-xiaoxingxing"></span>
          <span class="itemSale">{{ item.itemSale }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailRecomment",
  props: {
    recommentImg: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  margin: 20px 0;
}
.title .titlea {
  width: 30px;
  text-align: center;
  border-radius: 20px;
  color: var(--color-high-text);
  border: 1px solid var(--color-high-text);
}
.titletext {
  flex: 1;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: var(--color-high-text);
}
.recomment {
  margin-bottom: 49px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.recommentImg {
  width: 47%;
  margin-bottom: 5px;
  font-size: 14px;
}
.recommentImg img {
  width: 100%;
  border-radius: 5px;
}
.recommentImg p {
  //多余文字不换行
  white-space: nowrap;
  // 配合下面属性用的
  overflow: hidden;
  // 隐藏文字多余文字用...代替
  text-overflow: ellipsis;
}
.content {
  text-align: center;
}
.price {
  color: var(--color-high-text);
  margin-right: 5px;
}
.icon-xiaoxingxing {
  margin-right: 5px;
}
</style>
