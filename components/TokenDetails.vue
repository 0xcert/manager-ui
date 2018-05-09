<template>
  <div>
    <img v-if="data.image" class="tokenImage" :src="data.image" :alt="data.key"/>
    <h2>Token details</h2>
    <div class="box">
      <dl>
        <dt v-if="data.name">Name</dt>
        <dd v-if="data.name">{{ data.name }}</dd>
        <dt v-if="data.description">Description</dt>
        <dd v-if="data.description">{{ data.description }} </dd>
        <dt>Issuer</dt>
        <dd>{{ data.issuer.address }} </dd> 
        <dt>Owner</dt>
        <dd>{{ data.owner.address }} </dd>
        <dt>Proof</dt>
        <dd>{{ data.proof }}</dd>
        <dt>Revision</dt>
        <dd>{{ data.revision }}</dd>
        <dt>Url</dt>
        <dd><a :href="data.uri" target="_blank">{{ data.uri }}</a></dd>
      </dl>
    </div>

    <h2>Meta data</h2>
    <div class="box">
      <dl>
        <dt>Digest Algorithm</dt>
        <dd>{{ data.meta.digestAlgorithm }} </dd> 
        <dt>Created</dt>
        <dd>{{ data.meta.dateCreated | date }} </dd> 
        <dt>Expires</dt>
        <dd>{{ data.meta.expires | date }} </dd>                 
      </dl>
    </div>

    <div v-if="Object.keys(data.data).length > 0">
      <h2>Public data (raw)</h2>
      <div class="box">
        <dl v-for="(value, key) in data.data" :key="value.id">
          <dt>{{ key }}</dt>
          <dd>{{ value }}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tokenImage {
    max-width: 230px;
    border-radius: 150px;
    margin-bottom: 1rem;
  }
</style>
