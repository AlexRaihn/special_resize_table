<script setup>
import { defineProps } from 'vue'
import { list } from '../store/index.ts'

const props = defineProps({
    index: Number
})

const deleteItem = async(event) => {
    let selectedOption = event.target.value;
    if(selectedOption === "Удалить") {
        list.value.splice((props.index), 1)
    }
}
</script>

<template>
    <div style="position: relative; width: 100%;">
        <select class="svg_delete" @change="deleteItem($event)">
            <option></option>
            <option style="color: #ae0a0a;">Удалить</option>
        </select>  
    </div>
</template>

<style scoped>
select {
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;
    background-image: url("../assets/svg/delete.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border:0px;
    outline:0px;
}
option{
    background-color: white;
    outline: none;
    border: 1px solid white;
}
.svg_delete:hover{
    cursor: pointer;
}
.click_delete{
    font-size: 14px;
    height: 20px;
    z-index: 100;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 0 3px 0 #000, inset 0 1px 2px 0 rgba(255, 255, 255, 0.5);
    background-color: #fff;
}
</style>