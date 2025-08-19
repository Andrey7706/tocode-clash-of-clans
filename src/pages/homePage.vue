<template>
  <h1 class="title">Clash of Clans</h1>
  <carousel :settings="settings" :breakpoints="breakpoints">
    <slide class="card__wrapper" v-for="item in items" :key="item.id">
      <Card :title="item.title" :name="`${item.lvl} lvl`" :imgUrl="item.img" :link="`/${item.alias}`">
        <template v-slot:body>
          {{ item.description }}
        </template>
        <template v-slot:footer>
          <Stats :item="item"></Stats>
        </template>
      </Card>
    </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
  import items from '../seeders/items.js';
  import AppCard from '../components/UI/AppCard.vue';
  import AppStats from '../components/UI/AppStats.vue';
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Navigation } from 'vue3-carousel';
  export default {
    components: {
      Card: AppCard,
      Stats: AppStats,
      Carousel: Carousel,
      Slide: Slide,
      Navigation: Navigation
    },
    data() {
      return {
        items: items,
        settings: {
          itemsToShow: 2,
          wrapAround: true,
          snapAlign: 'center',
        },
        breakpoints: {
          300: {
            itemsToShow: 1,
          },
          768: {
            itemsToShow: 2,
          },
        },
      };
    },
  };
</script>