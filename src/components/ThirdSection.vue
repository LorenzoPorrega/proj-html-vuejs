<script>
export default {

}
</script>

<template>
  <section class="container d-flex align-items-center flex-column">
    <div class="row reviews-container d-flex flex-column text-center">
      <div class="col-12">
        <img class="quote-marks" src="../assets/imgs/quote-left.svg" alt="Quote Marks">
      </div>
      <div class="col-12">
        <div class="position-relative quote">
          <p>“Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweets muffine pudding tart bear claw sugar plum croissant.”. We started as a small legal consultancy. We have proved our competence and had many satisfied clients.</p>
          <img class="position-absolute transparent-quotes" src="../assets/imgs/testi-icon.png" alt="Quote Marks">
        </div>
      </div>
      <div class="col-12">
        <div class="author">
          <h2>Parvin Khan
            <span>Co-Officer</span>
          </h2>
        </div>
      </div>
    </div>
    <div class="row offers-container g-2 w-100 d-flex justify-content-center">
      <div class="col-12 col-lg-5">
        <div class="offer n-1 h-100">
          <h3>Fresh garden tomato combo offer.. $37</h3>
          <a class="text-decoration-none" href="#0">SHOP NOW</a>
        </div>
      </div>
      <div class="col-12 col-lg-5">
        <div class="offer n-2 h-100">
          <h3>Some ogranic healty fruits combo offer... $49 </h3>
          <a class="text-decoration-none" href="#0">SHOP NOW</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../scss/partials/variables";
@import "../scss/partials/mixins";

.container{
  padding: 85px 0px 130px 0px;
  .reviews-container{
    width: 70%;
    padding-bottom: 58px;
    .quote-marks{
      width: 70px;
      height: 70px;
      filter: $filter-palette-green;
      }
    .quote{
      padding-top: 15px;
      p{
        color: #091249;
        font-size: 24px;
        font-weight: 500;
      }
      .transparent-quotes{
        right: 0;
        top: -25%;
      }
    }
    .author{
      h2{
        line-height: 1.2;
        font-weight: 700;
        transition: .5s;
        font-size: 24px;
        margin-bottom: 5px;
        span{
          margin-top: 5px;
          font-size: 18px;
          font-weight: 600;
          display: block;
          color: $palette-orange;
        }
      }
    }
  }
  .offers-container{
    min-height: 263px;
    .offer{
      background-repeat: no-repeat;
      padding: 20px 20px 20px 40px;
      h3{
        padding: 0px 160px 0px 0px;
        color: #FFFFFF;
        font-size: 36px;
        transition: .5s;
        margin-bottom: 8px;
        line-height: 1.2;
        font-weight: 700;
      }
      a{
        text-align: left;
        color: #FFFFFF;
        font-size: 18px;
        font-weight: 700;
        border-style: none;
        padding: 80px 0px 0px 0px;
        display: inline-block;
        transition: 0.5s;
        &:hover{
          color: $palette-orange;
        }
      }
    }
    .n-1{
      background-image: url("../assets/imgs/offer-img01.jpg");
    }
    .n-2{
      background-image: url("../assets/imgs/offer-img02.jpg");
    
    }
  }
}
</style>