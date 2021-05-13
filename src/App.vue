<template>
  <div id="app">
    <navbar></navbar>

    <div class="container">
    <div class="row">
      <div class="col-sm-9">
        <inventory @newItemAdded="addCartItems" :items="items"></inventory>
      </div>
      <div class="col-sm-3">
        <cart @itemRemoved="removeItem" :items="cart"></cart>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Cart from './components/Cart';
import Inventory from "./components/Inventory";
import data from "./data";

export default {
  name: 'App',
  components: {
    Navbar,
    Cart,
    Inventory
  },
  data () {
    return {
      items: [],
      cart: []
    }
  },
  mounted() {
    this.items = data;
    // console.log(data);
  },
  methods: {
    addCartItems(item) {
      this.cart.push(item);
    },
    removeItem(index) {
      this.cart.splice(index, 1)
    }
  }
}
</script>

<style>
.container {
  padding-top: 10px;
}
</style>
