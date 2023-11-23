<template>
  <div class="container">
    <img :src="image" alt="" />
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "ServicesComponents",
  props: {
    image: String,
    title: String,
    text: String,
  },
};
</script>

<style lang="scss" scoped></style>
