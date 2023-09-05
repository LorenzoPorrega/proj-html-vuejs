<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    }
  },
  methods: {
    onHover(i){
      document.getElementsByClassName('dropdown-menu')[i].classList.add("show");
    },
    onLeave(i){
      document.getElementsByClassName('dropdown-menu')[i].classList.remove("show");
    },
  },
  mounted(){

  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top bg-white"
  :class="store.navBarClass">
    <div class="container-fluid">
      <div class="row w-100 h-100">
        <div class="col-4 col-md-2 col-lg-2 col-xl-2 d-flex align-items-center">
          <a class="navbar-brand" href="#0">
            <img src="../assets/imgs/logo.png" alt="Gogrin-logo">
          </a>
        </div>
        <div class="col-8 col-md-10 col-lg-10 col-xl-10 d-flex align-items-center">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase"
            :class="store.navBarTextColor">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#0" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                v-on:mouseover="onHover(0)"
                v-on:mouseout="onLeave(0)">
                  Home
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#0">HOME-1</a></li>
                  <li><a class="dropdown-item" href="#0">HOME-2</a></li>
                  <li><a class="dropdown-item" href="#0">HOME-3</a></li>
                  <li><a class="dropdown-item" href="#0">HOME-3</a></li>
                  <li><a class="dropdown-item" href="#0">HOME-LANDING</a></li>
                  <li><a class="dropdown-item" href="#0">HOME-VIDEO</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#0" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                v-on:mouseover="onHover(1)"
                v-on:mouseout="onLeave(1)">
                  About
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#0">ABOUT</a></li>
                  <li><a class="dropdown-item" href="#0">TEAM</a></li>
                  <li><a class="dropdown-item" href="#0">PRICING TABLE</a></li>
                  <li><a class="dropdown-item" href="#0">FAQ PAGE</a></li>
                  <li><a class="dropdown-item" href="#0">TESTIMONIAL</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#0">Service</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#0" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                v-on:mouseover="onHover(2)"
                v-on:mouseout="onLeave(2)">
                  Portfolio
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#0">PORTFOLIO-2COLUMN</a></li>
                  <li><a class="dropdown-item" href="#0">PORTFOLIO-3COLUMN</a></li>
                  <li><a class="dropdown-item" href="#0">PORTFOLIO-4COLUMN</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#0" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                v-on:mouseover="onHover(3)"
                v-on:mouseout="onLeave(3)">
                  Shop
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#0">SHOP</a></li>
                  <li><a class="dropdown-item" href="#0">MY ACCOUNT</a></li>
                  <li><a class="dropdown-item" href="#0">CART</a></li>
                  <li><a class="dropdown-item" href="#0">CHECKOUT</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#0" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                v-on:mouseover="onHover(4)"
                v-on:mouseout="onLeave(4)">
                  Blog
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#0">BLOG LEFT SIDEBAR</a></li>
                  <li><a class="dropdown-item" href="#0">BLOG RIGHT SIDEBAR</a></li>
                  <li><a class="dropdown-item" href="#0">BLOG RIGHT 2COLUMN</a></li>
                  <li><a class="dropdown-item" href="#0">BLOG LEFT 2COLUMN</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#0">Contact</a>
              </li>
            </ul>
            <div class="search-bar me-3 d-flex justify-content-center align-items-center">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="shopping-cart  me-4">
              <div class="shopping-cart-circle d-flex justify-content-center align-items-center">
                <a class="position-relative" href="#0" title="View your shopping cart">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <div class="items-in-cart position-absolute d-flex justify-content-center align-items-center">
                    <span>0</span>
                  </div>
                </a>
              </div>
            </div>
            <button class="order-button">
              <a href="#0" class="text-decoration-none">ORDER NOW</a>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "../scss/partials/variables";
@import "../scss/partials/mixins";

/*CSS rules to specify families:
font-family: 'Barlow Condensed', sans-serif;
font-family: 'Roboto', sans-serif;*/

*{
  font-weight: 500;
}
.contact-bar{
  height: 25.5px;
  background-color: $palette-green;
}
.background-transparent{
  background-color: rgba(0,0,0,0.7) !important;
}
nav{
  height: 95px;
  padding-left: $bs-navbar-padding-x;
  padding-right: $bs-navbar-padding-x;
  .navbar-collapse{
    height: 95px;
    .navbar-nav {
      height: 95px;
      .nav-link{
        height: 95px;
        display: flex;
        align-items: center;
      }
    }
  }
  .dropdown-menu{
    border-radius: $bs-border-radius;
    transition: 0.5s;
  }
  .text-scroll-color{
    .nav-link{
      color: white !important;
    }
    a:hover{
      color: $palette-orange !important;
    }
  }
  li{
    margin: 0 4px;
    a{
      color: black;
      &:hover{
        color: $palette-orange;
      }
    }
  }
  .order-button{
    @include generic-button;
    width: 120px;
    padding: 11px 25px;
    a{
      color: white;
    }
  }
  .shopping-cart{
    .shopping-cart-circle{
      background-color: white;
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
    i{
      font-size: 1.5rem;
      color: $palette-green;
    }
    .items-in-cart{
      top: -50%;
      right: -50%;
      background-color: $palette-orange;
      border-radius: 50%;
      color: white;
      width: 20px;
      height: 20px;
    }
  }
  .search-bar{
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: $palette-orange;
    i{
      font-size: 1rem;
      color: white;
    }
  }
  .search-bar:hover, .shopping-cart:hover, .order-button:hover{
    cursor: pointer;
  }
}

</style>
