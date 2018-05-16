<template>
  <div>
    <div class="square-spin">
      <div></div>
    </div>
    <h1>Deploying smart contract...</h1>
    <p>Wait for your Metamask pop-up and click Submit. It usually takes up to 30 seconds to deploy the smart contract.</p>
    <p v-if="this.$store.state.contractAddress">Smart contract address has been created: <br/> {{ this.$store.state.contractAddress }}</p>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="scss">
@keyframes square-spin {
  25% {
    transform: perspective(100px) rotateX(180deg) rotateY(0); }
  50% {
    transform: perspective(100px) rotateX(180deg) rotateY(180deg); }
  75% {
    transform: perspective(100px) rotateX(0) rotateY(180deg); }
  100% {
  transform: perspective(100px) rotateX(0) rotateY(0); } 
}

.square-spin > div {
  animation-fill-mode: both;
  width: 32px;
  height: 32px;
  margin: 0 auto 3rem auto;
  background: url('/favicon.png') no-repeat;
  animation: square-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite; 
}
</style>