<template>
  <div>
    <div class="svg-box">
      <svg class="circular green-stroke">
        <circle class="path" cx="75" cy="75" r="50" fill="none" stroke-width="5" stroke-miterlimit="10" />
      </svg>
      <svg class="checkmark green-stroke">
        <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-489.57,-205.679)">
          <path class="checkmark__check" fill="none" d="M616.306,283.025L634.087,300.805L673.361,261.53" />
        </g>
      </svg>
    </div>
    <h1>Your smart contract has been successfully deployed!</h1>
    Your can check it on ethscan:
    <h3>
      <a :href="'https://rinkeby.etherscan.io/address/' + this.$store.state.contractAddress" target="_blank">{{ this.$store.state.contractAddress }}</a>
    </h3>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
/* Credits: https://github.com/Kamonlojn/svg-icons-animate */

  .svg-box {
    display: inline-block;
    position: relative;
    width: 150px;
  }

  .green-stroke {
    stroke: #7CB342;
  }

  .circular circle.path {
    stroke-dasharray: 330;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    opacity: 0.4;
    animation: 0.7s draw-circle ease-out;
  }

  .checkmark {
    stroke-width: 6.25;
    stroke-linecap: round;
    position: absolute;
    top: 56px;
    left: 49px;
    width: 52px;
    height: 40px;
  }

  .checkmark path {
    animation: 1s draw-check ease-out;
  }

  @keyframes draw-circle {
    0% {
      stroke-dasharray: 0, 330;
      stroke-dashoffset: 0;
      opacity: 1;
    }

    80% {
      stroke-dasharray: 330, 330;
      stroke-dashoffset: 0;
      opacity: 1;
    }

    100% {
      opacity: 0.4;
    }
  }

  @keyframes draw-check {
    0% {
      stroke-dasharray: 49, 80;
      stroke-dashoffset: 48;
      opacity: 0;
    }

    50% {
      stroke-dasharray: 49, 80;
      stroke-dashoffset: 48;
      opacity: 1;
    }

    100% {
      stroke-dasharray: 130, 80;
      stroke-dashoffset: 48;
    }
  }

</style>
