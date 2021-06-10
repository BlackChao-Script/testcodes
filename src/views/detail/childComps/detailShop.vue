<template>
  <div class="detailShop">
    <div class="title">
      <span class="titlelog">
        <img :src="shopInfo.shopLogo" class="logo" />
      </span>
      <h3 class="titletext">{{ shopInfo.name }}</h3>
    </div>
    <div class="detailed">
      <div class="detailedLeft">
        <span>
          <div class="sales">{{ sales }}万</div>
          <div>总销量</div>
        </span>
        <span>
          <div class="sales">{{ shopInfo.cGoods }}</div>
          <div>全部宝贝</div>
        </span>
      </div>
      <div class="detailedRight">
        <div v-for="(item, index) in shopInfo.score" :key="index">
          <div class="nasc">
            <span class="name">{{ item.name }}</span>
            <span class="score">{{ item.score }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="enter">
      <div>进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailShop",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    sales() {
      return (this.shopInfo.cSells / 10000).toFixed(1);
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  width: 100%;
  height: 100px;
  display: flex;
}
.titlelog {
  margin-top: 20px;
  margin-left: 5px;
  display: inline-block;
  width: 50px;
  height: 50px;
  text-align: center;
  background-color: #fdfaf6;
  border-radius: 25px;
}
.logo {
  width: 80%;
  margin-top: 5px;
  border-radius: 50%;
}
.titletext {
  margin-top: 35px;
  margin-left: 10px;
}
.detailed {
  display: flex;
  height: 100px;
}
.detailedLeft {
  flex: 1;
  display: flex;
  text-align: center;
  margin-top: 25px;
  border-right: 1px solid #ccc;
}
.detailedLeft span {
  flex: 1;
}
.detailedLeft span .sales {
  margin-bottom: 5px;
}
.detailedRight {
  flex: 1;
  margin-left: 30px;
  margin-top: 10px;
}
.nasc {
  margin-top: 5px;
}
.name {
  margin-right: 10px;
}
.score {
  color: var(--color-high-text);
}
.enter {
  margin-top: 10px;
  width: 100%;
  height: 75px;
  line-height: 50px;
  text-align: center;
  box-shadow: 0 4px 2px #fdfaf6;
}
.enter div {
  width: 200px;
  margin-left: 20%;
  border-radius: 15px;
  background-color: #f2f4fb;
}
</style>
