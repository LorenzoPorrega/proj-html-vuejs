<script>
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import TheFooter from './components/TheFooter.vue';
import Loader from './components/Loader.vue';
import { store , onPageLoad } from './store';

export default {
  components: {
    TheHeader,
    TheMain,
    TheFooter,
    Loader,
  },
  data() {
    return {
      store,
      windowTop: 0,
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    },
    onScroll(e){
      this.windowTop = e.target.documentElement.scrollTop;
      console.log(this.windowTop)

      if(this.windowTop > 95){
        store.navBarClass = "background-transparent";
        store.navBarTextColor = "text-scroll-color"
      }
      else{
        store.navBarClass = "";
        store.navBarTextColor = "";
      }
    },
  },
  mounted() {
    onPageLoad(),
    window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
}
</script>

<template>
  <Loader v-if="store.pageLoading"/>
  <button type="button" class="btn btn-danger btn-floating btn-md border-0 d-flex justify-content-center align-items-center" id="btn-back-to-top"
  @click="scrollToTop"
  v-if="store.pageLoading === false">
    <i class="fas fa-chevron-up"></i>
  </button>
  <TheHeader v-if="store.pageLoading === false"></TheHeader>
  <TheMain v-if="store.pageLoading === false"></TheMain>
  <TheFooter v-if="store.pageLoading === false"></TheFooter>

</template>

<style lang="scss">
@import "./scss/partials/variables";
@import "./scss/partials/mixins";

  body{
    overflow:scroll;
  }
  #btn-back-to-top {
  position: fixed;
  bottom: 30px;
  right: 100px;
  border-radius: 5px;
  height: 40px;
  width: 40px;
  line-height: 40px;
  background-color: $palette-orange;
  }
</style>
