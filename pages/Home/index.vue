<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content">
          <!-- 新闻推送板块 -->
          <NewsSection />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <!-- 轮播图 -->
          <Banner />
          <!-- 推荐文章列表 -->
          <el-row>
            <el-col :span="12">
              <div class="grid-content">
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
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
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
              </div></el-col
            >
          </el-row>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content download">
          <div class="download-title">
            <span class="iconfont icon-download">&#xf0304;</span>
            <span class="download-title">下载中心</span>
          </div>
          <div class="download-content">
            <div>健康中国行动纲领</div>
            <div>全民健康宣传手册</div>
          </div>
        </div>
        <!-- 滚动播放 -->
        <Scroll />
      </el-col>
    </el-row>
    <div class="advertising">广告位</div>
    <el-row :gutter="20">
      <el-col :span="9">
        <div class="grid-content">
          <Medical moduleName="现代医学" />
        </div>
      </el-col>
      <el-col :span="9">
        <div class="grid-content">
          <Medical moduleName="传统医学" />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <HomeAdviser />
        </div>
      </el-col>
    </el-row>
    <el-row class="border-traditional-covid">
      <el-col :span="12">
        <div class="grid-content">
          <HomeBreathe />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <HomeTraditionalAndCovid />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import NewsSection from "../../components/newsSection.vue";
import Banner from "../../components/banner.vue";
import Medical from "../../components/medical.vue";
import HomeAdviser from "../../components/homeAdviser.vue";
import Scroll from "../../components/scroll.vue";
import HomeBreathe from "../../components/homebreathe.vue";
import HomeTraditionalAndCovid from "../../components/homeTraditionalAndCovid.vue";
export default {
  name: "Home",
  layout: "homeLayout",
  components: {
    NewsSection,
    Banner,
    Medical,
    HomeAdviser,
    Scroll,
    HomeBreathe,
    HomeTraditionalAndCovid,
  },
};
</script>

<style scoped lang="less">
.el-row {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
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
.download {
  padding-top: 10px;
  height: 260px;
  .icon-download {
    font-size: 20px;
    color: @themeColor;
    vertical-align: bottom;
  }
  .download-title {
    font-size: 18px;
    padding-bottom: 10px;
    border-bottom: 1px solid #d7d7d7;
  }
  .download-content {
    cursor: pointer;
    margin-top: 15px;
    div {
      margin-bottom: 10px;
      &:hover {
        color: @themeColor;
      }
    }
  }
}
.advertising {
  height: 50px;
  background-color: #f2f2f2;
  line-height: 50px;
}
.border-traditional-covid {
  border-top: 1px dashed #d7d7d7;
}
</style>
