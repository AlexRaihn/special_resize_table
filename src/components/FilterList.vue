<script setup>
import { onMounted, ref } from 'vue';
import { headers } from '../store/index.ts'

const colFilter = async(index) => {
    if(filterHeaders.value[index].render == true) {
        await deleteItem(index)
    } else if (filterHeaders.value[index].render == false) {
        await addItem(index)
    }
}

const addItem = async(index) => {
    headers.value.push(filterHeaders.value[index])
    filterHeaders.value[index].render = true
}
const deleteItem = async(index) => {
    headers.value.splice(index, 1)
    filterHeaders.value[index].render = false
}

const filterHeaders = ref([])

onMounted(async()=> {
    filterHeaders.value = [...headers.value]
})
</script>
<template>
    <div>
        <div v-for="(item, index) in filterHeaders" :key="item.key" style="display: flex; justify-content: space-between;">
            <label style="text-align: left;" :for="item.name" v-if="index > 1">
                {{ item.name }}
            </label>
            <div v-if="index > 1">
                <input type="checkbox" checked :value="item.render" :id="item.name" @click="colFilter(index)">
            </div>
        </div>
    </div>
</template>