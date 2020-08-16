/* eslint-disable prettier/prettier */
<template>
  <div
    class="section bg-primary d-flex flex-column align-content-center justify-content-center p-3"
  >
    <div class="registration-section text-white">
      <div class="logo-small fw-700">ORDI</div>
      <p class="lead fw-300 text-center text-secondary">
        L’App che ti permette di gestire
        <br class="d-none d-md-block" />in modo facile e sicuro la tua attività
      </p>
    </div>
    <div class="row">
      <div class="col-12 col-md-4 offset-md-4">
        <form>
          <div class="form-row">
            <FormInputComponent
              type="text"
              placeholder="Nome"
              id="name"
              class="col-md-6"
            ></FormInputComponent>
            <FormInputComponent
              type="text"
              placeholder="Cognome"
              id="lastname"
              class="col-md-6"
            ></FormInputComponent>
            <FormInputComponent
              type="email"
              placeholder="E-mail"
              id="email"
              class="col-12"
            ></FormInputComponent>
            <FormInputComponent
              type="password"
              placeholder="Password"
              id="password"
              class="col-12"
            ></FormInputComponent>
            <FormInputComponent
              type="password"
              placeholder="Ripeti Password"
              id="passwordRepeat"
              class="col-12"
            ></FormInputComponent>
          </div>

          <router-link to="/BusinessInfo">
            <button class="btn text-white btn-register w-100 mt-5">
              Registrati
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
  name: "CreateAccount",
  components: {
    FormInputComponent,
  },
};
</script>
