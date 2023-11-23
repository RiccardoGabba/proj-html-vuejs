<template>
  <Header/>

  <Maincontent/>
</template>

<script>
import { store } from "./data/store";
import Maincontent from "./components/Maincontent.vue";
import Header from "./components/Header.vue";
export default {
  name: "app",

  components: {
    Header,
    Maincontent,
  },

  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
