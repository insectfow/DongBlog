<template>
  <div>
    <!-- pages/index.vue 파일에서 해당 영역 코드 이동 -->
    <section class="intro"></section>
    <!-- 내비게이션 컴포넌트 -->
    <header-nav :navLinks="navLinks" @onNavMenuToggle="toggleMenu" />
    <header-nav-menu
      :navLinks="navLinks"
      :display="displayMenu"
      @onClose="closeMenu"
    />
    <nuxt />
  </div>
</template>

<script>
import HeaderNav from "@/components/Navigation/HeaderNav";
import HeaderNavMenu from "@/components/Navigation/HeaderNavMenu";
export default {
  components: {
    HeaderNav,
    HeaderNavMenu
  },
  data() {
    return {
      // 모바일 메뉴 화면 표시 상태
      displayMenu: false,
      // 메뉴 아이템
      navLinks: [
        {
          route: "/posts",
          text: "블로그"
        },
        {
          route: "/about",
          text: "서비스 소개"
        },
        {
          route: "/admin",
          text: "관리자"
        }
      ]
    };
  },
  // 컴포넌트의 커스텀 이벤트 수신 시, 처리 메서드 정의
  methods: {
    // 메뉴 토글
    toggleMenu() {
      this.displayMenu = !this.displayMenu;
    },
    // 메뉴 닫기
    closeMenu() {
      this.displayMenu = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.intro {
  position: relative;
  height: 200px;
  margin-bottom: 20px;
  padding: 30px;
  background: url(../assets/image/main_header_bg.jpg) no-repeat center;
  background-size: cover;
  h1 {
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
    font-size: 1.5rem;
    color: #fff;
    background-color: rgba(#fff, 0.26);
    border-radius: 4px;
    padding: 10px;
  }
}
</style>
