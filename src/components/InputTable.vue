<script setup>
import { defineProps, defineModel } from 'vue'
import AutoComplete from './AutoComplete.vue';

const props = defineProps({
    inputKey: String,
    index: Number
})

const inputValue = defineModel('inputValue')

</script>

<template>
    <div>
        <AutoComplete v-if="inputKey=='name'" :index="index"/>
        <input type="number" v-model="inputValue" v-if="inputKey=='price'">
        <input type="number" v-model="inputValue" v-if="inputKey=='count'">
        <input type="text" v-model="inputValue" v-if="inputKey=='product_name'">
        <input type="number" v-model="inputValue" v-if="inputKey=='result'">
    </div>
</template>

<style scoped>
input {
    border-radius: 5px;
    border: solid 1px #ccc;
    padding: 10px 3px 10px 15px;
    margin: 10;
    width: 80%;
    overflow: hidden;
}
</style>