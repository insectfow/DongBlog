<template>
  <header class="page-header">
    <h1 class="page-brand">
      <nuxt-link to="/">dong blog</nuxt-link>
    </h1>
    <div class="spacer"></div>
    <!-- 모바일 내비게이션 토글 버튼 -->
    <button
      class="button nav-side-toggle"
      type="button"
      aria-label="메뉴 토글 버튼"
      @click="$emit('onNavMenuToggle')"
    >
      <span class="bar" v-for="bar in bars" :key="bar"></span>
    </button>
    <!-- 페이지 내비게이션 -->
    <nav class="page-nav">
      <ul class="page-nav-list">
        <li
          class="page-nav-item"
          v-for="(link, index) in navLinks"
          :key="index"
        >
          <nuxt-link :to="link.route">{{ link.text }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    navLinks: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      bars: [1, 2, 3]
    };
  }
};
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 100;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 87vw;
  height: 60px;
  border-radius: 3px;
  border: 1px solid rgba(#fff, 0.1);
  padding: 0 10px;
  background-color: rgba(#fff, 0.2);
  backdrop-filter: blur(4px);
  .page-brand {
    margin: 0 10px;
    font-size: 1.7em;
    font-family: Changa, Sans-Serif;
    > a {
      text-decoration: none;
      letter-spacing: 0.23em;
      color: #fff;
      text-transform: uppercase;
    }
  }
  .spacer {
    flex: 1;
  }
  .button.nav-side-toggle {
    cursor: pointer;
    order: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 8px 12px;
    height: 80%;
    border: 1px solid rgba(#fff, 0.3);
    transition: all 0.4s ease;
    background: none;
    .bar {
      display: inline-block;
      width: 24px;
      height: 3px;
      background-color: rgba(#fff, 0.6);
      transition: all 0.4s ease;
    }
    &:hover,
    &:focus {
      border-color: #fff;
      .bar {
        background-color: #fff;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .page-header {
    .button.nav-side-toggle {
      display: none;
    }
    // 페이지 내비게이션
    .page-nav {
      display: block;
      .page-nav-list {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        .page-nav-item {
          margin: 0 10px;
          > a {
            text-decoration: none;
            color: #fff;
            border-bottom: 2px solid transparent;
            transition: all 0.4s ease;
            &:hover,
            &:active,
            &.nuxt-link-active {
              border-bottom-color: #fff;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .page-header {
    .page-nav {
      display: none;
    }
  }
}
</style>
