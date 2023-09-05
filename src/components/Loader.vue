<script>
export default {

}
</script>

<template>
  <div class="loader-container d-flex flex-column justify-content-center align-items-center">
    <div>
      <div class="row">
        <div class="lds-dual-ring"></div>
      </div>
    </div>
    <div class="row">
      <div class="position-relative">
        <span class="title">GOGRIN</span>
        <span class="position-absolute title-animated">GOGRIN</span>
      </div>
    </div>
    <div class="row">
      <span>Please Wait For Loading</span>
    </div>
    <div class="row">
      <span class="cross">&#10005</span>
    </div>
    <div class="row">
      <h2>Preloadder Loading Cancel</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/partials/variables";
@import "../scss/partials/mixins";
.loader-container{
  height: 100vh;
  width: 100vw;
  z-index: 2147483647;
  background-color: white;
  .lds-dual-ring {
    display: inline-block;
    margin: 0 auto 1.5em;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 8em;
    height: 8em;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid $palette-orange;
    border-color: $palette-orange transparent $palette-orange transparent;
    animation: lds-dual-ring 1s linear infinite;
  }
  .title{
    font-weight: 700;
    font-size: 4em;
    letter-spacing: 12.5px;
    color: rgba(0, 0, 0, 0.136);
  }
  .title-animated{
    font-weight: 700;
    font-size: 4em;
    letter-spacing: 12.5px;
    color: $palette-orange;
    left: 12px;
    animation: animated-text infinite 3500ms;
  }
  .cross{
    color: $palette-orange;
    margin-top: 7px;
    cursor: pointer;
    display: block;
    font-size: 16px;
    font-weight: 900;
  }
  h2{
    color: $palette-orange;
    margin-top: 7px;
    cursor: pointer;
    display: block;
    font-size: 16px;
    line-height: 1.2;
    font-weight: 700;
    transition: .5s;
    font-size: 16px;
    margin-bottom: 5px;
  }
}

@keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

@keyframes animated-text {
  0% {
    clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
    opacity: 0;
  }
  50% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    opacity: 1;
  }
  100% {
    clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
    opacity: 0;
  }
}
</style>