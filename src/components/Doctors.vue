<template>
  <div class="col-3 m-5 bg-black">
    <img :src="image" />
    <div class="text-start ">
    <h3>{{ name }}</h3>
    <h5>{{ role }}</h5>
    <p>{{ text }}</p>
    <i class="fa-brands fa-facebook-f" style="color: #ffffff;"></i>
    <i class="fa-brands fa-x-twitter" style="color: #ffffff;"></i>
    <i class="fa-brands fa-instagram" style="color: #ffffff;"></i>
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
