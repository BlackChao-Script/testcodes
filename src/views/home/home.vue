<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
import navBar from "_c/common/navbar/navBar";
import homeSwiper from './childComps/homeSwiper'

import { getHomeMultidata } from "@/network/home";


export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  components: {
    navBar,
    homeSwiper
  },
  created() {
    //1.请求多个数据
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
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
