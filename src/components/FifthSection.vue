<script>
export default {

}
</script>

<template>
  <section class="container">
    
    <div class="row w-100">
      <div class="col-12">
        <div class="position-relative title d-flex flex-column align-items-center justify-content-end">
          <h2>Running week top selling</h2>
          <h3 class="mb-0">TOP <span>TRENDING</span> ORGANIC FOOD</h3>
          <div class="position-absolute title-bg">
            <img src="../assets/imgs/title-shap.png" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="row w-100 cards-container g-4 d-flex justify-content-center">

      <div class="col-12 col-lg-3">
        <div class="product-card">
          <div class="img-container">
            <img src="../assets/imgs/s5.jpg" alt="">
          </div>
          <div class="content-container w-100">
            <a href="#0" class="text-decoration-none">
              <h3>Fresh Apple</h3>
            </a>
            <span class="d-block">$18</span>
          </div>
        </div>
      </div>
      
      <div class="col-12 col-lg-3">
        <div class="product-card">
          <div class="img-container">
            <img src="../assets/imgs/s2.jpg" alt="">
          </div>
          <div class="content-container w-100">
            <a href="#0" class="text-decoration-none">
              <h3>Fresh Apple</h3>
            </a>
            <span class="d-block">$18</span>
          </div>
        </div>
      </div>
      
      <div class="col-12 col-lg-3">
        <div class="product-card">
          <div class="img-container">
            <img src="../assets/imgs/s8.jpg" alt="">
          </div>
          <div class="content-container w-100">
            <a href="#0" class="text-decoration-none">
              <h3>Fresh Apple</h3>
            </a>
            <span class="d-block">$18</span>
          </div>
        </div>
      </div>
      
      <div class="col-12 col-lg-3">
        <div class="product-card">
          <div class="img-container">
            <img src="../assets/imgs/s1.jpg" alt="">
          </div>
          <div class="content-container w-100">
            <a href="#0" class="text-decoration-none">
              <h3>Fresh Apple</h3>
            </a>
            <span class="d-block">$18</span>
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<style lang="scss" scoped>
@import "../scss/partials/variables";
@import "../scss/partials/mixins";

section{
  padding: 70px 0px 80px 0px;
  .title{
    height: 135px;
    h2{
      line-height: 1.2;
      font-weight: 600;
      font-size: 24px;
      color: $palette-orange;
    }
    h3{
      font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    color: $palette-green;
      span{
        color: $palette-orange;
      }
    }
    .title-bg{
      bottom: 10px;
    }
  }
  .cards-container{
    padding-top: 30px;
    div[class*="col"]{
      width: fit-content;
    }
    .product-card{
      width: 257.5px;
      box-shadow: 0 0 10px 0 rgba(148,146,245,.2);
      .img-container{
        width: 257.5px;
        aspect-ratio: 1/1;
        &:hover{
          cursor: pointer;
        }
        img{
          width: 257.5px;
          height: 257.5px;
        }
      }
      .content-container{
        padding: 20px 20px 18px;
        text-align: center;
        a{
          color: $palette-black;
          h3{
          margin-bottom: 10px;
          line-height: 1.2;
          font-weight: 700;
          transition: .5s;
          font-size: 24px;
            &:hover{
              color: $palette-orange;
            }
          }
          span{
            font-weight: 400;
            font-size: 16px;
            line-height: 1.6;
          }
        }
        
      }
    }
  }
}

</style>