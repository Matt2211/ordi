<template>
  <div>
    <HeaderComponent></HeaderComponent>

    <div class="col-12 col-md-6 col-lg-4 offset-lg-4 offset-md-3 reg-form">
      <div class="col-12 mt-4 mb-4 text-center fw-500 text-primary">Benvenuto su ORDI @Name!</div>
      <form class="text-primary">
        <div class="text-center">
          <img src="../assets/images/sfuso_logo.jpg" width="100" class="circle mb-5" alt="..." />
        </div>
        <div class="form-row">
          <FormInputComponent
            type="text"
            label="Nome della tua attività commerciale"
            placeholder="Inserisci Nome"
            id="businessName"
            class="col-12"
          ></FormInputComponent>
          <FormInputSelectComponent
            class="col-12"
            label="Tipo di Attività"
            id="businessType"
            :options="options"
          ></FormInputSelectComponent>
          <FormInputComponent
            type="number"
            label="Numero di Coperti"
            placeholder="Numero di Coperti"
            id="totalSeats"
            class="col-12"
          ></FormInputComponent>
        </div>

        <router-link to="/NewOrder">
          <button class="btn text-white btn-register m-auto d-block">AVANTI</button>
        </router-link>
      </form>
    </div>

    <div class="col-md-6"></div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FormInputComponent from "@/components/formInputs/FormInputComponent.vue";
import FormInputSelectComponent from "@/components/formInputs/FormInputSelectComponent.vue";

export default {
  name: "BusinessInfo",
  components: {
    FormInputComponent,
    FormInputSelectComponent,
    HeaderComponent
  },
  data() {
    return {
      options: ["Ristorante", "Enoteca", "Bar", "Altro"]
    };
  }
};
</script>
