<script>
import { store } from "../store";
import TheJumbotron from "./TheJumbotron.vue";
import FirstSection from "./FirstSection.vue";

export default {
  components: {
    TheJumbotron,
    FirstSection,
  },
  data() {
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
</template>

<style lang="scss" scoped>
@import "../scss/partials/variables";
@import "../scss/partials/mixins";
</style>
