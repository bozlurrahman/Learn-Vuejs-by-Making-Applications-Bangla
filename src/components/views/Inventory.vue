<template>
    <div class="row">
        <div v-for="(item, index) in items" :key="index" class="card" style="width: 15rem;">
            <img class="card-img-top" :src="item.photo" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{item.title}}</h5>
                <p class="card-text">${{item.price}}</p>
                <a @click="addToCart(item)" class="btn btn-primary">+ add</a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    // props: ['items'],
    data () {
        return {
            items: []
        }
    },
    mounted() {
        this.fetchInventory()
    },
    methods: {
        addToCart(item) {
            this.$emit('newItemAdded', item)
        },
        fetchInventory() {
            var self = this;
            axios.get('http://localhost:3000/items').then(response => {
                console.log('res: ', response);
                self.items = response.data;
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
