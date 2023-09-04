<script>
export default {

}
</script>

<template>
  <section class="shop-container">
    <div class="text-white d-flex flex-column justify-content-center align-items-center">
      <h2>Trending Online Store</h2>
      <h3>GOGRIN ALL <span>ORGANIC</span> FOOD</h3>
      <ul class="list-unstyled products-list">
        <li><a href="">All Product</a></li>
        <li><a href="">Apple</a></li>
        <li><a href="">Food</a></li>
        <li><a href="">Orange</a></li>
        <li><a href="">Vegetable</a></li>
      </ul>
      <div class="cards-container row g-">

        <div class="col-12 col-xl-3 col-lg-4 col-md-6">
          <div class="product-card w-100 overflow-hidden position-relative">
            <div class="sale-badge position-absolute">
              <span>SALE!</span>
            </div>
            <a href="#0" class="w-100">
              <img class="w-100" src="../assets/imgs/s5.jpg" alt="Fresh Apple">
            </a>
            <div class="cart-icons"></div>
          </div>
          <div class="card-content pb-5">
            <a href="#0" class="text-decoration-none"><h2>Fresh Apple</h2></a>
            <span>$18</span>
          </div>
        </div>

        <div class="col-12 col-xl-3 col-lg-4 col-md-6">
          <div class="product-card w-100 overflow-hidden position-relative">
            <div class="sale-badge position-absolute">
              <span>SALE!</span>
            </div>
            <a href="#0" class="w-100">
              <img class="w-100" src="../assets/imgs/s2.jpg" alt="Fresh Cobies">
            </a>
            <div class="cart-icons"></div>
          </div>
          <div class="card-content pb-5">
            <a href="#0" class="text-decoration-none"><h2>Fresh Cobbies</h2></a>
            <span><span>$18</span>$17</span>
          </div>
        </div>

        <div class="col-12 col-xl-3 col-lg-4 col-md-6">
          <div class="product-card w-100 overflow-hidden position-relative">
            <div class="sale-badge position-absolute">
              <span>SALE!</span>
            </div>
            <a href="#0" class="w-100">
              <img class="w-100" src="../assets/imgs/s8.jpg" alt="Fresh Watermelon">
            </a>
            <div class="cart-icons"></div>
          </div>
          <div class="card-content pb-5">
            <a href="#0" class="text-decoration-none"><h2>Fresh Watermelon</h2></a>
            <span>$15</span>
          </div>
        </div>

        <div class="col-12 col-xl-3 col-lg-4 col-md-6">
          <div class="product-card w-100 overflow-hidden position-relative">
            <div class="sale-badge position-absolute">
              <span>SALE!</span>
            </div>
            <a href="#0" class="w-100">
              <img class="w-100" src="../assets/imgs/s1.jpg" alt="Organic Juice">
            </a>
            <div class="cart-icons"></div>
          </div>
          <div class="card-content pb-5">
            <a href="#0" class="text-decoration-none"><h2>Organic Juice</h2></a>
            <span><span>$20</span>$15</span>
          </div>
        </div>

        <div class="col-12 col-xl-3 col-lg-4 col-md-6">
          <div class="product-card w-100 overflow-hidden position-relative">
            <div class="sale-badge position-absolute">
              <span>SALE!</span>
            </div>
            <a href="#0" class="w-100">
              <img class="w-100" src="../assets/imgs/s4.jpg" alt="Fresh Blueberries">
            </a>
            <div class="cart-icons"></div>
          </div>
          <div class="card-content pb-5">
            <a href="#0" class="text-decoration-none"><h2>Fresh Blueberries</h2></a>
            <span><span>$19</span>$14</span>
          </div>
        </div>

        <div class="col-12 col-xl-3 col-lg-4 col-md-6">
          <div class="product-card w-100 overflow-hidden position-relative">
            <div class="sale-badge position-absolute">
              <span>SALE!</span>
            </div>
            <a href="#0" class="w-100">
              <img class="w-100" src="../assets/imgs/s2.jpg" alt="Organic Lettuce">
            </a>
            <div class="cart-icons"></div>
          </div>
          <div class="card-content pb-5">
            <a href="#0" class="text-decoration-none"><h2>Organic Lettuce</h2></a>
            <span>$23</span>
          </div>
        </div>

        <div class="col-12 col-xl-3 col-lg-4 col-md-6">
          <div class="product-card w-100 overflow-hidden position-relative">
            <div class="sale-badge position-absolute">
              <span>SALE!</span>
            </div>
            <a href="#0" class="w-100">
              <img class="w-100" src="../assets/imgs/s9.jpg" alt="Red Carrot">
            </a>
            <div class="cart-icons"></div>
          </div>
          <div class="card-content pb-5">
            <a href="#0" class="text-decoration-none"><h2>Red Carrot</h2></a>
            <span><span>$29</span>$26</span>
          </div>
        </div>

        <div class="col-12 col-xl-3 col-lg-4 col-md-6">
          <div class="product-card w-100 overflow-hidden position-relative">
            <div class="sale-badge position-absolute">
              <span>SALE!</span>
            </div>
            <a href="#0" class="w-100">
              <img class="w-100" src="../assets/imgs/s7.jpg" alt="Fresh Pomegranate">
            </a>
            <div class="cart-icons"></div>
          </div>
          <div class="card-content pb-5">
            <a href="#0" class="text-decoration-none"><h2>Fresh Pomegranate</h2></a>
            <span>$21</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <button>ALL PRODUCTS</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../scss/partials/variables";
@import "../scss/partials/mixins";

.shop-container{
  background-image: url("../assets/imgs/shop-bg-img.jpg");
  background-size: cover;
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  padding: 110px 0;
  h2{
    color: $palette-orange;
    font-size: 24px;
    font-weight: 600;
    margin: 0;
    line-height: 1.2;
  }
  h3{
    font-size: 48px;
    font-weight: 700;
    margin: 0;
    padding-bottom: 25px;
    line-height: 1.2;
    span{
      color: $palette-orange;
    }
  }
  .products-list {
    margin-bottom: 1rem;
    li{
      display: inline-block;
      margin: 0 5px 10px;
      padding: 10px 20px;
      font-size: 18px;
      font-weight: 500;
    }
    a{
      text-decoration: none;
      color: white;
      &:hover{
        color: $palette-orange;
      }
    }
  }
  .cards-container{
    width: 58.5%;
    div{ //col
      display: flex;
      flex-direction: column;
      justify-content: center;
      .product-card{
        .sale-badge{
          width: 60px;
          height: 30px;
          background-color: $palette-orange;
          top: 15px;
          right: 15px;
          border-radius: 2px;
          span{
            color: white;
            font-weight: 700;
            text-align: center;
          }
        }
      }
      .card-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 20px 18px;
        a{
          text-decoration: none;
          h2{
            font-weight: 700;
            font-size: 24px;
            color: white;
            margin-bottom: 10px;
          }
        }
        span{
          color: $palette-orange;
          font-size: 1rem;
          font-weight: 700;
          span{
            color: rgba(239, 156, 3, 0.568);
            margin-right: 3px;
          }
        }
      }
    }
  }
  button{
    @include generic-button;
  }
}
</style>