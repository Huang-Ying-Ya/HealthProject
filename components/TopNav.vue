<template>
  <div class="topNav">
    <el-row type="flex" justify="space-around">
      <el-col :span="2">
        <div class="grid-content">
          <el-dropdown>
            <span class="el-dropdown-link">
              <nuxt-link to="./home" class="nuxtLink" target="_blank"
                >首页</nuxt-link
              >
            </span>
            <el-dropdown-menu slot="dropdown" class="disappear"/>
          </el-dropdown>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content">
          <el-dropdown class="dropdown">
            <span class="el-dropdown-link">
              <nuxt-link to="./bodyguide" class="nuxtLink" target="_blank"
                >人体使用指南</nuxt-link
              >
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <nuxt-link to="" class="nuxtLink" target="_blank"
                  >指导思想</nuxt-link
                >
              </el-dropdown-item>
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >诊断方法</nuxt-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >治疗方法</nuxt-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >康养策略</nuxt-link
                ></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
      <el-col :span="2"
        ><div class="grid-content">
          <el-dropdown class="dropdown">
            <span class="el-dropdown-link">
              <nuxt-link to="./modernmedical" class="nuxtLink" target="_blank"
                >现代医学篇</nuxt-link
              >
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >指导思想</nuxt-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >诊断方法</nuxt-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >治疗方法</nuxt-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >康养策略</nuxt-link
                ></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div></el-col
      >
      <el-col :span="2"
        ><div class="grid-content">
          <el-dropdown class="dropdown">
            <span class="el-dropdown-link">
              <nuxt-link
                to="./traditionalmedical"
                class="nuxtLink"
                target="_blank"
                >传统医学篇</nuxt-link
              >
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >指导思想</nuxt-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >诊断方法</nuxt-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >治疗方法</nuxt-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >康养策略</nuxt-link
                ></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div></el-col
      >
      <el-col :span="2"
        ><div class="grid-content">
          <el-dropdown class="dropdown">
            <span class="el-dropdown-link">
              <nuxt-link to="./prevention" class="nuxtLink" target="_blank"
                >疾病预防</nuxt-link
              >
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >常见传染病</nuxt-link
                ></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div></el-col
      >
      <el-col :span="2"
        ><div class="grid-content">
          <el-dropdown class="dropdown">
            <span class="el-dropdown-link">
              <nuxt-link to="./mentalguide" class="nuxtLink" target="_blank"
                >心理健康指南</nuxt-link
              >
            </span>
            <el-dropdown-menu slot="dropdown" class="disappear"/>
          </el-dropdown>
        </div></el-col
      >
      <el-col :span="2"
        ><div class="grid-content">
          <el-dropdown class="dropdown">
            <span class="el-dropdown-link">
              <nuxt-link to="./respiration" class="nuxtLink" target="_blank"
                >慢性呼吸道疾病</nuxt-link
              >
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >慢性支气管炎</nuxt-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >慢性支气管扩张症</nuxt-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >慢阻肺肺气肿</nuxt-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >肺脓肿</nuxt-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >慢性肺心病</nuxt-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >支气管哮喘</nuxt-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >慢性呼吸衰竭</nuxt-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >肺结核</nuxt-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >肺纤维化</nuxt-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >肺部脓肿</nuxt-link
                ></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div></el-col
      >
      <el-col :span="2"
        ><div class="grid-content">
          <el-dropdown class="dropdown">
            <span class="el-dropdown-link">
              <nuxt-link
                to="./healthMaintenance"
                class="nuxtLink"
                target="_blank"
                >传统医学养生</nuxt-link
              >
            </span>
            <el-dropdown-menu slot="dropdown" class="disappear"/>
          </el-dropdown>
        </div></el-col
      >
      <el-col :span="2"
        ><div class="grid-content">
          <el-dropdown class="dropdown">
            <span class="el-dropdown-link">
              <nuxt-link
                to="./traditionalmedical"
                class="nuxtLink"
                target="_blank"
                >新冠肺炎防治</nuxt-link
              >
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >疫情资讯</nuxt-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >深入了解</nuxt-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >应知应会</nuxt-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><nuxt-link to="" class="nuxtLink" target="_blank"
                  >各地防控</nuxt-link
                ></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  name: "TopNav",
};
</script>

<style scoped>
.topNav {
  text-align: center;
  margin-top: 10px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #25b6a0;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.nuxtLink {
  font-size: 14px;
  text-decoration: none;
  color: black;
}
.nuxtLink:hover {
  color: #25b6a0;
}
.dropdown {
  text-align: center;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
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
.disappear {
  display: none;
}
</style>