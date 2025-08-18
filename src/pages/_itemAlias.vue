<template>
  <div class="wrapper">
    <div v-if="item" class="wrapper-person">
      <img :src="item.img" :alt="item.description">
      <h1 class="title" style="color: #fff;">{{ item.title }}</h1>
      <div class="description">{{ item.description }}</div>
      <div>
        <router-link to="/" class="btn btnPrimary">Back To Home</router-link>
      </div>
      <div class="card-stats">
        <div class="one-third" v-for="(stat, index) in item.info" :key="index">
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat">{{ stat.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import items from '../seeders/items.js';
  export default {
    data() {
      return {
        item: null
      }
    },
    created() {
      const alias = this.$route.params.itemAlias
      const item = items.find(el => el.alias === alias)
      this.item = item
    }
  };
</script>
