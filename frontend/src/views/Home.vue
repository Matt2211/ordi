<template>
  <div class="section w-100 d-flex align-items-center align-content-center justify-content-center">
    <div class="logo d-flex flex-column align-items-center">
      <i>ORDI</i>this is a test
      <i class="fas fa-spinner fa-pulse"></i>
    </div>

    <div
      class="fixed-bottom d-flex align-content-center align-items-center justify-content-between p-2"
    >
      <div>Powered by MM</div>
      <div>Version 0.0.01</div>
      <div>Contact us</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    window.setTimeout(function() {
      window.location.href = "/createAccount";
    }, 5000);
  }
};
</script>
