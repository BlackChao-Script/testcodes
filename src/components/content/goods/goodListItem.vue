<template>
  <div class="goodsItem">
    <img :src="goodsItem.show.img" alt="" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="iconfont icon-xiaoxingxing"></span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.goodsItem {
  width: 46%;
}
.goodsItem img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  //多余文字不换行
  white-space: nowrap;
  // 配合下面属性用的
  overflow: hidden;
  // 隐藏文字多余文字用...代替
  text-overflow: ellipsis;
}
.price{
  color: var(--color-high-text);
}
.iconfont{
 font-size: 14px;
 margin: 0 2px;
}
</style>
