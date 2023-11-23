<template>
  <div class="p-3">
    <div class="card" style="width: 18rem">
      <img class="card-img-top" :src="image" alt="Card image cap" />
      <div class="card-body text-start">
        <h5 class="card-title">{{ name }}</h5>
        <h5 class="card-title">{{ role }}</h5>
        <p class="card-text">{{ text }}</p>
        <i class="fa-brands fa-facebook-f m-2 facebook " style="color: #ffffff"></i>
        <i class="fa-brands fa-x-twitter m-2 X" style="color: #ffffff"></i>
        <i class="fa-brands fa-instagram m-2 intastagram" style="color: #ffffff"></i>
      </div>
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

<style lang="scss" scoped>
.facebook{
  border-radius: 10px;
  background-color: rgb(59, 89, 152);
  padding: 10px
}
.X{
  border-radius: 10px;
  background-color: black;
  padding: 10px
}
.intastagram{
  border-radius: 10px;
  background-color: orange ;
  padding: 10px;
}
</style>
