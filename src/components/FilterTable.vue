<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import FilterList from './FilterList.vue'

defineProps({
    onOpen: Boolean,
    onFilterList: Boolean
})

const emit = defineEmits(['openDropDown', 'openList'])
</script>

<template>
    <div style="position: relative; width: 100%; display: flex; justify-content: right;">
        <img src="../assets/svg/settings.svg" @click="emit('openDropDown')"/>
        <div class="label_cont container" v-if="onOpen">
                <div class="label_item" v-if="!onFilterList" @click="emit('openList')">Отображение столбцов ></div>
                <FilterList v-else/>
        </div>
    </div>
</template>

<style scoped>
.label_item:hover {
    background-color: #eef3f8;
    cursor: pointer;
}
.label_cont {
    font-size: 14px;
    position: absolute;
    padding: 0 9px 7px 10px;
    z-index: 10;
    top: 100%;
    right: 0%;
}
</style>