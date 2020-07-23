<template>
  <div class="form-check">
    <input :id="id" :type="type" class="form-check-input" :placeholder="placeholder" />
    <label :for="id" class="form-check-label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "FormInputCheckRadioComponent",
  props: {
    type: {
      type: String,
      required: true,
      validator: function(value) {
        return ["checkbox, radio, toggle"].indexOf(value) !== 1;
      }
    },
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: null
    },
    placeholder: {
      type: String,
      required: false,
      default: null
    }
  }
};
</script>
