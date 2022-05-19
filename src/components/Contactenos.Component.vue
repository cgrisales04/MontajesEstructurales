<template>
  <div class="fondo-inicio">
    <div class="row gx-0">
      <div class="col-md-6" style="padding: 10% 0% 10% 15%">
        <h1
          class="mb-3 animate__animated animate__backInLeft"
          style="max-width: 70%"
        >
          <strong> Adquiere nuestros servicios </strong>
        </h1>
        <p
          style="max-width: 90%;font-size: 18px"
          class="animate__animated animate__backInLeft animate__delay-1s"
        >
          Celular: +57 3013501150 <br>
          Teléfono: 6005512 <br>
          Correo: mye.montajes0604@gmail.com
        </p>
        <a
          target="_blank"
          href="https://wa.me/+573013501150/?text=Hola Fredy estoy interesado en tu servicio."
          class="
            btn btn-warning
            animate__animated animate__backInLeft animate__delay-1s
          "
          ><img src="@/assets/whatsapp.png" alt="" width="35px" />Contactar</a
        >
      </div>
      <div
        class="col-md-6 animate__animated animate__fadeIn"
        style="padding: 3% 0% 0px 5%"
      >
        <img
          style="border-radius: 10px"
          src="@/assets/perfil.jpeg"
          alt=""
          width="400"
        />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ContactenosComponent",
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