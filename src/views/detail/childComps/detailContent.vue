<template>
  <div class="detailContent">
    <p class="desc">{{ content.title }}</p>
    <span class="NowPrice">￥{{ content.highNowPrice }}</span>
    <span class="highPrice" :class="{ ishidden: ishidden }"
      >￥{{ content.highPrice }}</span
    >
    <span class="special" :class="{ ishidden: ishidden }">{{
      content.discountDesc
    }}</span>
    <div class="columns">
      <div v-for="(item, index) in columns" :key="index">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailContent",
  props: {
    content: {
      type: Object,
      default() {
        return {};
      },
    },
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    ishidden() {
      return this.content.discountDesc === "";
    },
  },
};
</script>

<style lang="scss" scoped>
.detailContent {
  height: 150px;
  margin-top: 10px;
  position: relative;
  box-shadow: 0 5px 1px #fdfaf6;
}
.desc {
  font-size: 20px;
  height: 69px;
  font-weight: 700;
  margin: 5px;
  text-overflow: ellipsis;
}
.NowPrice {
  font-size: 25px;
  color: var(--color-high-text);
}
.highPrice {
  margin-left: 5px;
  text-decoration: line-through;
  color: #ccc;
}
.special {
  display: inline-block;
  width: 70px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  margin-left: 10px;
  border-radius: 20px;
  background-color: var(--color-tint);
  color: var(--color-background);
}
.columns {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: space-evenly;
  text-align: center;
  font-size: 15px;
  color: #ccc;
}
.columns div {
  flex: 1;
}
.ishidden {
  display: none;
}
</style>
