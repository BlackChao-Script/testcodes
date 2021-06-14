<template>
  <div class="detailTai">
    <div class="taiTitle">
      <div class="one"></div>
      <p>{{ detailTais.desc }}</p>
      <div class="two"></div>
      <p class="detailImageTitle">{{ detailTais.detailImage[0].key }}</p>
    </div>
    <div class="detailImages" v-for="(item ,index) in detailTais.detailImage[0].list" :key="index">
      <img v-lazy="item" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "detailTai",
  data() {
    return {
      detailImage: "",
    };
  },
  props: {
    detailTais: {
      type: Object,
      defalut() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.detailTai {
  overflow: hidden;
}
.taiTitle {
  padding-top: 30px;
  height: 150px;
}
.one {
  width: 100px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
}
.two {
  float: right;
  margin-top: 15px;
  width: 100px;
  border: 1px solid #ccc;
}
.detailImageTitle{
  margin-top: 40px;
  margin-left: 5px;
  font-size: 15px;
  font-weight: 700;
}
.detailImages img{
  width: 100%;
}
</style>
