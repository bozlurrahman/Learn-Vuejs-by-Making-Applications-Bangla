<template>
  <div id="app">
    <navbar></navbar>

    <div class="container">
    <div class="row">
      <div class="col-sm-9">
        <inventory></inventory>
      </div>
      <div class="col-sm-3">
        <cart></cart>
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
  mounted() {
    console.log(data);
  }
}
</script>

<style>
.container {
  padding-top: 10px;
}
</style>
