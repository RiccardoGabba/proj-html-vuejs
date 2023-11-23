<template>
  <div class="col-12 my-5">
    <div class="container d-flex">
      <div class="col-4">
        <img src="../../public/Images/medical_logo_1x_dark.png" alt="" />
        <p class="">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium dolemue launti totam aperiam, eaque ipsa quae abillo.
          Invente veriatis et quasi architecto beatae luptatem accusantium,
          remaperiamsiat. Voluptatem accusest etsium doloremque laudaien. Lorem
          ipsum sits dolores ets unser.
        </p>
        <h5>LEARN MORE ABOUT US</h5>
        <i
          class="fa-brands fa-facebook-f m-2 facebook"
          style="color: #ffffff"
        ></i>
        <i class="fa-brands fa-x-twitter m-2 X" style="color: #ffffff"></i>
        <i
          class="fa-brands fa-instagram m-2 intastagram"
          style="color: #ffffff"
        ></i>
      </div>
      <div class="col-4 p-2">
        <h5>CONTACT INFORMATION</h5>
        <div class="under-line"></div>
        <span>121 King Street, London United Kingdom</span><br>
        <span >1.800.458.556</span>
        <div class="card text-center w-100 " >
          <div class="card-body ">
            <p class="card-text">
                For privacy reasons Google Maps needs your permission to be loaded.
            </p>
            <a href="#" class="btn btn-primary w-100">I accept</a>
          </div>
        </div>
      </div>
      <div>
        <h5>MEDICAL DEPARTMENTS</h5>
        <div class="under-line"></div>
        <ul>
            <li>Cardiology</li>
            <li>Pediatrics</li>
            <li>Diabetes Care</li>
            <li>Pre-natal Care</li>
            <li>Ultrasound Echocardiogram</li>
        </ul>
        <a href="#" class="btn btn-primary w-100">View our departments</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.facebook {
  border-radius: 10px;
  background-color: rgb(59, 89, 152);
  padding: 10px;
}
.X {
  border-radius: 10px;
  background-color: black;
  padding: 10px;
}
.intastagram {
  border-radius: 10px;
  background-color: orange;
  padding: 10px;
}
.under-line {
  border-top: 3px solid black;
  width: 10%;
  padding: 20px;
  margin: 10px;
}


</style>
