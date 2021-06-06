<template>
  <div class="goodslist">
    <goods-list-item
      v-for="(item, index) in goods"
      :key="index"
      :goods-item="item"
    >
    </goods-list-item>
  </div>
</template>

<script>
import goodsListItem from "./goodListItem";

export default {
  name: "goodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    goodsListItem,
  },
};
</script>

<style lang="scss" scoped>
.goodslist {
  display: flex;
  // 多余元素换行显示
  flex-wrap: wrap;
  // 等比分部空间
  justify-content: space-evenly;
}
</style>
