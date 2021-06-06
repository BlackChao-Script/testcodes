<template>
  <div>
     <tab-bar>
      <tab-bar-item path="/home" activeColor="#f8a6a1">
        <img slot="item-iocn" src="@/assets/images/tabbar/icon01.png" alt="">
        <img slot="item-iocn-active" src="@/assets/images/tabbar/icon01_active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/classify" activeColor="#f8a6a1">
        <img slot="item-iocn" src="@/assets/images/tabbar/icon02.png" alt="">
        <img slot="item-iocn-active" src="@/assets/images/tabbar/icon02_active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
       <tab-bar-item path="/shopping" activeColor="#f8a6a1">
        <img slot="item-iocn" src="@/assets/images/tabbar/icon03.png" alt="">
        <img slot="item-iocn-active" src="@/assets/images/tabbar/icon03_active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
       <tab-bar-item path="/mine" activeColor="#f8a6a1">
        <img slot="item-iocn" src="@/assets/images/tabbar/icon04.png" alt="">
        <img slot="item-iocn-active" src="@/assets/images/tabbar/icon04_active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import tabBar from '_c/common/tabbar/tabBar'
import tabBarItem from '_c/common/tabbar/tabBarItem'

  export default {
    name:'MainTabBar',
    components:{
      tabBar,
      tabBarItem
    }
  }
</script>

<style lang="scss" scoped>
</style>