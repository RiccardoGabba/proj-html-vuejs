<template>
  <div class="text-center">
    <h2>Welcome To Avada Health</h2>
    <p>
      Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium
      Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo
    </p>
    <div class="d-flex">
      <Welcome
        v-for="el in store.Avada"
        :title="el.title"
        :text="el.text"
        :image="el.image"
      />
    </div>

    <div class="bg-secondary">
      <img src="../../public/Images/icon-5.png" alt="" />
      <h2>MEET OUR DOCTORS</h2>
      <hr />
      <p>
        Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
        Accusantium Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab
        Illo Inventore Veritatis Et Quasi Architecto Beatae
      </p>
      <div class="d-flex align-items-center justify-content-center">
        <Doctors
          v-for="el in store.Doc"
          :image="el.image"
          :name="el.name"
          :role="el.role"
          :text="el.text"
        />
      </div>
    </div>

    <div>
      <img src="../../public/Images/icon-6.png" alt="" />
      <h2>OUR HEALTH SERVICES</h2>
      <hr />
      <p>
        Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
        Accusantium Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab
        Illo Inventore Veritatis Et Quasi Architecto Beatae
      </p>
    </div>

    <div class="row">
      <div class="col-4" v-for="el in store.Services">
        <HealthServices :image="el.image" :title="el.title" :text="el.text" />
      </div>
    </div>

    <div class="row">
      <div class="d-flex bg-success text-center justify-content-around">
        <Facilities
          v-for="el in store.Facilities"
          :title="el.title"
          :image="el.image"
          :text="el.text"
          :button="el.button"
        />
      </div>
    </div>
    <div>
      <Appointments/>
    </div>
  </div>
</template>

<script>
import { store } from "../data/store";

import Doctors from "../components/Doctors.vue";
import HealthServices from "../components/HealthServices.vue";
import Welcome from "./Welcome.vue";
import Facilities from "../components/Facilities.vue";
import Appointments from "../components/Appointment.vue";

export default {
  name: "Maincontent",

  components: {
    Welcome,
    Doctors,
    HealthServices,
    Facilities,
    Appointments,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
