<template>
  <div class="Comments">
    <div class="user">
      <span>用户评价</span>
      <span class="more">更多</span>
    </div>
    <div class="userInf">
      <img :src="rate.list[0].user.avatar" />
      <span>{{ rate.list[0].user.uname }}</span>
    </div>
    <p class="userComments">{{ rate.list[0].content }}</p>
    <span class="data">{{ rate.list[0].created | fromatDate }}</span>
    <span class="style"> {{ rate.list[0].style }}</span>
    <div class="userimages">
      <div
        class="userImg"
        v-for="(item, index) in rate.list[0].images"
        :key="index"
      >
        <img :src="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailComments",
  data() {
    return {
      createDate: null,
    };
  },
  props: {
    rate: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.Comments {
  margin-top: 10px;
  border-bottom: 4px solid #fdfaf6;
}
.user {
  padding-left: 10px;
  height: 50px;
  line-height: 50px;
  border-bottom: 4px solid #fdfaf6;
}
.more {
  float: right;
  margin-right: 10px;
}
.userInf {
  display: flex;
  height: 50px;
  padding-left: 10px;
  margin-top: 10px;
}
.userInf img {
  width: 50px;
  border-radius: 50%;
}
.userInf span {
  line-height: 50px;
  margin-left: 10px;
}
.userComments {
  padding-left: 10px;
  margin-top: 10px;
}
.data,
.style {
  font-size: 12px;
  margin-top: 10px;
  padding-left: 10px;
}
.userimages {
  display: flex;
  margin-top: 10px;
}
.userImg img {
  width: 100px;
  margin-left: 5px;
  flex: 1;
}
</style>
