<template>
  <div class="form-group mb-0">
    <label :for="id">{{ label }}</label>
    <input :id="id" :type="type" class="form-control" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: "FormInputComponent",
  data() {
    return {};
  },
  props: {
    type: {
      type: String,
      required: true,
      validator: function(value) {
        return ["text", "email", "password", "number"].indexOf(value) !== 1;
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
