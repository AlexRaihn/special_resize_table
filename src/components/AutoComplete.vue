<script setup>
import { defineProps, ref, onMounted, watch } from 'vue'
import { autoList, list } from '../store/index.ts'

const props = defineProps({
    index: Number
})

const inputValue = ref(list.value[props.index].name)
const onFocus = ref(false)
const changArr = ref([])

const filterItems = () => {
    if (inputValue.value.trim() === '') {
        changArr.value = [...autoList.value]
    } else {
        changArr.value = autoList.value.filter(item => item.toLowerCase().includes(inputValue.value.toLowerCase()))
    }
}

const inputFocus = async(focus) => {
    setTimeout(() => {
        if(focus == false) {
            list.value[props.index].name = inputValue.value
        }
        onFocus.value = focus
    }, 100)
}  

const selectItem = (item) => {
    inputValue.value = item
}

onMounted(async() => {
    changArr.value = [...autoList.value]
})

watch(inputValue, async() => {
    filterItems()
})
</script>

<template>
    <div style="width: 100%;">
        <input type="text" v-model="inputValue" @blur="inputFocus(false)" @focus="inputFocus(true)">
        <div class="items-cont" v-if="onFocus">
            <div class="item" v-for="item in changArr" :key="item" @click="selectItem(item)">
                {{ item }}
            </div>
        </div>
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
.items-cont {
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0 0 3px 0 #000, inset 0 1px 2px 0 rgba(255, 255, 255, 0.5);
    background-color: #fff;
    font-size: 14px;
    text-align: left;
}
.item:hover {
    background-color: #ccc;
}
</style>