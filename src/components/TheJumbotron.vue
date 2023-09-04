<script>
export default {
}
</script>

<template>
  <div class="jumbo-img-container d-flex flex-column justify-content-center align-items-center">
    <h3>GOGRIN ORGANIC FOOD STORE</h3>
    <span>Eating naturally & organic is</span>
    <span>always be healthy.</span>
    <div class="button-container">
      <button class="left-button">ABOUT US</button>
      <button class="right-button">OUR HISTORY</button>
    </div>
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
    color: white;
    h3{
      font-weight: 600;
      font-size: 24px;
      margin-bottom: 15px;
      display: inline;
      line-height: 1.2;
      font-weight: 700;
      transition: .5s;
    }
    span{
      font-size: 90px;
      font-weight: 700;
      line-height: 1;
      transition: .5s;
      font-size: 24px;
      margin-bottom: 5px;
    }
    img{
      width: 100%;
    }
    .button-container{
      margin-top: 53px;
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
  }
</style>
