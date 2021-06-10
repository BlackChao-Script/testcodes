<template>
  <div class="detailNavVar">
    <nav-bar>
      <span
        slot="left"
        class="iconfont icon-zuojiantou"
        @click="leftClick"
      ></span>
      <div slot="center" class="center">
        <div
          class="center-item"
          v-for="(item, index) in titles"
          :key="index"
          @click="centerClick(index)"
          :class="{ isClass: index === centerItem }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from "_c/common/navbar/navBar";
export default {
  name: "detailNavBar",
  components: {
    navBar,
  },
  data() {
    return {
      titles: ["商品", "评论", "推荐"],
      centerItem: 0,
    };
  },
  methods: {
    centerClick(index) {
      this.centerItem = index;
    },
    leftClick() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.detailNavVar{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  z-index: 22;
}
.center {
  display: flex;
}
.center-item {
  flex: 1;
  font-size: 15px;
}
.icon-zuojiantou {
  font-size: 25px;
}
.isClass {
  color: var(--color-high-text);
}
</style>
