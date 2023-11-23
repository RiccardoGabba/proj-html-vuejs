<template>
  <div class="text-center mt-5">
    <div class="container">
    <h2 class="h1">Welcome To Avada Health</h2>
    <p class="fs-3 p-5 container">
      Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium
      Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo
    </p>
    <div class="d-flex container mb-5">
      <Welcome
        v-for="el in store.Avada"
        :title="el.title"
        :text="el.text"
        :image="el.image"
      />
    </div>
  </div>
    <div class="bg-light ">
      <img src="../../public/Images/icon-5.png" alt="" />
      <h2>MEET OUR DOCTORS</h2>
      <div class="under-line"></div>
      <p class="fs-3 container">
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

    <div class="mt-5">
      <img src="../../public/Images/icon-6.png" alt="" />
      <h2 class="p-3">OUR HEALTH SERVICES</h2>
      <div class="under-line"></div>
      <p class="container fs-3 mb-5">
        Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
        Accusantium Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab
        Illo Inventore Veritatis Et Quasi Architecto Beatae
      </p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-4 mb-5" v-for="el in store.Services">
          <HealthServices :image="el.image" :title="el.title" :text="el.text" />
        </div>
      </div>
    </div>

    <div >
      <VideoFacilities/>
    </div>
    <div class="row">
      <div class="d-flex  text-center justify-content-around bg-facilities p-5 text-white">
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
      <Appointments />
    </div>

    <div>
      <Slider />
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
import VideoFacilities from "../components/VideoFacilities.vue";
import Slider from "../components/Slider.vue";

export default {
  name: "Maincontent",

  components: {
    Welcome,
    Doctors,
    HealthServices,
    Facilities,
    Appointments,
    VideoFacilities,
    Slider,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
.under-line {
  border-top: 3px solid gray;
  width: 30%;
  padding: 20px;
  margin: 0 auto;
}

.bg-facilities {
    background-color: rgb(55, 153, 194);
}
</style>
