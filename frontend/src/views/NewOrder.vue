<template>
 <div
    class="section bg-primary d-flex flex-column align-content-center justify-content-center p-3"
  >
    <div class="registration-section text-white">
      <div class="logo-small fw-700">Nuovi Clienti</div>
      <p class="lead fw-300 text-center text-secondary">
        Benvenuto su Ordi
        <br class="d-none d-md-block" />Some copy here
      </p>
    </div>
    

     <div class="row">
      <div class="col-12 col-md-4 offset-md-4">
    
      <form class="text-primary">
        <div class="form-row">
          <FormInputComponent
            type="number"
            label="Identificativo Tavolo"
            placeholder="Nome o Numero"
            id="name"
            class="col-6"
          ></FormInputComponent>
          <FormInputComponent
            type="number"
            label="Numero di Persone"
            placeholder="Numero di Persone"
            id="totalSeats"
            class="col-6"
          ></FormInputComponent>
          <FormInputCheckRadioComponent type="checkbox" class="mt-3 text-white" label="Ci sono allergici?">

          </FormInputCheckRadioComponent>
          <FormInputSelectComponent
            v-if="allergies"
            class="col-12 mt-3"
            label="Tipo di Allergie"
            id="businessType"
          ></FormInputSelectComponent>
        </div>

        <router-link to="/TablesOverview">
          <button class="btn text-white btn-register m-auto d-block">Genera Tavolo</button>
        </router-link>
      </form>
      </div>
    </div>
  </div>
</template>

<script>
import FormInputComponent from "@/components/formInputs/FormInputComponent.vue";
import FormInputSelectComponent from "@/components/formInputs/FormInputSelectComponent.vue";
import FormInputCheckRadioComponent from "@/components/formInputs/FormInputCheckRadioComponent.vue";

export default {
  name: "BusinessInfo",
  data() {
    return {
      allergies: false
    };
  },
  components: {
    FormInputComponent,
    FormInputSelectComponent,
    FormInputCheckRadioComponent
  },
  methods: {}
};
</script>
