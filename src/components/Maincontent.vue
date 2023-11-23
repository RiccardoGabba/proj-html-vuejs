<template>
  <div class=" text-center">
    <h2>Welcome To Avada Health</h2>
    <p>
      Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium
      Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo
    </p>
    <div class="d-flex">
      <ServicesComponents
        v-for="el in store.Avada"
        :title="el.title"
        :text="el.text"
        :image="el.image"
      />
    </div>

    <div class="bg-secondary">
      <img src="../../public/Images/icon-5.png" alt="">
      <h2>MEET OUR DOCTORS</h2>
      <hr>
      <p>Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo Inventore Veritatis Et Quasi Architecto Beatae</p>
    <div class="d-flex align-items-center justify-content-center ">
      <Doctors 
        v-for="el in store.Doc"
        :image="el.image"
        :name="el.name"
        :role="el.role"
        :text="el.text"
      />
    </div>
    <HealthServices
    v-for="el in store.Services"
    :image="el.image"
    :title="el.title"
    :text="el.text"
    />
  </div>
</div>
</template>

<script>
import { store } from "../data/store";

import ServicesComponents from ".//Servicescomponents.vue";
import Doctors from "../components/Doctors.vue";
import HealthServices from "../components/HealthServices.vue"

export default {
  name: "Maincontent",

  components: {
    ServicesComponents,
    Doctors,
    HealthServices,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
