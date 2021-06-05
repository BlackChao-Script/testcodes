<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import navBar from "_c/common/navbar/navBar";
import { getHomeMultidata } from "@/network/home";
import { Swiper, SwiperItem } from "_c/common/swiper";

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
    Swiper,
    SwiperItem,
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
