/* eslint-disable prettier/prettier */
<template>
  <div
    class="section bg-primary d-flex flex-column align-content-center justify-content-center p-3"
  >
    <div class="registration-section text-white">
      <div class="logo-small fw-700">ORDI</div>
      <p class="lead fw-300 text-center text-secondary">
        Esegui il Login
      </p>
    </div>
    <div class="row">
      <div class="col-12 col-md-4 offset-md-4">
        <form>
          <div class="form-row">
            
            <FormInputComponent
              type="email"
              placeholder="Email Address"
              id="emailAddress"
              class="col-md-12"  
            ></FormInputComponent>
    
            <FormInputComponent
              type="password"
              placeholder="Password"
              id="password"
              class="col-12"
            ></FormInputComponent>
           
          </div>

          <router-link to="/BusinessInfo">
            <button class="btn text-white btn-register w-100 mt-5">
              Accedi
            </button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import FormInputComponent from "@/components/formInputs/FormInputComponent.vue";

export default {
  name: "Login",
  components: {
    FormInputComponent,
  },
};
</script>
