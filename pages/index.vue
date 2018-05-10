<template>
  <x-container class="middle">
    <h1>Create a Non-fungible Project</h1>
    <h4>
      Enable and configure the features of your non-fungible token smart contract, review and deploy it to the Etherum blockchain
    </h4>

    <div class="errors">
      <p>Login to Metamask and select Reposten Network</p>
      <p>You need at least 0.1 ETH (you have 0 ETH)</p>
    </div>

    <strong>Select smart contract features:</strong>

    <div class="options">
      <div class="option erc721">
        <Token/>
        ERC721
      </div>
      <div class="option metadata">
        <Token :tokenColor="'#32CAE8'"/>
        ERC 721 Metadata
      </div>
      <div class="option enumerable">
        <Token :tokenColor="'#F67068'"/>
        ERC 721 Enumerable
      </div>
      <div class="option certificate">
        <Token :tokenColor="'#3EFF8A'"/>
        ERC 721 Certificate
      </div>
    </div>
  </x-container>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
.token {
  margin: 0 auto 1rem auto;
}

.middle {
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
}

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
  max-width: 600px;
  margin: 2rem 0 0;

  .option {
    padding: 1rem;
    margin: 0 1rem 1rem;
    border: 1px solid $border;
    text-align: center;
    width: 80px;
  }
}
</style>