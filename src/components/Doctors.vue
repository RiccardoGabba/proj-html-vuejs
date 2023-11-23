<template>
  <div class="col-3 m-4  overflow-hidden  bg-black">
    <img :src="image"/>
    <div class="text-start ">
    <h3>{{ name }}</h3>
    <h5>{{ role }}</h5>
    <p>{{ text }}</p>
    <i class="fa-brands fa-facebook-f m-2" style="color: #ffffff;"></i>
    <i class="fa-brands fa-x-twitter m-2" style="color: #ffffff;"></i>
    <i class="fa-brands fa-instagram m-2" style="color: #ffffff;"></i>
    </div>
  </div>
</template>

<script>
import { store } from "../data/store";
export default {
  name: "Doctors",
  props: {
    image: String,
    name: String,
    role: String,
    text: String,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
