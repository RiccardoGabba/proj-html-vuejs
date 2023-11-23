<template>
  <Header/>

  <Maincontent/>

  <Footer/>
</template>

<script>
import { store } from "./data/store";
import Maincontent from "./components/Maincontent.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",

  components: {
    Header,
    Maincontent,
    Footer,
  },

  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
