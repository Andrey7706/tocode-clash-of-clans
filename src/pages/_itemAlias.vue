<template>
  <div class="wrapper">
    <div v-if="item" class="wrapper-person">
      <img :src="item.img" :alt="item.description">
      <h1 class="title" style="color: #fff;">{{ item.title }}</h1>
      <div class="description">{{ item.description }}</div>
      <div>
        <router-link to="/" class="btn btnPrimary">Back To Home</router-link>
      </div>
      <Stats :item="item"></Stats>
    </div>
  </div>
</template>

<script>
  import items from '../seeders/items.js';
  import AppStats from '../components/UI/AppStats.vue';
  export default {
    components: {
      Stats: AppStats
    },
    data() {
      return {
        item: null
      }
    },
    created() {
      const alias = this.$route.params.itemAlias
      const item = items.find(el => el.alias === alias)

      if (!item) {
        this.$router.replace({ name: 'NotFound' })
      } else {
        this.item = item
      }
    },
  };
</script>
