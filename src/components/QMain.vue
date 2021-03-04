<template>
  <div id="article-wrap">
    <div id="article-top">
      <div id="hot">
        <h3 id="hot-title">热门小说</h3>
        <div id="hot-book-list">
          <a
            href="#"
            v-for="book in homeData.hot"
            :key="book.index"
            class="hot-book"
          >
            <img :src="book.imageurl" class="cover" />
            <div class="title-author-introduce">
              <div class="title-author">
                <span class="title">{{ book.title }}</span>
                <!-- <span class="author">{{ book.author }}</span> -->
              </div>
              <p class="introduce">{{ book.intrduce }}</p>
            </div>
          </a>
        </div>
      </div>

      <div id="recommended">
        <h3 id="recommended-title">推荐小说</h3>
        <div id="recommended-book-list">
          <div
            class="recommeded-book"
            v-for="book in homeData.recommended[0].content"
            :key="book.index"
          >
            <a href="#" class="title">{{ book.title }}</a>
            <a href="#" class="author">{{ book.author }}</a>
          </div>
        </div>
      </div>
    </div>
    <div id="aritcle-bottom"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'QMain',
  // 在组件创建之后拉取数据
  data () {
    return {

    }
  },
  created () {
    this.$store.dispatch('getHomeData')
  },
  computed: {
    ...mapState(['homeData'])
  }
}
</script>

<style lang="scss" scope>
#article-wrap {
  display: flex;
  width: 80%;
  margin: auto;
  flex-direction: column;

  @mixin link-hover {
    &:hover {
      color: skyblue;
    }
  }

  #article-top {
    margin-top: 2rem;
    padding: 2rem;
    background-color: white;
    font-size: 2rem;
    display: flex;
    border-radius: 0.6rem;

    @mixin hot-recommeded-title {
      font-size: 1.6rem;
      text-align: left;
      margin: 0 0 1.5rem 0;
      padding: 1rem 0 1rem 0;
      border-bottom: 1px solid #dbdbdb;
    }

    @media screen and (max-width: 80rem) {
      flex-direction: column;
      align-items: center;
      #recommended {
        display: none;
      }
    }

    #hot {
      width: 70%;
      margin-right: 5rem;
      margin-left: 5rem;
      #hot-title {
        @include hot-recommeded-title;
      }
      #hot-book-list {
        display: flex;
        flex-wrap: wrap;
        font-weight: 400;
        font-size: 1.4rem;
        // background-color: greenyellow;

        .hot-book {
          display: flex;
          flex: 1 1 48.5%;
          padding: 1rem 1rem 1rem 0;
          color: black;
          text-decoration: none;
          border-bottom: 1px solid rgb(243, 241, 241);
          @include link-hover;

          .cover {
            width: 12rem;
            height: 14rem;
          }
          .title {
            font-weight: 700;
          }
          .introduce {
            padding: 1rem;
          }
        }
      }
    }

    #recommended {
      width: 30%;
      // background-color: royalblue;

      #recommended-title {
        @include hot-recommeded-title;
      }

      #recommended-book-list {
        font-weight: 400;
        font-size: 1.4rem;
        text-align: left;
        .recommeded-book {
          display: flex;
          justify-content: space-between;
          padding-bottom: 1.8rem;
          a {
            text-decoration: none;
            color: black;
            @include link-hover;
          }
        }
      }
    }
  }
  #aritcle-bottom {
    // width: 20%;
    height: 30rem;
    background-color: red;
  }
}
</style>