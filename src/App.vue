<template>
  <div id="app">
    <navbar></navbar>

    <div class="container">
    <div class="row">
      <div class="col-sm-9">
        <inventory @newItemAdded="addCartItems" :items="items"></inventory>
      </div>
      <div class="col-sm-3">
        <cart :items="cart"></cart>
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
      cart: [{
        id: 1,
        title: 'test',
        price: '$0.97',
        photo: 'http://dummyimage.com/100x100.png/ff4444/ffffff'
      }]
    }
  },
  mounted() {
    this.items = data;
    // console.log(data);
  },
  methods: {
    addCartItems(item) {
      this.cart.push(item);
    }
  }
}
</script>

<style>
.container {
  padding-top: 10px;
}
</style>
