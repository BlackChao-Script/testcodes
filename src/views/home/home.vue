<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from "_c/common/navbar/navBar";
import { getHomeMultidata } from "@/network/home";

export default {
  name: "home",
  data() {
    return {
      result: null,
    };
  },
  components: {
    navBar,
  },
  created() {
    //1.请求多个数据
    getHomeMultidata().then((res) => {
      console.log(res);
      this.result = res;
    });
  },
};
</script>

<style lang="scss" scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>
