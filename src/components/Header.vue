<template>
  <header class="text-white bg-header">
    <div class="d-flex justify-content-between p-4">
      <div>
        <img src="../../public/Images/medical_logo_1x_light.png" alt="" />
      </div>
      <div class="d-flex align-items-center">
        <h3 class="mx-3">Home</h3>
        <h3 class="mx-3">About</h3>
        <h3 class="mx-3">Departments</h3>
        <h3 class="mx-3">Articles</h3>
        <h3 class="p-3 bg-primary">Make Appointment</h3>
      </div>
    </div>

    <div class="container justify-content-center align-items-center">
      <div class="d-flex">
        <div class="col-6">
          <h1>Caring For Life</h1>
          <p>
            Kind words can be short and easy to speak, but their enchoes <br />
            are truly endless. Avada Health focuses on yo as if it was our own
            family
          </p>
          <button class="btn btn-primary" type="submit">Learn More</button>
        </div>
        <div class="col-3">
          <h3 class="text-center">Office Hours</h3>
          <hr />

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
          <div class="my-3">
            <h3>+44(0) 1865 339665</h3>
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
</style>
