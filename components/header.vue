<template>
  <div class="header">
    <div class="slogan">全民健康网-人人为我、我为人人的健康知识宣传、分享和创作公益平台，服务健康中国战略</div>
    <div class="headBar">
        <div class="logo">
            <img src="./images/logo.jpg">
            <span class="siteName">全民健康网</span>
        </div>
        <div class="search">
            <input type="text" class="searchInput" placeholder="搜索">
            <input type="button" class="searchBtn">
            <span class="searchKeyword">热门搜索关键词：</span>
        </div>
        <div class="login">
            <a>登录</a>
            <a>注册</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Header',
}
</script>

<style scoped lang="less">
    .header {
        .slogan {
        font-size    : 12px;
        color        : @themeColor;
        margin-bottom: 10px;
        }

        .headBar {
            display: -webkit-flex;

            .logo {
                display       : -webkit-flex;
                float         : left;
                margin-left   : 20px;
                margin-right  : 100px;
                vertical-align: center;
                height        : 40px;
                line-height   : 40px;
                cursor        : pointer;

                img {
                    height: 40px;
                    width : 40px;
                }

                .siteName {
                    font-weight: 700;
                }
            }

            .search {
                position: relative;
                display : -webkit-flex;
                height  : 30px;
                width   : 800px;

                .searchInput {
                    width           : 300px;
                    height          : 30px;
                    background-color: #FFF;
                    border-radius   : 10px;
                    outline         : none;
                    border          : 1px solid #c4c7ce;
                    box-shadow      : 1px 1px 8px 0 #c4c7ce;
                    padding-left    : 10px;
                    position        : absolute;
                }

                .searchBtn {
                    height    : 20px;
                    width     : 20px;
                    position  : absolute;
                    background: url("./images/search.png") no-repeat;
                    top       : 5px;
                    left      : 285px;
                    border    : none;
                    outline   : none;
                    cursor    : pointer;
                }

                .searchKeyword {
                    position : absolute;
                    left     : 330px;
                    top      : 5px;
                    font-size: 13px;
                }
            }

            .login {
                float  : right;
                display: -webkit-flex;

                a {
                    font-size  : 16px;
                    margin-left: 10px;
                    cursor     : pointer;
                    &:hover {
                        color: @themeColor;
                    }
                }
            }
        }
    }
</style>