<script>
export default {
}
</script>

<template>
  <div class="jumbo-img-container d-flex justify-content-center align-items-center">
    <button class="left-button">ABOUT US</button>
    <button class="right-button">OUR HISTORY</button>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/partials/variables";
@import "../scss/partials/mixins";

  .jumbo-img-container{
    width: 100%;
    height: 950px;
    background-image: url("../assets/imgs/H3-slider3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    img{
      width: 100%;
    }
    
    .left-button{
      @include generic-button;
      width: 53.983px
      height 25.6px;
    }
    .right-button{
      @include generic-button;
      width: 71.283;
      height: 25.6;
      background-color: $palette-green;
      &:hover{
        background-color: $palette-orange;
      }
    }
  }
</style>
