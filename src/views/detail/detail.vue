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
    <!-- 用户评论组件模块 -->
    <detail-comments :rate="rate"></detail-comments>
    <!-- 推荐组件模块 -->
    <detail-recomment :recommentImg="recommentImg"></detail-recomment>
    <!-- 底部工具栏组件模块 -->
    <tool-nav></tool-nav>
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
import detailRecomment from "./childComps/detailRecomment";
import toolNav from './childComps/toolNav'
// 引入网络接口数据
import { getDetail, getRecomment } from "@/network/detail";

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
      recommentImg: [],
    };
  },
  components: {
    detailNavBar,
    detailSwipers,
    detailContent,
    contentFreight,
    detailShop,
    detailTai,
    detailComments,
    detailRecomment,
    toolNav
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.id;
    // 2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      console.log(res);
      const data = res.result;
      // 请求轮播图数据
      this.topImages = data.itemInfo.topImages;
      // 请求商品数据信息
      this.itemInfo = data.itemInfo;
      this.columns = data.columns;
      this.shopInfo = data.shopInfo;
      this.detailInfo = data.detailInfo;
      this.rate = data.rate;
      // 请求推荐数据
      getRecomment().then((res) => {
        this.recommentImg = res.data.list;
      });
    });
  },
};
</script>

<style lang="scss" scoped></style>
