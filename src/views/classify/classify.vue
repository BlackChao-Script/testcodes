<template>
  <div id="classify">
    <!-- 头部组件模块 -->
    <nav-bar class="navbar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <!-- 左侧分类组件模块 -->
    <classify-nav
      :categoryList="categoryList"
      @classClick="classClick"
    ></classify-nav>
  </div>
</template>

<script>
// 引入组件
import classifyNav from "./childComps/classifyNav";
import navBar from "_c/common/navbar/navBar";

// 引入网络接口数据
import { getClassify, gitSubClassify } from "@/network/classify";

export default {
  name: "classify",
  data() {
    return {
      categoryList: [],
      key: 0,
    };
  },
  components: {
    navBar,
    classifyNav,
  },
  created() {
    // 请求网络数据
    getClassify().then((res) => {
      console.log(res);
      this.categoryList = res.data.category.list;
    });
    this.gitSubClassify(528);
  },
  methods: {
    classClick(item) {
      this.key = item;
    },
    gitSubClassify(maitKey) {
      gitSubClassify(maitKey).then((res) => {
        
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
