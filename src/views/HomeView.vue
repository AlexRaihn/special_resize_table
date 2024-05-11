<script setup>
import { ref } from 'vue';
import BreadCrumb from '@/components/BreadCrumb.vue';
import ResizeTable from '@/components/ResizeTable.vue';
import AddInTable from '@/components/AddInTable.vue'
import FilterTable from '@/components/FilterTable.vue';

const onOpenDropDown = ref(false)
const onFilterList = ref(false)

const openDropDown = () => {
  if(onOpenDropDown.value == false) {
    onOpenDropDown.value = true
  } else {
    onOpenDropDown.value = false
    onFilterList.value = false
  }
}
const openList = () => {
  onFilterList.value = true
}
</script>

<template>
  <div>
    <span class="header">Проведение ТО и мелких ремонтых работ</span>
    
    <div style="display:flex; justify-content: space-between; align-items: center;">
      <div>
        <BreadCrumb/>
      </div>
      <div>
        <FilterTable :onOpen="onOpenDropDown" :onFilterList="onFilterList" @openDropDown="openDropDown" @openList="openList" />
      </div>
    </div>
    
    <AddInTable/>
    
    <ResizeTable/>
  </div>
</template>