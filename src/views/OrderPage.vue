<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div class="wrapper">
      <ProductCardComponent
        v-for="product in products"
        :key="product"
        :productName="product.name"
        :productAvailability="product.amount"
        :price="product.price"
        :vegan="product.vegan"
        :vegetarian="product.vegetarian"
        :spicy="product.spicy"
      ></ProductCardComponent>
    </div>
  </div>
</template>

<script>
import ProductCardComponent from "@/components/ProductCardComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "OrderPage",
  components: {
    ProductCardComponent,
    HeaderComponent
  },
  data() {
    return {
      products: [
        {
          name: "Mozzarella Bufala",
          amount: 8,
          vegan: false,
          vegetarian: true,
          spicy: false,
          price: "3.50"
        },
        {
          name: "Carpaccio Chianina",
          amount: 4,
          vegan: false,
          vegetarian: false,
          spicy: false,
          price: "8.00"
        },
        {
          name: "Tartare",
          amount: 0,
          vegan: false,
          vegetarian: false,
          spicy: true,
          price: "4.50"
        },
        {
          name: "Melanzane Grigliate",
          amount: 20,
          vegan: true,
          vegetarian: false,
          spicy: false,
          price: "4.50"
        },
        {
          name: "Melanzane Grigliate",
          amount: 20,
          vegan: true,
          vegetarian: false,
          spicy: false,
          price: "4.50"
        },
        {
          name: "Melanzane Grigliate",
          amount: 20,
          vegan: true,
          vegetarian: false,
          spicy: false,
          price: "4.50"
        },
        {
          name: "Melanzane Grigliate",
          amount: 20,
          vegan: true,
          vegetarian: false,
          spicy: false,
          price: "4.50"
        },
        {
          name: "Melanzane Grigliate",
          amount: 20,
          vegan: true,
          vegetarian: false,
          spicy: false,
          price: "4.50"
        },
        {
          name: "Melanzane Grigliate",
          amount: 20,
          vegan: true,
          vegetarian: false,
          spicy: false,
          price: "4.50"
        },
        {
          name: "Melanzane Grigliate",
          amount: 20,
          vegan: true,
          vegetarian: false,
          spicy: false,
          price: "4.50"
        },
        {
          name: "Melanzane Grigliate",
          amount: 20,
          vegan: true,
          vegetarian: false,
          spicy: false,
          price: "4.50"
        },
        {
          name: "Melanzane Grigliate",
          amount: 20,
          vegan: true,
          vegetarian: false,
          spicy: false,
          price: "4.50"
        }
      ]
    };
  }
};
</script>
