<template>
  <div class="fondo-inicio">
    <div class="row gx-0">
      <div class="col-md-6" style="padding: 10% 0% 10% 15%">
        <h1
          class="mb-3 animate__animated animate__backInLeft"
          style="max-width: 70%"
        >
          <strong> MONTAJES ESTRUCTURALES MyE </strong>
        </h1>
        <p
          style="max-width: 90%"
          class="animate__animated animate__backInLeft animate__delay-1s"
        >
          Somos una miniempresa dedicada al montaje de estructuras con toda
          clase de cubiertas y canoas. Contamos con una gran trayectoria y
          excelentes servicios para que nuestros clientes queden a gusto y
          satisfechos con nuestra labor.
        </p>
        <router-link
          class="
            btn btn-warning
            animate__animated animate__fadeIn animate__delay-1s
          "
          to="/informacion"
        >
          Mas información
        </router-link>
      </div>
      <div
        class="col-md-4 animate__animated animate__fadeIn"
        style="padding: 10% 0% 0 10%"
      >
        <img
          style="border-radius: 10px"
          src="@/assets/image27.jpeg"
          alt=""
          width="400"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: 'Incio',
  name: "InicioComponent",
};
</script>

<style scoped>
.fondo-inicio {
  background: linear-gradient(
    60deg,
    rgb(255 255 255) 0%,
    rgb(255 255 255) 70%,
    rgb(169 0 0) 70%
  );
}
</style>