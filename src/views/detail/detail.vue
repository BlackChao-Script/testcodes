<template>
  <div id="detail">
    <!-- 头部nav组件模块 -->
    <detail-nav-bar></detail-nav-bar>
    <!-- 轮播图组件模块 -->
    <detail-swipers :top-images="topImages"></detail-swipers>
    <!-- 商品标题内容组件模块 -->
    <detail-content :content="itemInfo" :columns="columns"></detail-content>
    <!-- 货运组件模块 -->
    <content-freight></content-freight>
    <!-- 商家详细组件模块 -->
    <detail-shop :shopInfo="shopInfo"></detail-shop>
    <!-- 穿衣效果组件模块 -->
    <detail-tai :detailTais="detailInfo"></detail-tai>
    <!-- 返回顶部组件模块 -->
    <div v-if="backTop" @click="backTopFun">
      <back-top></back-top>
    </div>
    <!-- 用户评论组件模块 -->
    <detail-comments :rate="rate"></detail-comments>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</template>

<script>
// 引入组件
import detailNavBar from "./childComps/detailNavBar";
import detailSwipers from "./childComps/detailSwiper";
import detailContent from "./childComps/detailContent";
import contentFreight from "./childComps/contentFreight";
import detailShop from "./childComps/detailShop";
import detailTai from "./childComps/detailTai";
import detailComments from "./childComps/detailComments";
// 引入公共组件
import backTop from "_c/content/backTop/backTop";
// 引入网络接口数据
import { getDetail } from "@/network/detail";

export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topImages: [],
      itemInfo: {},
      columns: [],
      shopInfo: {},
      detailInfo: {},
      backTop: false,
      itemParams: {},
      rate: {},
    };
  },
  components: {
    detailNavBar,
    detailSwipers,
    detailContent,
    contentFreight,
    detailShop,
    detailTai,
    backTop,
    detailComments,
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.id;
    // 2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      console.log(res);
      this.topImages = res.result.itemInfo.topImages;
      this.itemInfo = res.result.itemInfo;
      this.columns = res.result.columns;
      this.shopInfo = res.result.shopInfo;
      this.detailInfo = res.result.detailInfo;
      this.rate = res.result.rate;
    });
  },
  mounted() {
    // 监听 backTopScroll 事件
    window.addEventListener("scroll", this.backTopScroll);
  },
  methods: {
    // 回到顶部
    backTopScroll() {
      if (window.scrollY > window.screen.height / 0.5) {
        this.backTop = true;
      } else {
        this.backTop = false;
      }
    },
    // 点击回到顶部
    backTopFun() {
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style lang="scss" scoped></style>
