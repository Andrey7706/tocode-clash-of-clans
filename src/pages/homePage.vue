<template>
  <div class="md-body">
    <h1 class="title">Clash of Clans</h1>
    <div class="card__wrapper" v-for="item in items" :key="item.id">
      <Card :title="item.title" :name="`${item.lvl} lvl`" :imgUrl="item.img" :link="`/${item.alias}`">
        {{ item.description }}
      </Card>
    </div>
  </div>
</template>

<script>
  import items from '../seeders/items.js';
  import AppCard from '../components/UI/AppCard.vue';
  export default {
    components: {
      Card: AppCard,
    },
    data() {
      return {
        items: items
      };
    },
  };
</script>