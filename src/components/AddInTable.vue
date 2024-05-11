<script setup>
import {list} from '../store/index.ts'

const AddNewItem = () => {
    let ItemId = list.value.length
    list.value.push({ name: 'Example', price: 0, count: 0, product_name: 'Example', result: 0, id: ItemId })
}
</script>

<template>
    <div class="container" style="width: 100%">
        <div>
            <button @click="AddNewItem()">
                <img src="../assets/svg/addButton.svg"/>
                Добавить строку
            </button>
        </div>
    </div>
</template>

<style scoped>
button{
    padding: 10px 15px 10px 10px;
    border-radius: 5px;
    background-color: #2f8cff;
    font-size: 14px;
    color: #fff;
    border: none;
    outline: none;
}
button:hover{
    cursor: pointer;
}
</style>