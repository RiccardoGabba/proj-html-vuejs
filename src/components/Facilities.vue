<template>
    
    <div>
        <h2>{{ title }}</h2>
        <img :src="image">
        <p>{{ text }}</p>
        <button type="button" class="btn btn-outline-primary">{{ button }}</button>
    </div>

</template>

<script>
import { store } from '../data/store';
export default {
    name:'Facilities',
    props:{
        title: String,
        image: String,
        text: String,
        button: String,

    },
    data(){
        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
