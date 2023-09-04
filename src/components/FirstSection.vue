<script>
export default {

}
</script>

<template>
  <section class="container">
    <div class="row w-100 d-flex justify-content-center">
      <div class="col-sm-12 col-md-6">
        <h3 class="left-paragram"><span>Look what</span> consumer power has done with <span>organic food;</span> we can do the same with clothes.</h3>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="right-paragram d-flex flex-column align-items-between h-100">
          <p>I have a need to make these sorts of connections literal sometimes, and a vehicle often helps to do that. I have a relationship to hosting culture.
            <span>It isn't really about it helps to do that. I have a relationship to hosting culture.</span>
          </p>
          <p class="mt-4">Need to make these sorts of connections literal sometimes, and a vehicle often helps to do that. I have a relationship to hosting culture.</p>
        </div>
      </div>
    </div>
    <div class="row g-2 carousel p-3">
      <div class="col-3">
        <div class="img-container">
          <img src="../assets/imgs/fe1.jpg" alt="Fresh Juice">
          <div class="shadow"></div>
        </div>
      </div>
      <div class="col-3">
        <div class="img-container">
          <img src="../assets/imgs/fe2.jpg" alt="Fresh Fruits">
          <div class="shadow"></div>
        </div>
      </div>
      <div class="col-3">
        <div class="img-container">
          <img src="../assets/imgs/fe3.jpg" alt="Dairy Items">
          <div class="shadow"></div>
        </div>
      </div>
      <div class="col-3">
        <div class="img-container">
          <img src="../assets/imgs/fe1.jpg" alt="">
          <div class="shadow"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../scss/partials/variables";
@import "../scss/partials/mixins";

.container{
  padding-top: 105px;
  padding-bottom: 120px;
  .left-paragram{
  font-size: 48px;
  font-weight: 700;
  padding-top: 10px;
  color: $palette-green;
  }

  .right-paragram{
    padding-top: 30px;
    font-size: 16.5px;
    color: rgb(84, 84, 84);
  }

  span{
    color: $palette-orange;
  }

  .img-container{
    overflow: hidden;
    max-width: 270px;
    max-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
      animation: dezooming 0.5s ease;
      z-index: 2;
    }

    img:hover{
      animation: zooming 0.5s ease;
      animation-fill-mode: forwards;
    }

    .shadow{
      width: 1px;
      height: 1px;
      animation: shadowdezoom 0.5s ease;
      z-index: 3;
      background-color: rgba(0, 0, 0, 0.479);
      display: none;
    }

    &:hover .shadow{
      animation: shadowzoom 0.5s ease;
      display: block;
      animation-fill-mode: forwards;
    }
  }
}

/* CSS animations */

@keyframes zooming {
  from{
    transform: scale(100%);
  }
  to{
    transform: scale(120%);
  }
}

@keyframes dezooming {
  from{
    transform: scale(120%);
  }
  to{
    transform: scale(100%);
  }
}

@keyframes shadowzoom {
  from{
    transform: scale(100%);
  }
  to{
    transform: scale(500%);
  }
}

@keyframes shadowdezoom {
  from{
    transform: scale(500%);
  }
  to{
    transform: scale(100%);
  }
}
</style>