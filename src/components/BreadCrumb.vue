<template>
    <div class="routers_container">
        <div>
            <span>
            <router-link to="/about">Общее</router-link>
            </span>
            <span>
                <router-link to="/">Товары</router-link>
            </span>
            <span>
                <router-link to="/dop">Доп. расходы</router-link>
            </span>
        </div>
    </div>
</template>

<style scoped>
.routers_container{
    margin-top: 25px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
}
span {
    margin-right: 25px;
    font-weight: 600;
}
a {
    color: #1253a2;
    text-decoration: none;
}
a:visited {
    color: #1253a2;
    text-decoration: none;
}
a:hover {
    color: #000000;
}
a.router-link-exact-active {
    color: #000000;
}
</style>