<template>
  <div id="app" class="row gx-0">
    <SidebarComponent></SidebarComponent>
    <router-view style="height: 86.4vh"></router-view>
    <a
      target="_blank"
      href="https://wa.me/+573013501150/?text=Hola Fredy estoy interesado en tu servicio."
      class="whatsapp animate__animated animate__backInLeft animate__delay-1s" style="width: 5%"
      ><img src="@/assets/whatsapp.png" alt="" width="70px"
    /></a>
  </div>
</template>

<script>
import SidebarComponent from "./components/Sidebar.Component.vue";
export default {
  name: "App",
  components: {
    SidebarComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.whatsapp {
  position: fixed;
  right: 60px;
  text-align: end;
  bottom: 20px;
  
}
</style>
