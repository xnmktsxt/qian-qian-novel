<template>
  <div id="category-wrap">
    <div
      id="category"
      v-for="recommendation in recommendedBooksByCategory"
      :key="recommendation.index"
    >
      <h3 id="category-title">
        {{ recommendation.recommendedTitle }}
      </h3>
      <div id="category-book-list">
        <div
          class="category-book"
          v-for="book in recommendation.content"
          :key="book.index"
        >
          <a href="#" class="title">{{ book.title }}</a>
          <a href="#" class="author">{{ book.author }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CategoryBook',
  data () {
    return {
      // testData: this.$store.state.homeDate
    }
  },
  created () {
    this.$store.dispatch('getHomeData')
  },
  mounted () {
  },
  computed: {
    ...mapState(['homeData']),

    // 过滤掉数组第一个元素（强力推荐）
    recommendedBooksByCategory () {
      return this.homeData.recommended.filter((data, index) => index !== 0)
    }
  }
}
</script>

<style lang="scss" scope>
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

#category-wrap {
  display: flex;
  flex-flow: row wrap;
  #category {
    padding: 1rem;
    flex: 1 1 30%;
    // display: flex;
    #category-title {
      @include hot-recommeded-title;
    }
    #category-book-list {
      font-weight: 400;
      font-size: 1.4rem;
      text-align: left;
      .category-book {
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
</style>