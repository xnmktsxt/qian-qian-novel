<template>
  <!-- 包含header和nav -->
  <div id="top-wrap">
    <!-- 1、顶部header  -->
    <header id="header">
      <!-- logo -->
      <div id="logo">
        <img src="@/assets/qianqian.png" alt="logo" />
      </div>

      <!-- 搜索框 -->
      <div id="search">
        <el-input
          placeholder="请输入小说名"
          prefix-icon="el-icon-search"
          max="50"
        ></el-input>
      </div>

      <!-- 书架和用户头像 -->
      <div id="user-wrap">
        <!-- 书架 -->
        <div id="bookshelf">
          <i class="k-1 el-icon-notebook-2">书架</i>
        </div>
        <!-- 头像 -->
        <div id="user">
          <div class="block">
            <el-avatar icon="el-icon-user"></el-avatar>
          </div>
        </div>
      </div>
    </header>

    <!-- 2、顶部导航栏 -->
    <ul id="nav">
      <li class="nav-item" v-for="label in labels" :key="label.index">
        <a href="#" class="a">{{ label }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'QHeader',
  data() {
    return {
      labels: ['首页', '玄幻', '修真', '都市', '穿越', '网游', '科幻', '其它']
    }
  }
}
</script>

<style lang="scss" scope>
#top-wrap {
  margin: 0;
  box-shadow: 0 1px 4px #c7c6c6;
  background-color: white;
  @mixin link-hover {
    &:hover {
      color: skyblue;
    }
  }
  // 第一行header
  #header {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    width: 80%;
    height: 8.5rem;
    border-bottom: 1px solid #f5f5f5;
    // logo
    #logo > img {
      width: 5rem;
    }
    // 右上角书架和头像
    #user-wrap {
      width: 13rem;
      display: flex;
      justify-content: space-between;
      font-size: 2rem;

      #bookshelf {
        display: flex;
        align-items: center;
        @include link-hover;
        cursor: pointer;
      }
      #user {
        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  // 第二行nav
  #nav {
    padding: 0;
    width: 80%;
    height: 6.4rem;
    margin: auto;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-item {
      font-size: 1.6rem;
      .a {
        text-decoration: none;
        color: #262626;
        @include link-hover;
      }
    }
  }
}
</style>