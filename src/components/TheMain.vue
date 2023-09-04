<script>
import { store } from '../store.js';
import TheJumbotron from "./TheJumbotron.vue";
import FirstSection from "./FirstSection.vue";
import SecondSection from "./SecondSection.vue";
import ThirdSection from "./ThirdSection.vue";
import FourthSection from "./FourthSection.vue";
import FifthSection from "./FifthSection.vue";


export default {
  components: {
    TheJumbotron,
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    FifthSection,
  },
  data (){
    return {
      store,
    }
  },
  methods: {

  },
  mounted(){

  },
};
</script>

<template>
  <TheJumbotron></TheJumbotron>
  <FirstSection></FirstSection>
  <SecondSection></SecondSection>
  <ThirdSection></ThirdSection>
  <FourthSection></FourthSection>
  <FifthSection></FifthSection>
</template>

<style lang="scss" scoped>
@import "../scss/partials/variables";
@import "../scss/partials/mixins";
</style>
