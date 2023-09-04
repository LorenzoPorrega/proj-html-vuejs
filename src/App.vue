<script>
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheMain,
    TheFooter,
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    },
  },
}
</script>

<template>
  <button type="button" class="btn btn-danger btn-floating btn-md border-0 d-flex justify-content-center align-items-center" id="btn-back-to-top"
  @click="scrollToTop">
    <i class="fas fa-chevron-up"></i>
  </button>
  <TheHeader></TheHeader>
  <TheMain></TheMain>
  <TheFooter></TheFooter>
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
