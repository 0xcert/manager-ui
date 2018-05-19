<template>
  <div>
    <h1>Create a Non-fungible Project</h1>
    <h4>
      Enable and configure the features of your non-fungible token smart contract, review and deploy it to the Etherum blockchain
    </h4>

    <div class="errors">
      <p>Unlock your Metamask and select Ropsten Network.</p>
      <p>You'll need some ETH. You can get some <a href="http://ethereumfaucet.info/">here</a>.</p>
    </div>

    <strong>Select smart contract features:</strong>

    <div class="options">
      <Option 
        @click.native="$store.commit('showDefault', true)" 
        :class="{
          checked : $store.state.showDefault,
          enabled : $store.state.enableDefault
          }">
        ERC721
      </Option>
      <Option 
        @click.native="$store.commit('showMetadata', true)" 
        :class="{
          checked : $store.state.showMetadata,
          enabled : $store.state.enableMetadata
        }" 
        :tokenColor="'#32CAE8'">
        ERC 721 Metadata
      </Option>
      <Option 
        @click.native="$store.commit('showEnumerable', true)" 
        :class="{
          checked : $store.state.showEnumerable,
          enabled : $store.state.enableEnumerable
          }" 
        :tokenColor="'#F67068'">
        ERC 721 Enumerable
      </Option>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="scss">
.errors {
  margin: 2rem 0 3rem;

  p {
    font-size: 14px;
    color: $grey;
    margin: 0;
  }
}

.options {
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  justify-content: space-around;
  max-width: 650px;
  margin: 2rem 0 0;
}

</style>