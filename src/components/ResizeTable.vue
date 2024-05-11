<script setup>
import { ref, computed, onMounted } from 'vue'
import {headers, list} from '../store/index.ts'
import draggable from 'vuedraggable'
import InputTable from './InputTable.vue'
import DeleteButton from './DeleteButton.vue'

const dragForRows = computed(() => {
  return {
    animation: 200,
    group: '2',
    disabled: false,
    ghostClass: 'ghost'
  }
})

const dragForCols = computed(() => {
  return {
    animation: 200,
    group: '1',
    disabled: false,
    ghostClass: 'ghost_cols'
  }
})

const colsLen = ref()

onMounted(async() => {
    colsLen.value = headers.value.length
})
</script>

<template>
    <div class="container" style="width: 100%;">
        <table>
            <thead>
                <draggable v-model="headers" tag="tr" :item-key="key => key" v-bind="dragForCols" class="cursor_td" draggable=":not(.exclude-this-item)">
                    <template #item="{ element, index: count }">
                    <th v-if="count >= 2">
                       {{ element.name }}
                    </th>
                    <th v-else style="resize: none; overflow: none; width: 20px;" draggable="false" class="exclude-this-item">
                    </th>
                    </template>
                </draggable>
            </thead>
            <draggable :list="list" tag="tbody" item-key="id" v-bind="dragForRows" handle=".handle">
                <template #item="{ element, index }">
                    <tr>
                        <td class="handle cursor_td"><img src="../assets/svg/burger.svg"/>{{ index+1 }}</td>
                        <td>
                            <DeleteButton :index="index"/>
                        </td>
                        <template v-for="(ind) in colsLen" :key="ind">
                            <td v-if="((ind) < headers.length) && (ind > 1)">
                                <InputTable :inputKey="headers[ind].key" v-model:inputValue="element[headers[ind].key]" :index="index"/>
                            </td>

                        </template>
                    </tr>
                </template>
            </draggable>
        </table>
    </div>
</template>

<style scoped>
.cursor_td:hover{
    cursor: all-scroll;
}
th {
    min-width: 2px;
    resize: horizontal; 
    overflow: hidden;
    padding-right: 10px;
}
td {
    text-align: center;
    overflow: hidden;
}
th::-webkit-resizer {
    border-right: 1px solid black;
}
th::-webkit-resizer:hover {
    border-right: none;
}
.ghost{
    padding: 0;
    height: 35px;
    width: 100%;
    border-radius: 5px;
    border: 5px solid #a6b7d4;
    background-color: #fbfcfd;
}
.ghost_cols{
    margin: 0;
    padding: 0;
    background-color: #a6b7d4;
}
</style>