<template>
  <div
    class="section bg-primary d-flex flex-column align-content-center justify-content-center p-3"
  >
    <div class="registration-section text-white">
      <div class="logo-small fw-700">Ciao @name!</div>
      <p class="lead fw-300 text-center text-secondary">
        Benvenuto su Ordi
        <br class="d-none d-md-block" />Aggiungi le info di base del tuo business
      </p>
    </div>

    <div class="row">
      <div class="col-12 col-md-4 offset-md-4">
        <form class="text-primary">
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
            <button class="btn text-white btn-register w-100 mt-5">Avanti</button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import FormInputComponent from "@/components/formInputs/FormInputComponent.vue";
import FormInputSelectComponent from "@/components/formInputs/FormInputSelectComponent.vue";

export default {
  name: "BusinessInfo",
  components: {
    FormInputComponent,
    FormInputSelectComponent
  },
  data() {
    return {
      options: ["Ristorante", "Enoteca", "Bar", "Altro"]
    };
  }
};
</script>
