<template>
  <div class="token" :class="type">
    <div class="content">
      <div class="icon">
        <img :src="'/icon_'+(tokenType)+'.svg'" :alt="type">
      </div>
      <div class="details">
        <h4>{{ name }}</h4>
        <span class="issuer">by {{ description }}</span>
        <span class="date">{{ issueDate | date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      type: {
        type: [String, Number],
        required: true
      },
      description: {
        type: String
      },
      issueDate: {
        type: String
      }
    },
    computed: {
      tokenType: function() {
        return this.type.toLowerCase()
      }
    }
  }
</script>

<style lang="scss" scoped>
.token {
  flex-basis: calc(50% - 22px);
  margin: 0 20px 20px 0;
  border: 1px solid rgba(155,155,155,0.2);

  h4 {
    margin: 0;
  }

  &:hover .content {
    border-left: 5px solid #3D8CFF;
    box-shadow: 0 0 20px rgba(0,0,0,.1);
  }

  &.active {
    border: none;
    
    .content {
      border-left: 5px solid transparent;
      box-shadow: 0 0 20px rgba(0,0,0,.1);
      cursor: default;
    }
  }

  .content {
    cursor: pointer;
    display: flex;
    padding: 1rem;
    border-left: 5px solid transparent;
    transition: border ease .15s, box-shadow ease .15s;
  }

  .icon {
    padding-right: 1rem;
  }

  .details {
    span {
      display: block;
    }

    .issuer {
      color: #2F2D3B;	
      font-family: "Overpass Mono";	
      font-size: 14px;
      margin-bottom: 4px;
    }

    .date {
      color: #7D8285;
      font-size: 12px;
      line-height: 14px;
    }
  }
}
</style>