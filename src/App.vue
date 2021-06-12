<template>
  <div id="app">
    <main-tab-bar v-if="$route.meta.footShow"></main-tab-bar>
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import MainTabBar from "_c/content/mainTabBar/mainTabBar";

export default {
  name: "App",
  data() {
    return {
      isShow: true,
    };
  },
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "./assets/css/beas.css";
</style>
