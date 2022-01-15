<template>
  <div>
    <div class="create-state">
      <div class="create-state-title">
        <span class="state">创作动态</span>
        <span class="center">创作中心</span>
      </div>
    </div>
    <vue-seamless-scroll
      :data="runningData"
      :class-option="scrollOption"
      class="scroll-container seamless-scroll"
    >
      <div class="flex-row row-data" v-for="item in runningData" :key="item.id">
        <span class="row-1 row-nomal">{{ item.name }}</span>
        <span class="row-2 row-nomal">{{ item.val }}</span>
      </div>
    </vue-seamless-scroll>
  </div>
</template>

<script>
export default {
  name: "Scroll",
  data() {
    return {
      runningData: [
        {
          name: "张三",
          val: "更改了文章123",
        },
        {
          name: "李四",
          val: "更改了文章456",
        },
        {
          name: "王五",
          val: "更改了文章789",
        },
        {
          name: "王五",
          val: "更改了文章789",
        },
        {
          name: "王五",
          val: "更改了文章789",
        },
        {
          name: "王五",
          val: "更改了文章789",
        },
        {
          name: "王五",
          val: "更改了文章789",
        },
        {
          name: "王五",
          val: "更改了文章789",
        },
        {
          name: "王五",
          val: "更改了文章789",
        },
        {
          name: "王五",
          val: "更改了文章789",
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
.create-state {
  .create-state-title {
    display: flex;
    border-bottom: 1px solid #d7d7d7;
    justify-content: space-between;
    .state {
      padding-left: 10px;
      font-size: 18px;
    }
    .center {
      padding-right: 10px;
      font-size: 18px;
      cursor: pointer;
      &:hover {
        color: @themeColor;
      }
    }
  }
}
.seamless-scroll {
  height: 250px;
  padding-top: 10px;
  margin-top: 20px;
  overflow: hidden;
  .row-data {
    margin-top: 10px;
  }
}
</style>