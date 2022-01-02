<template>
  <div>
    <navbar :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal"></navbar>
    <h1 class="text-center mt-0">Danny's Shop</h1>
    <p>Test and buy stuff</p>
    <product-list :modalPhoto="modalPhoto" :products="products"></product-list>
  </div>
</template>
<script>
import Navbar from "./Navbar.vue";
import ProductList from "./ProductList.vue";

export default {
  name: "products",
  props: [
    "products",
    "cart",
    "cartQty",
    "cartTotal",
    "modalPhoto"
  ],
  components: {
    Navbar,
    ProductList
  }
};
</script>
