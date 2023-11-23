<template>
  <h2>Make An Appointment</h2>
  <hr />
  <p>
    Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium
    Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo Inventore
    Veritatis Et Quasi Architecto Beatae
  </p>

  <form class="bg-black">
    <div class="form-row d-flex aling-items-center justify-content-center">
      <div class="form-group w-25">
        <input
          type="name"
          class="form-control"
          id="inputEmail4"
          placeholder="Nome"
        />
      </div>
      <div class="form-group w-25">
        <input
          type="subname"
          class="form-control"
          id="inputPassword4"
          placeholder="Cognome"
        />
      </div>
    </div>

    <div class="form-row d-flex aling-items-center justify-content-center">
      <div class="form-group w-25">
        <input
          class="form-control"
          id="inputEmail4"
          placeholder="Phone Number"
        />
      </div>
      <div class="form-group w-25">
        <input
          class="form-control"
          id="inputPassword4"
          placeholder="Appointment Date"
        />
      </div>
    </div>

    <div class="form-row ">
      <div class="form-group d-flex aling-items-center justify-content-center">
        <input class="form-control w-50" placeholder="text" />
      </div>
    </div>
  </form>
</template>

<script>
import { store } from "../data/store";
export default {
  name: "Appointments",
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
