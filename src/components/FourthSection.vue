<script>
export default {

}
</script>

<template>
  <section class="stats-banner">
    <div class="stats-container ">
      <div class="row g-2 w-100">
        <div class="col-2"></div>
        <div class="col-12 col-md-12 col-lg-2">
          <div class="position-relative d-flex flex-column align-items-center">
            <h3>29+</h3>
            <span>Years of Experience</span>
            <img class="position-absolute d-none d-lg-block" src="../assets/imgs/counter-shap1.png" alt="">
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-2">
          <div class="position-relative d-flex flex-column align-items-center">
            <h3>200+</h3>
            <span>Everyday Online Delivery</span>
            <img class="position-absolute d-none d-lg-block" src="../assets/imgs/counter-shap1.png" alt="">
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-2">
          <div class="position-relative d-flex flex-column align-items-center">
            <h3>20K</h3>
            <span>Client Satisfaction</span>
            <img class="position-absolute d-none d-lg-block" src="../assets/imgs/counter-shap1.png" alt="">
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-2">
          <div class="position-relative d-flex flex-column align-items-center">
            <h3>30+</h3>
            <span>Award Winning</span>
          </div>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../scss/partials/variables";
@import "../scss/partials/mixins";

.stats-banner{
  .stats-container{
    background-image: url("../assets/imgs/counter-bg.jpg");
    background-position: center center;
    background-size: cover;
    padding: 60px 0px 75px 0px;
    margin: 0 5vw;
    h3{
      color: $palette-orange;
      font-size: 72px;
      font-weight: 700;
      line-height: 1.2;
      transition: .5s;
    }
    span{
      color: #FFFFFF;
      font-size: 24px;
      line-height: 1.2;
      font-weight: 700;
      transition: .5s;
      font-size: 24px;
      margin-bottom: 5px;
    }
    img{
      right: 0;
      vertical-align: middle;
      transform: rotate(0deg);
      height: auto;
      max-width: 100%;
      border: none;
      border-radius: 0;
      box-shadow: none;
    }
  }
}

</style>