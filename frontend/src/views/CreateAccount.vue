/* eslint-disable prettier/prettier */
<template>
  <div class="section">
    <div class="container">
      <div class="registration-section">
        <div class="logo">
          <i>ORDI</i>
        </div>
        <p class="lead fw-300">
          L’App che ti permette di gestire in modo facile e sicuro la tua
          attività
        </p>
      </div>
    </div>

    <div class="col-12 col-md-6 col-lg-4 offset-lg-4 offset-md-3 reg-form">
      <div class="col-12 mt-4 mb-4 text-center fw-500">Crea un Account</div>
      <form>
        <div class="form-row">
          <FormInputComponent
            type="text"
            label="Nome"
            placeholder="Nome"
            id="name"
            class="col-md-6"
          ></FormInputComponent>
          <FormInputComponent
            type="text"
            label="Cognome"
            placeholder="Cognome"
            id="lastname"
            class="col-md-6"
          ></FormInputComponent>
          <FormInputComponent
            type="email"
            label="E-mail"
            placeholder="E-mail"
            id="email"
            class="col-12"
          ></FormInputComponent>
          <FormInputComponent
            type="password"
            label="Password"
            placeholder="Password"
            id="password"
            class="col-12"
          ></FormInputComponent>
          <FormInputComponent
            type="password"
            label="Ripeti Password"
            placeholder="Ripeti Password"
            id="passwordRepeat"
            class="col-12"
          ></FormInputComponent>
        </div>

        <router-link to="/BusinessInfo">
          <button class="btn text-white btn-register m-auto d-block">CREA ACCOUNT</button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
import FormInputComponent from "@/components/formInputs/FormInputComponent.vue";

export default {
  name: "CreateAccount",
  components: {
    FormInputComponent
  }
};
</script>
