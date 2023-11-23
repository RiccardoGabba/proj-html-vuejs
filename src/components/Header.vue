<template>
  <header class="text-white bg-header">
    <div class="d-flex justify-content-between p-4">
      <div>
        <img src="../../public/Images/medical_logo_1x_light.png" alt="" />
      </div>
      <div class="d-flex align-items-center">
        <h5 class="mx-3">Home</h5>
        <h5 class="mx-3">About</h5>
        <h5 class="mx-3">Departments</h5>
        <h5 class="mx-3">Articles</h5>
        <button class="button-1 "><h5>Make Appointment</h5></button>
      </div>
    </div>

    <div class="container justify-content-center align-items-center">
      <div class="d-flex">
        <div class="col-6">
          <h1 class="display-1">Caring For Life</h1>
          <p class="fs-2 ">
            Kind words can be short and easy to speak, but their enchoes 
            are truly endless. Avada Health focuses on yo as if it was our own
            family
          </p>
          <button class=" text-white btn button-2" type="submit">Learn More</button>
        </div>
        <div class="col-3 bg-hours p-5">
          <h3 class="text-center h3">Office Hours</h3>
          <div class="under-line"></div>

          <table class="w-100">
            <tbody>
              <tr>
                <td>
                  <span>Monday - Friday</span>
                </td>
                <td>
                  <span>9.00 -- 2.00</span>
                </td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>8:00 - 5:00</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>8:00 - 5:00</td>
              </tr>
            </tbody>
          </table>
          <div class="my-3 ">
            <h4>+44(0) 1865 339665</h4>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
 .bg-header {
    background-image: url(../../public/Images/header-image-homepage.jpg);
    height: 100vh;
  }

  .under-line{
  border-top: 4px solid rgb(59, 175, 191);
  padding: 20px;
}

.bg-hours{
  background-color: rgba(94, 145, 146, 0.6);
  }

  .button-1{
    background-color: rgb(59, 175, 191);
    border: 0px;
    
  }
  .button-2{
    background-color: rgb(65, 230, 254);
    border: 0px;
    padding: 15px
  }
</style>
