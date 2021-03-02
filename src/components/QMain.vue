<template>
  <div id="article-wrap">
    <div id="article-top">
      <article id="article"></article>
      <aside id="aside"></aside>
    </div>
    <div id="aritcle-bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'QMain',
  created () {
    this.$http.get('/api/getHome').then(response => {
      console.log(response.data)
    })
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