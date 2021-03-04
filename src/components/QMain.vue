<template>
  <div id="article-wrap">
    <div id="article-top">
      <article id="article"></article>
      <aside id="aside"></aside>
    </div>
    <div id="aritcle-bottom">{{ homeData }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'QMain',
  // 在组件创建之前拉取数据
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
  #article-top {
    #article {
    }
    #aside {
    }
  }
  #article-bottom {
  }
}
</style>