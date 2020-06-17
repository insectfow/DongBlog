<template>
  <div class="page-home">
    <section class="featured-post">
      <post-preview
        id="1"
        title="빅 데이터"
        thumbnail="https://images.unsplash.com/photo-1592312040834-bb0d621713e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        content="빅 데이터란? 기존 데이터베이스 관리도구의 능력을 넘어서는 대량의 정형 또는 비정형 데이터 집합을 포함한 데이터로부터 가치를 추출하고 결과를 분석하는 기술이다."
      />
      <post-preview
        id="2"
        title="빅 데이터"
        thumbnail="https://images.unsplash.com/photo-1592312040834-bb0d621713e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        content="빅 데이터란? 기존 데이터베이스 관리도구의 능력을 넘어서는 대량의 정형 또는 비정형 데이터 집합을 포함한 데이터로부터 가치를 추출하고 결과를 분석하는 기술이다."
      />
    </section>
  </div>
</template>

<script>
import PostPreview from "~/components/Posts/PostPreview";
export default {
  components: {
    PostPreview
  }
};
</script>

<style lang="scss" scoped>
.featured-post {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
}
@media screen and (min-width: 768px) {
  .intro {
    h1 {
      font-size: 2rem;
    }
  }
}
</style>
