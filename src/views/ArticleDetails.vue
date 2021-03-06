<template>
  <div id="article-details">
    <!-- 封面简介更新事件等 -->
    <div id="top">
      <img id="cover" :src="articleDetials.imageurl" alt="小说封面" />
      <div id="details">
        <h3 id="name">{{ articleDetials.name }}</h3>
        <div id="desc">{{ articleDetials.desc }}</div>
        <div id="updatetime">{{ articleDetials.updatetime }}</div>
        <p id="introduce" v-cloak>{{ articleDetials.introduce }}</p>
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
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ArticleDetails',
  data () {
    return {
      articleDetials: ''
    }
  },
  created () {
    let url = '/api' + this.$route.path + '?' + 'url=' + this.$route.query.url
    axios.get(url)
      .then(response => this.articleDetials = response.data.data)
      .catch(err => console.log(err))
  }
}
</script>

<style lang="scss" scope>
#article-details {
  width: 80%;
  margin: auto;
  #top {
    background-color: white;
    display: flex;
    // justify-content: space-between;
    border-radius: 0.6rem;
    margin-top: 2rem;
    padding: 2rem;
    // font-size: 2rem;
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
  }

  @mixin hot-recommeded-title {
    font-size: 1.6rem;
    text-align: left;
    margin: 0 0 1.5rem 0;
    padding: 1rem 0 1rem 0;
    border-bottom: 1px solid #dbdbdb;
  }
  @mixin link-hover {
    &:hover {
      color: skyblue;
    }
  }
  #bottom {
    margin-top: 2rem;
    background-color: white;
    border-radius: 0.6rem;
    padding: 2rem;
    h3 {
      @include hot-recommeded-title();
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
}
</style>