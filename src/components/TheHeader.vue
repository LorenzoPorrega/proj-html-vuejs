<script>
import { store } from "../store";

export default {
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
  <nav class="navbar navbar-expand-lg fixed-top bg-white">
    <div class="container-fluid">
      <div class="row w-100 h-100">
        <div class="col-4 col-md-2 col-lg-2 col-xl-2">
          <a class="navbar-brand" href="#">
            <img src="../assets/imgs/logo.png" alt="Gogrin-logo">
          </a>
        </div>
        <div class="col-8 col-md-10 col-lg-10 col-xl-10 d-flex align-items-center">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Home
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Service</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Portfolio
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blog
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <div class="search-bar me-3 d-flex justify-content-center align-items-center">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="shopping-cart position-relative me-4">
              <i class="fa-solid fa-cart-shopping"></i>
              <div class="items-in-cart position-absolute d-flex justify-content-center align-items-center">
                <span>0</span>
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
nav{
  height: 95px;
  li{
    margin: 0 4px;
    a{
      color: $palette-black;
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
}

</style>
