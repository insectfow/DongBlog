<template>
  <article class="post-preview">
    <nuxt-link :to="'/posts/' + id">
      <figure
        class="post-thumbnail"
        :style="{ 'background-image': 'url(' + thumbnail + ')' }"
      ></figure>
      <div class="post-content">
        <h2 class="post-title">{{ title }}</h2>
        <p class="post-text">{{ ellipseContent }}</p>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    thumbnail: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true }
  },
  computed: {
    ellipseContent() {
      const ellipseText =
        this.content.length < 65
          ? this.content
          : this.content.slice(0, 60) + "...";
      return ellipseText;
    }
  }
};
</script>

<style lang="scss" scoped>
.post-preview {
  border: 1px solid rgba(#aaa, 0.45);
  box-shadow: 0 2px 2px rgba(#aaa, 0.45);
  background-color: #fff;
  flex: 1 0 90%;
  margin: 0 5px;
  margin-bottom: 15px;
  a {
    text-decoration: none;
    color: darken(#5db4f3, 20%);
    transition: all 0.4s ease;
    .post-thumbnail {
      width: 100%;
      height: 150px;
      margin: 0;
      background-position: center;
      background-size: cover;
    }
    .post-content {
      padding: 10px;
      text-align: center;
      .post-title {
        margin-bottom: 0;
      }
      .post-text {
        margin-top: 0;
      }
    }
  }
  &:hover .post-content,
  &:active .post-content {
    background-color: rgba(#5db4f3, 0.26);
  }
}
@media screen and (min-width: 768px) {
  .featured-post {
    .post-preview {
      flex: 0 0 45%;
      margin: 0 10px;
    }
  }
}
</style>
