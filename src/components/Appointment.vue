<template>
  <div class="bg-appointemnt text-white ">
  <h2 class="h1">Make An Appointment</h2>
  <div class="d-flex row">
  <div class="under-line my-4">
  </div>
  <p class="">
    Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium
    Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo Inventore
    Veritatis Et Quasi Architecto Beatae
  </p>
</div>

  <form>
    <div class="form-row d-flex aling-items-center justify-content-center">
      <div class="form-group w-25 p-1">
        <input
          type="name"
          class="form-control"
          id="inputEmail4"
          placeholder="Nome"
        />
      </div>
      <div class="form-group w-25 p-1">
        <input
          type="subname"
          class="form-control"
          id="inputPassword4"
          placeholder="Cognome"
        />
      </div>
    </div>

    <div class="form-row d-flex aling-items-center justify-content-center">
      <div class="form-group w-25 p-1">
        <input
          class="form-control"
          id="inputEmail4"
          placeholder="Phone Number"
        />
      </div>
      <div class="form-group w-25 p-1">
        <input
          class="form-control"
          id="inputPassword4"
          placeholder="Appointment Date"
        />
      </div>
    </div>

    <div class="form-row my-3">
      <div class="form-group d-flex aling-items-center justify-content-center">
        <input class="form-control w-50" placeholder="text" />
      </div>
    </div>
  </form>
</div>
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

<style lang="scss" scoped>
.bg-appointemnt{
  background-image: url(../../public/Images/make-an-appointment.jpg);
  background-size: cover;
  height: 100vh;
}
.under-line{
  border-top: 3px solid white;
  width: 30%;
  padding: 20px;
  margin: 0 auto
}


</style>
