<template>
  <div>
    <ul>
      <li class="concerned">
        <span class="iconfont icon-eye">&#xe619;</span>
        <span class="concerned-article">最关心文章</span>
      </li>
      <li class="article">
        <span class="iconfont icon-point">&#xe757;</span>
        <p class="article-title">我在马路边捡到一分钱哎哟</p>
        <span class="iconfont icon-eye">&#xe603;</span>
        <span class="hot-number">6666</span>
      </li>
      <li class="article">
        <span class="iconfont icon-point">&#xe757;</span>
        <span class="article-title">我在马路边捡到一分钱哎哟</span>
        <span class="iconfont icon-eye">&#xe603;</span>
        <span class="hot-number">6666</span>
      </li>
      <li class="article">
        <span class="iconfont icon-point">&#xe757;</span>
        <span class="article-title">我在马路边捡到一分钱哎哟</span>
        <span class="iconfont icon-eye">&#xe603;</span>
        <span class="hot-number">6666</span>
      </li>
      <li class="article">
        <span class="iconfont icon-point">&#xe757;</span>
        <span class="article-title">我在马路边捡到一分钱哎哟</span>
        <span class="iconfont icon-eye">&#xe603;</span>
        <span class="hot-number">6666</span>
      </li>
      <li class="article">
        <span class="iconfont icon-point">&#xe757;</span>
        <span class="article-title">我在马路边捡到一分钱哎哟</span>
        <span class="iconfont icon-eye">&#xe603;</span>
        <span class="hot-number">6666</span>
      </li>
      <li class="article">
        <span class="iconfont icon-point">&#xe757;</span>
        <span class="article-title">我在马路边捡到一分钱哎哟</span>
        <span class="iconfont icon-eye">&#xe603;</span>
        <span class="hot-number">6666</span>
      </li>
      <li class="article">
        <span class="iconfont icon-point">&#xe757;</span>
        <span class="article-title">我在马路边捡到一分钱哎哟</span>
        <span class="iconfont icon-eye">&#xe603;</span>
        <span class="hot-number">6666</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ConcernedShow",
};
</script>

<style scoped lang="less">
.hottest {
  list-style: none;
  padding: 10px;
  .hottest-article {
    font-size: 18px;
  }
  .icon-hot {
    font-size: 18px;
    color: #ed4c52;
  }
}
.concerned {
  list-style: none;
  padding: 10px;
  .concerned-article {
    font-size: 18px;
  }
  .icon-eye {
    font-size: 18px;
    color: #2e8bd5;
  }
}
.article {
  list-style: none;
  padding: 5px;
  cursor: pointer;
  .icon-point {
    color: #e1e1e1;
  }
  .icon-hot {
    margin-left: 10px;
    color: #ed4c52;
  }
  .article-title {
    display: inline-block;
    width: 192px;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    &:hover {
      color: @themeColor;
    }
  }
  .hot-number {
    font-size: 14px;
    color: #ed4c52;
  }
  .icon-eye {
    margin-left: 10px;
    color: #2e8bd5;
  }
}
</style>