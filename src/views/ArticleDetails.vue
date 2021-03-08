<template>
  <div id="article-details">
    <!-- 封面简介更新时间等 -->
    <div id="top">
      <img id="cover" :src="articleDetials.imageurl" alt="小说封面" />
      <div id="details">
        <h3 id="name">{{ articleDetials.name }}</h3>
        <div id="desc">{{ articleDetials.desc }}</div>
        <div id="updatetime">{{ articleDetials.updatetime }}</div>
        <p id="introduce">{{ articleDetials.introduce }}</p>
        <div id="button-group">
          <el-button>开始阅读</el-button>
          <el-button>加入书架</el-button>
          <el-button @click="drawer = true">选择章节列表</el-button>
        </div>
      </div>
    </div>

    <!-- 章节列表 -->
    <div id="bottom">
      <h3>章节列表</h3>
      <div id="catalog-list">
        <div
          id="catalog"
          v-for="(catalog, index) in articleDetials.booklist"
          :key="index"
        >
          <router-link to="#">{{ catalog.name }}</router-link>
        </div>
      </div>
    </div>

    <!-- 选择章节列表 -->
    <el-drawer title="选择章节列表" :visible.sync="drawer">
      <div id="catalog-list-wrap">
        <div
          id="catalog-list-details"
          v-for="(catalog, index) in articleDetials.page"
          :key="index"
        >
          <router-link
            :to="{ name: 'ArticleDetails', query: { url: catalog.url } }"
            >{{ catalog.name }}</router-link
          >
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ArticleDetails',
  data () {
    return {
      articleDetials: '',
      drawer: false
    }
  },
  created () {
    this.getData()
  },
  watch: {
    $route () {
      this.getData()
    }
  },
  methods: {
    getData () {
      let url = '/api' + this.$route.path + '?' + 'url=' + this.$route.query.url
      axios.get(url)
        .then(response => this.articleDetials = response.data.data)
        .catch(err => console.log(err))
    }
  }
}
</script>

<style lang="scss" scope>
@import '@/assets/style/common';
#article-details {
  width: 80%;
  margin: auto;

  #top {
    background-color: white;
    display: flex;
    border-radius: 0.6rem;
    margin-top: 2rem;
    padding: 2rem;
    #cover {
      width: 20%;
    }
    #details {
      width: 80%;
      padding-left: 5rem;
      padding-right: 3rem;
      display: flex;
      flex-flow: column wrap;
      align-items: flex-start;
      justify-content: space-between;
      font-size: 1.4rem;
      #introduce::before {
        content: '简介：';
      }
    }
    #button-group {
      display: flex;
      flex-flow: row wrap;
      .el-button {
        flex: 1 1 20%;
        margin: 0;
        margin-right: 1rem;
      }
    }
  }

  #bottom {
    margin-top: 2rem;
    background-color: white;
    border-radius: 0.6rem;
    padding: 2rem;
    h3 {
      @include title-level-2;
      a {
        cursor: pointer;
        @include link-hover;
      }
    }

    #catalog-list {
      display: flex;
      flex-flow: row wrap;
      #catalog {
        flex: 0 1 33.3%;
        display: flex;
        justify-content: space-between;
        padding-bottom: 1.5rem;
        a {
          text-decoration: none;
          color: #262626;
          font-size: 1.4rem;
          @include link-hover;
        }
      }
    }
  }

  #catalog-list-wrap {
    #catalog-list-details {
      padding-bottom: 1.5rem;
      a {
        text-decoration: none;
        color: #262626;
        font-size: 1.4rem;
        @include link-hover;
      }
    }
  }
}
</style>