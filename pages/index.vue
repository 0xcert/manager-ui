<template>
  <x-container :class="'middle'">
    <transition name="fade" mode="out-in">
      <StateConfigure v-if="$store.state.show.create" key="create" />
      <StateReview v-if="$store.state.show.review" key="review" />
      <StateLoading v-if="$store.state.show.loading" key="loading" />
      <StateSuccess v-if="$store.state.show.success" key="success" />
      <StateError v-if="$store.state.show.error" key="error" />
    </transition>

    <transition name="fade" mode="out-in">
      <div class="shade" v-if="$store.state.show.shade"></div>
    </transition>

    <transition name="slide" mode="out-in">
      <OptionDefault v-if="$store.state.showDefault" key="showDefault"/>
      <OptionMetadata v-if="$store.state.showMetadata" key="showMetadata" />
      <OptionEnumerable v-if="$store.state.showEnumerable" key="showEnumerable" />
    </transition> 
  </x-container>
</template>

<script>
import OptionDefault from '~/components/Options/OptionDefault'
import OptionMetadata from '~/components/Options/OptionMetadata'
import OptionEnumerable from '~/components/Options/OptionEnumerable'
import StateConfigure from '~/components/States/Configure'
import StateReview from '~/components/States/Review'
import StateSuccess from '~/components/States/Success'
import StateLoading from '~/components/States/Loading'
import StateError from '~/components/States/Error'

export default {
  components: {
    OptionDefault,
    OptionMetadata,
    OptionEnumerable,
    StateConfigure,
    StateReview,
    StateSuccess,
    StateLoading,
    StateError
  }
}
</script>