<template>
  <div class="detail-swiper">
    <swiper class="swipe">
      <swiper-item v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "_c/common/swiper";

export default {
  name: "detailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.swipe {
  height: 350px;
}
</style>
