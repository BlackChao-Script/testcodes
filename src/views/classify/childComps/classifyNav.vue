<template>
  <div class="classifyNav">
    <ul class="classifys">
      <li
        v-for="(item, index) in categoryList"
        :key="index"
        class="classifysdata"
        @click="classClick(index, item.maitKey)"
        :class="{ isSelecteds: isSelected === index }"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "classifyNav",
  data() {
    return {
      isSelected: 0,
    };
  },
  props: {
    categoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    classClick(index, item) {
      this.isSelected = index;
      this.$emit("classClick", item);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.classifys {
  width: 85px;
  height: calc(100vh - 93px);
  text-align: center;
  background-color: #f7f7f7;
  text-align: center;
  line-height: 45px;
}
.classifysdata {
  height: 45px;
}
.isSelecteds {
  margin-left: 2px;
  border-left: 4px solid var(--color-tint);
  background-color: #fff;
}
</style>
