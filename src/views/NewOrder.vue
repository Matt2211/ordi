<template>
  <div>
    <HeaderComponent></HeaderComponent>

    <div class="col-12 col-md-4 offset-md-4 reg-form">
      <div class="col-12 mt-4 mb-4 text-center fw-500 text-primary">Urra! Nuovi Clienti! :D</div>
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
          <FormInputCheckRadioComponent type="checkbox" label="Ci sono allergici?"></FormInputCheckRadioComponent>
          <FormInputSelectComponent
            v-if="allergies"
            class="col-12"
            label="Tipo di Allergie"
            id="businessType"
          ></FormInputSelectComponent>
        </div>

        <router-link to="/">
          <button class="btn text-white btn-register m-auto d-block">GENERA TAVOLO</button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
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
    HeaderComponent,
    FormInputCheckRadioComponent
  },
  methods: {}
};
</script>
