<template>
  <div class="container">
    <img :src="image" alt="" />
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
  </div>
</template>

<script>
import { store } from "../data/store.js";
export default {
  name: "HealthServices",
  props: {
    image: String,
    title: String,
    text: String,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>.under-line{
  border-top: 3px solid white;
  width: 30%;
  padding: 20px;
  margin: 0 auto
}
</style>
