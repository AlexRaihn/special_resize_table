<script setup>
import SideBar from './components/SideBar.vue';
</script>

<template>
  <div class="app_container">
    <SideBar/>
    <div style="margin-top: 25px;">
      <router-view/>
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: 'MyriadPro-Regular';
  src: url('~@/assets/fonts/8143.otf');
}
#app {
  font-family: 'MyriadPro-Regular';
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000;
}
.header {
  font-size: 30px;
}
.app_container {
  display: flex;
}
.container{
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 20px 0 var(--black-7);
    border: solid 1px #eeeff1;
    background-color: #fff;
}
</style>
