<template>
  <div id="shopping">
    <!-- 头部nav组件模块 -->
    <nav-bar class="navbar">
      <div slot="center">购物车</div>
    </nav-bar>
    <!-- 商品列表组件模块 -->
    <!-- <cart-list> </cart-list> -->
  </div>
</template>

<script>
import navBar from "_c/common/navbar/navBar";
// import cartList from "./childComps/cartList";

export default {
  name: "shopping",
  components: {
    navBar,
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
