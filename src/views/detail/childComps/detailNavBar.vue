<template>
  <div class="detailNavVar">
    <nav-bar>
      <span
        slot="left"
        class="iconfont icon-zuojiantou"
        @click="leftClick"
      ></span>
      <div slot="center" class="center">
        <div class="center-item">
          {{ titles }}
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
      titles: "商品详细",
      centerItem: 0,
    };
  },
  methods: {
    centerClick(index) {
      this.centerItem = index;
      this.$emit("titleClick", index);
    },
    leftClick() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.detailNavVar {
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
  margin-top: 5px;
  color: var(--color-high-text);
}
.icon-zuojiantou {
  font-size: 25px;
}
</style>
