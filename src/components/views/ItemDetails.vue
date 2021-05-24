<template>
    <div v-if="item" class="row">
        <div class="col-sm-6">
            <img :src="item.photo" alt="Photo" />
        </div>
        <div class="col-sm-6">
            <h4>{{item.title}}</h4>
            <p>{{item.description}}</p>
            <p>{{item.price}}</p>
            
        </div>
    </div>
    <h3 v-else>Loading...
    </h3>
</template>

<script>
import axios from "axios";
export default {
    props: [],
    computed: {
    },
    data () {
        return {
            item: null
        }
    },
    mounted() {
        this.fatchItem();
    },
    methods: {
        fatchItem() {
            var self= this;
            axios.get('http://localhost:3000/item/' + this.$route.params.id ).then( response => {
                self.item = response.data;
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
