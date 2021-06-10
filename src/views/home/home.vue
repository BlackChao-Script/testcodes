<template>
  <div id="home">
    <!-- 页面头部nav组件模块 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!--页面滚动到原组件时用于替换scroll里面的控制组件模块 -->
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
      class="tab-con"
    ></tab-control>
    <!-- 页面滚动组件模块 -->
    <scroll
      class="conter"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!-- 轮播图组件模块 -->
      <home-swiper :banners="banners"></home-swiper>
      <!-- 推荐组件模块 -->
      <recommended-view :recommends="recommends"></recommended-view>
      <!-- 流行推荐组件模块 -->
      <home-popular></home-popular>
      <!-- 控制组件模块 -->
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <!-- 商品列表信息组件模块 -->
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!-- 返回顶部小组件模块 -->
    <!-- .nattive 修饰符 监听组件根元素的原生事件 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
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
import scroll from "_c/common/scroll/scroll";
import backTop from "_c/content/backTop/backTop";
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
      currentType: "pop",
      isShowBackTop: false,
      taboffsetTop: 0,
      isTabFixed: false,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  // 注册组件
  components: {
    homeSwiper,
    recommendedView,
    homePopular,
    navBar,
    TabControl,
    goodsList,
    scroll,
    backTop,
  },
  // 生命周期函数(组件创建完后调用) 请求数据
  created() {
    //1.请求多个数据
    this.getHomeMultidata();

    //2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 获取 tabControl 的 offsetTop
    // 所有组件都有一个属性 $el: 用于获取组件中的元素
    setTimeout(() => {
      this.taboffsetTop = this.$refs.tabControl2.$el.offsetTop;
    }, 500);
  },
  methods: {
    // 事件监听相关的方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    loadMore() {
      // 上拉加载更多数据
      this.getHomeGoods(this.currentType);
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      // 判断BackTop是否显示
      this.isShowBackTop = -position.y > 1000;
      // 决定tabcControl是否吸顶（position: fixed）
      this.isTabFixed = -position.y > this.taboffsetTop;
    },

    // 网络请求相关的方法
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

        // 完成上拉加载更多
        this.$refs.scroll.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;

  /* 在使用浏览器原生滚动时,为了让导航不跟随一起滚动 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10; */
}
.conter {
  /* calc动态计算 */
  /* vh 视口高度 */
  height: calc(100vh - 93px);
  overflow: hidden;
}
.tab-con{
  position: fixed;
  top: 42px;
  left: 0;
  right: 0;
  z-index: 10;
}
</style>
