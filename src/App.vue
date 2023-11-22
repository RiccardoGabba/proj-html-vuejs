<template>
  
  <div class="bg-header">
    <Header />
  </div>

</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "app",

  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
  .bg-header {
    background-image: url(../public/Images/header-image-homepage.jpg);
    background-size: 100%;
  }
</style>
