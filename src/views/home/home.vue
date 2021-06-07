<template>
  <div id="home">
    <!-- 页面头部nav模块 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 轮播图模块 -->
    <home-swiper :banners="banners"></home-swiper>
    <!-- 推荐模块 -->
    <recommended-view :recommends="recommends"></recommended-view>
    <!-- 流行推荐模块 -->
    <home-popular></home-popular>
    <!-- 控制模块 -->
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
    ></tab-control>
    <!-- 商品列表信息模块 -->
    <goods-list :goods="goods['pop'].list"></goods-list>
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
    </ul>
  </div>
</template>

<script>
// 引入home组件
import homeSwiper from "./childComps/homeSwiper";
import recommendedView from "./childComps/recommendedView";
import homePopular from "./childComps/homePopular";
// 引入公共组件
import navBar from "_c/common/navbar/navBar";
import TabControl from "_c/content/tabControl/TabControl";
import goodsList from "_c/content/goods/goodList";
// 引入网络接口数据
import { getHomeMultidata, getHomeGoods } from "@/network/home";

export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  // 注册组件
  components: {
    homeSwiper,
    recommendedView,
    homePopular,
    navBar,
    TabControl,
    goodsList,
  },
  // 生命周期函数(创建页面时执行) 请求数据
  created() {
    //1.请求多个数据
    this.getHomeMultidata();

    //2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // 把data里面的list添加到goods的list里面
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
#home {
  margin-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>
