<template>
  <swiper 
    :slidesPerView="3"
    :freeMode="true"
    :loop="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="el in store.Avatar">
    <div class="bg-black">
      <img :src="el.image">
      
    </div>
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import { store } from "../data/store";
export default {
  name: "Slider",

  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      store,
    };
  },
  setup() {
    return {
      modules: [FreeMode, Pagination],
    };
  },
};
</script>

<style lang="scss" scoped></style>
