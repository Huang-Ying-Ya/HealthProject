<template>
  <div>
    <ul>
      <li class="hottest">
        <span class="iconfont icon-hot">&#xe619;</span>
        <span class="hottest-article">最热文章</span>
      </li>
      <li class="article">
        <span class="iconfont icon-point">&#xe757;</span>
        <p class="article-title">我在马路边捡到一分钱啊哎嘿嘿嘿</p>
        <span class="iconfont icon-hot">&#xe619;</span>
        <span class="hot-number">3218</span>
      </li>
      <li class="article">
        <span class="iconfont icon-point">&#xe757;</span>
        <p class="article-title">我在马路边捡到一分钱啊哎</p>
        <span class="iconfont icon-hot">&#xe619;</span>
        <span class="hot-number">3218</span>
      </li>
      <li class="article">
        <span class="iconfont icon-point">&#xe757;</span>
        <span class="article-title">我在马路边捡到一分钱啊哎</span>
        <span class="iconfont icon-hot">&#xe619;</span>
        <span class="hot-number">3218</span>
      </li>
      <li class="article">
        <span class="iconfont icon-point">&#xe757;</span>
        <span class="article-title">我在马路边捡到一分钱啊哎</span>
        <span class="iconfont icon-hot">&#xe619;</span>
        <span class="hot-number">3218</span>
      </li>
      <li class="article">
        <span class="iconfont icon-point">&#xe757;</span>
        <span class="article-title">我在马路边捡到一分钱啊哎</span>
        <span class="iconfont icon-hot">&#xe619;</span>
        <span class="hot-number">3218</span>
      </li>
      <li class="article">
        <span class="iconfont icon-point">&#xe757;</span>
        <span class="article-title">我在马路边捡到一分钱啊哎</span>
        <span class="iconfont icon-hot">&#xe619;</span>
        <span class="hot-number">3218</span>
      </li>
      <li class="article">
        <span class="iconfont icon-point">&#xe757;</span>
        <span class="article-title">我在马路边捡到一分钱啊哎</span>
        <span class="iconfont icon-hot">&#xe619;</span>
        <span class="hot-number">3218</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HottestShow",
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