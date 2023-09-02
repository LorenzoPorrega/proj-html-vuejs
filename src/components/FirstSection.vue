<script>
export default {

}
</script>

<template>
  <div class="container">
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
        </div>
      </div>
      <div class="col-3">
        <div class="img-container">
          <img src="../assets/imgs/fe2.jpg" alt="Fresh Fruits">
        </div>
      </div>
      <div class="col-3">
        <div class="img-container">
          <img src="../assets/imgs/fe3.jpg" alt="Dairy Items">
        </div>
      </div>
      <div class="col-3">
        <div class="img-container">
          <img src="../assets/imgs/fe1.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/partials/variables";
@import "../scss/partials/mixins";

.container{
  padding-top: 105px;
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
    position: relative;
    overflow: hidden;
    max-width: 250px;
    transition: 0.5s ease-in-out;

    img:hover{
      transform: scale(120%);
      transition: 0.5s ease-out;
    }
  }
}
</style>