<template>
  <div
    :class="{ 'card-disabled': this.productAvailability === 0 }"
    class="cardProduct rounded shadow-sm d-flex flex-column justify-content-between p-2"
  >
    <div class="product-name fw-500">{{ productName }}</div>

    <div class="product-specs d-flex align-items-center align-content-center">
      <i v-if="vegan" class="fas fa-leaf mr-2 vegan"></i>
      <i v-if="vegetarian" class="fas fa-salad mr-2 vegetarian"></i>
      <i v-if="spicy" class="fas fa-pepper-hot mr-2 spicy"></i>
    </div>

    <div
      class="product-availability d-flex justify-content-between align-content-center align-items-center"
    >
      <span class="product-info">Disponibilità:</span>
      <span
        class="availability-number"
        v-if="productAvailability >= 1"
        :class="checkAvailability()"
      >{{ productAvailability }}</span>
      <span class="availability-number" v-else :class="checkAvailability()">{{ soldOut }}</span>
    </div>
    <div class="product-availability d-flex justify-content-between">
      <span class="product-info">Prezzo:</span>
      <span class="product-value">€ {{ price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCardComponent",
  data() {
    return {
      available: "text-success",
      almostFinish: "text-warning",
      finished: "text-danger",
      soldOut: "Finito!"
    };
  },

  props: {
    productName: {
      type: String,
      required: true
    },
    productAvailability: {
      type: Number,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    vegan: {
      type: Boolean,
      required: false
    },
    vegetarian: {
      type: Boolean,
      required: false
    },
    spicy: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    checkAvailability() {
      if (this.productAvailability > 5) return this.available;
      else if (this.productAvailability === 0) return this.finished;
      else if (this.productAvailability <= 5) return this.almostFinish;
    }
  }
};
</script>
