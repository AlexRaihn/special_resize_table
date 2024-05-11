import { ref } from 'vue'

// столбцы таблицы
export const headers = ref([
    {
        key: 'countItem',
        name: 'Номер строки',
        render: true
    },
    {
        key: 'edit',
        name: 'Действие',
        render: true
    },
    {
        key: 'name',
        name: 'Наименование единицы',
        render: true
    },
    {
        key: 'price',
        name: 'Цена',
        render: true
    },
    {
        key: 'count',
        name: 'Кол-во',
        render: true
    },
    {
        key: 'product_name',
        name: 'Название товара',
        render: true
    },
    {
        key: 'result',
        name: 'Итого',
        render: true
    },
])

// объекты из таблицы
export const list = ref([
        { name: 'Мраморный щебень фр. 2-5 мм, 25кг', price: 1231, count: 12, product_name: 'Мраморный щебень', result: 1231, id: 0 },
        { name: 'Мраморный щебень фр. 2-5 мм, 25кг (белый)', price: 1231, count: 12, product_name: 'Мраморный щебень', result: 1231, id: 1 },
        { name: 'Мраморный щебень фр. 2-5 мм, 25кг (вайт)', price: 1231, count: 12, product_name: 'Мраморный щебень', result: 1231, id: 2 },
        { name: 'Мраморный щебень фр. 2-5 мм, 25кг, возврат', price: 1231, count: 12, product_name: 'Мраморный щебень', result: 1231, id: 3 },
        { name: 'Мраморный щебень фр. 2-5 мм, 1т', price: 1231, count: 12, product_name: 'Мраморный щебень', result: 1231, id: 4 }
      ])

// для автокомплита, когда ищем товар, тут дожлна быть функция для работы с беком

export const autoList = ref([
    'Мраморный щебень фр. 2-5 мм, 25кг',
    'Мраморный щебень фр. 2-5 мм, 25кг (белый)',
    'Мраморный щебень фр. 2-5 мм, 25кг (вайт)',
    'Мраморный щебень фр. 2-5 мм, 25кг, возврат',
    'Мраморный щебень фр. 2-5 мм, 1т'
])