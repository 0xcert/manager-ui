<template>
  <div class="application">
    <x-nav :class="'header'" center>
      <strong class="blue">manager.</strong>0xcert.org
    </x-nav>
    <main>
      <div class="main--content">
        <nuxt />
      </div>
    </main>
    <x-nav :class="'toolbar'" center>
      <Button 
        v-if="$store.state.show.create"
        @click.native="review"
        :type="['primary', 'large']">
        Review code
      </Button>
      <Button 
        v-if="$store.state.show.review"
        @click.native="deploy"
        :type="['primary', 'large']">
        Deploy
      </Button>
      <Button 
        v-if="$store.state.show.review"
        @click.native="$store.dispatch('goToCreate')"
        :type="['secondary', 'large']">
        Edit options
      </Button>
      <Button 
        v-if="$store.state.show.success"
        @click.native="$store.dispatch('goToCreate')"
        :type="['secondary', 'large']">
        Create another one!
      </Button>
    </x-nav>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import Navigation from '~/components/Navigation'

export default {
  components: {
    Logo,
    Navigation
  },
  methods: {
    async review () {
      await this.compile();
      this.$store.dispatch('goToReview')
    },
    async compile () {
      // RPC client initialization
      var jaysonBrowserClient = require('jayson/lib/client/browser');
      var callServer = function(request, callback) {
        fetch('https://manager-rpc.0xcert.org', {
          method: 'POST',
          body: request,
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then(function(res) { return res.text(); })
        .then(function(text) { callback(null, text); })
        .catch(function(err) { callback(err); });
      };
      var client = jaysonBrowserClient(callServer, {});
      // build solidity code through RPC
      const [src, bin, abi] = await new Promise((resolve, reject) => {
        client.request('compile', [
          this.$store.state.erc721,
          this.$store.state.erc721Metadata,
          this.$store.state.erc721Enumerable,
        ], function(err, error, result) {
          if(err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      })
      // store countract source
      this.$store.contract = { src, bin, abi }
    },
    async deploy () {
      this.$store.dispatch('goToLoading')
      const web3 = new window.Web3(window.Web3.givenProvider)
      const contract = new web3.eth.Contract(this.$store.contract.abi)
      const address = await contract.deploy({
        data: this.$store.contract.bin,
        arguments: [],
      }).send({
        from: await web3.eth.getAccounts().then((a) => a[0]),
        gas: 3000000,
        gasPrice: '5000000000',
      })
      .then((newContractInstance) => {
        console.log(newContractInstance)
        return newContractInstance.options.address
      }).catch((err) => {
        console.log('Error', err)
        return null
      });
      this.$store.commit('setContractAddress', address)
      if (!address) {
        this.$store.dispatch('goToError')
      } else {
        this.$store.dispatch('goToSuccess')
      }
    }
  }
}
</script>

<style lang="scss">
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-overflow-scrolling: touch; /* Lets it scroll lazy */
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  overflow-x: hidden;
  height: 100%;
}

body {
  font-family: "Roboto", -apple-system, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 0;
  margin: 0;
  height: 100%;
}

#__nuxt {
  height: 100%;
}

#__layout {
  background: linear-gradient(to bottom right, $primary, #32CAE8 );
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.application {
  background: white;
  flex: 1 1 auto;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  color: rgba(0,0,0,.87);

  @include media('medium') {
    max-width: 1080px;
    height: 750px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: rgba(11, 103, 157, 0.7) 0px 10px 28px 0px;
  }
}

main {
  // padding: 90px 0px 0px 300px;
  display: flex;
  flex: 1 0 auto;
  max-width: 100%;
  will-change: padding;
}

.main--content {
  display: flex;
  flex-basis: 100%;
}

.box {
  background-color: rgba(245,246,248,0.7);
  padding: 25px 28px;
}

.blue {
  color: $primary;
}
</style>

