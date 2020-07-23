<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <select :id="id" class="form-control" :placeholder="placeholder">
      <option selected disabled>Seleziona...</option>
      <option v-for="option in options" :key="option" :value="option" v-text="option" />
    </select>
  </div>
</template>

<script>
export default {
  name: "FormInputSelectComponent",
  props: {
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
    },
    options: {
      type: Array,
      default: () => []
    }
  }
};
</script>
