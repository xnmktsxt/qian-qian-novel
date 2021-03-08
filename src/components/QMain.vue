<template>
  <div id="article-wrap">
    <div id="article-top">
      <!-- 热门小说 -->
      <div id="hot">
        <h3 id="hot-title">热门小说</h3>
        <div id="hot-book-list">
          <router-link
            :to="{ path: '/getAriticle', query: { url: book.url } }"
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
          </router-link>
        </div>
      </div>

      <!-- 强力推荐 -->
      <div id="recommended">
        <h3 id="recommended-title">{{ highlyRecommended.recommendedTitle }}</h3>
        <div id="recommended-book-list">
          <div
            class="recommeded-book"
            v-for="book in highlyRecommended.content"
            :key="book.index"
          >
            <router-link to="#" class="title">{{ book.title }}</router-link>
            <router-link to="#" class="author">{{ book.author }}</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- 按分类推荐 -->
    <div id="aritcle-bottom">
      <category-book></category-book>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CategoryBook from '@/components/Home/CategoryBook.vue'

export default {
  name: 'QMain',
  created () {
    this.$store.dispatch('getHomeData')
  },
  computed: {
    ...mapState(['homeData']),

    // 强力推荐的书
    highlyRecommended () {
      return this.homeData.recommended[0]
    }
  },
  components: {
    CategoryBook
  }
}
</script>

<style lang="scss" scope>
@import '@/assets/style/common';
#article-wrap {
  display: flex;
  width: 80%;
  margin: auto;
  flex-direction: column;

  #article-top {
    margin-top: 2rem;
    padding: 2rem;
    background-color: white;
    font-size: 2rem;
    display: flex;
    border-radius: 0.6rem;

    @media screen and (max-width: 80rem) {
      flex-direction: column;
      align-items: center;
      #recommended {
        display: none;
      }
    }

    // 热门小说
    #hot {
      width: 70%;
      #hot-title {
        @include title-level-2;
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

    // 强力推荐
    #recommended {
      width: 30%;
      margin-left: 5rem;
      // background-color: royalblue;

      #recommended-title {
        @include title-level-2;
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
    margin-top: 2rem;
    padding: 2rem;
    background-color: white;
    font-size: 2rem;
    display: flex;
    border-radius: 0.6rem;
  }
}
</style>