<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-iocn"></slot>
    </div>
    <slot v-else name="item-iocn-active"></slot>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabBarTime',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path).catch(err => err)
    }
  },
}
</script>

<style lang="scss" scoped>
.tab-bar-item {
  flex: 1;
  font-size: 10px;
  height: 49px;
  text-align: center;
}
.tab-bar-item  img {
  width: 30px;
  height: 30px;
}
</style>