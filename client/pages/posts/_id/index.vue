<template>
  <div class="page-single-post">
    <section class="post">
      <h1 class="post-title">포스트 제목</h1>
      <div class="post-info">
        <span class="post-data">작성일자</span>
        <span class="post-author">작성자</span>
      </div>
      <div class="post-content"></div>
    </section>
    <section class="post-feedback">
      <p>
        | 해당 포스트에 대해 궁금한 점이 있으면
        <a href="mailto:ehdgus441@naver.com">ehdgus441@naver.com</a>
        | 로 문의주세요.
      </p>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.page-single-post {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
  .post {
    width: 100%;
    .post-title {
      margin: 0;
    }
    .post-info {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      box-sizing: inherit;
      border-bottom: 1px solid #ccc;
      padding: 10px;
      .post-data,
      .post-author {
        margin: 0 10px;
        color: #9a9a9a;
      }
    }
  }
  .post-feedback {
    a {
      color: #46b784;
      text-decoration: none;
      transition: color 0.4s ease;
    }
    &:hover,
    &:active {
      color: darken(#46b784, 20%);
    }
  }
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
    .post-info {
      flex-direction: row;
    }
  }
}
</style>