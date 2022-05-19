<template>
  <div class="fondoInformacion">
    <div class="container">
      <h3 class="text-center mb-4 mt-4"><strong>Informacion</strong></h3>
      <div
        class="row justify-content-around"
        style="overflow-y: auto !important; height: 540px"
      >
        <div
          class="col-md-5 pt-5 card-container animate__animated animate__fadeIn"
        >
          <div
            class="card b-shadow p-2 pt-5"
            style="border-left: 40px solid #dc3545"
          >
            <div class="d-flex justify-content-center">
              <ion-icon
                name="analytics-outline"
                class="bg-danger float-icon"
              ></ion-icon>
            </div>

            <h3 class="title-target text-center">
              <strong>Trayectoria</strong>
            </h3>
            <div class="ps-3 pe-3">
              <p class="dark-color">
                En Montajesestructurales Jhonbbi contamos con una gran
                trayectoria y experiencia trabajando con miniempresas e
                ingenieros particulares. Algunas de estas empresas son:
              </p>
            </div>
            <ul>
              <li>Manoplas</li>
              <li>Construacero</li>
              <li>Arquitectura Audiovisual</li>
              <li>Soldo Montajes</li>
              <li>Poliplas y más...</li>
            </ul>
          </div>
        </div>

        <div
          class="
            col-md-5
            pt-5
            card-container
            animate__animated animate__fadeIn animate__delay-1s
          "
        >
          <div
            class="card b-shadow p-2 pt-5 h-100"
            style="border-left: 40px solid #dc3545"
          >
            <div class="d-flex justify-content-center">
              <ion-icon
                name="ribbon-outline"
                class="bg-danger float-icon"
              ></ion-icon>
            </div>
            <h3 class="title-target text-center"><strong>Misión</strong></h3>
            <div class="ps-3 pe-3">
              <p class="dark-color">
                Nuestra misión es terminar nuestro trabajo a disposición de
                nuestros clientes, con mucha responsabilidad y entrega;
                garantizando así que nuestros clientes quedarán satisfechos con
                nuestro trabajo.
              </p>
            </div>
          </div>
        </div>

        <div class="row justify-content-around">
          <div
            class="
              col-md-5
              pt-5
              card-container
              animate__animated animate__fadeIn animate__delay-2s
            "
          >
            <div
              class="card b-shadow p-2 pt-5 h-100"
              style="border-left: 40px solid #dc3545"
            >
              <div class="d-flex justify-content-center">
                <ion-icon
                  name="rocket-outline"
                  class="bg-danger float-icon"
                ></ion-icon>
              </div>
              <h3 class="title-target text-center"><strong>Visión</strong></h3>
              <div class="ps-3 pe-3">
                <p class="dark-color">
                  Nuestra visión es contar a futuro con varias sucursales en el
                  país, para ofrecer así nuestros servicios a una mayor cantidad
                  de clientes.
                </p>
              </div>
            </div>
          </div>

          <div
            class="
              col-md-5
              pt-5
              card-container
              animate__animated animate__fadeIn animate__delay-3s
            "
          >
            <div
              class="card b-shadow p-2 pt-5 h-100"
              style="border-left: 40px solid #dc3545"
            >
              <div class="d-flex justify-content-center">
                <ion-icon
                  name="barbell-outline"
                  class="bg-danger float-icon"
                ></ion-icon>
              </div>
              <h3 class="title-target text-center">
                <strong>Objetivos</strong>
              </h3>
              <div class="ps-3 pe-3">
                <p class="dark-color">
                  Nuestro objetivo principal es llegar a ser una de las mejores
                  empresas de montajes del país, trabajando siempre con la mejor
                  calidad y los mejores servicios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformacionComponent",
};
</script>

<style scoped>
.title-target text-center {
  background: #9f0000;
  color: white;
  padding: 5px;
  border-radius: 5px 0px 5px 0px;
}
.align {
  align-items: end;
}
.icon-position {
  position: relative;
  /* top: 30px; */
}
.b-shadow {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px;
}
.card-container {
  position: relative;
}
.card-container:hover {
  transition: 0.3s ease-in-out;
  transform: scale(1.1);
  cursor: pointer;
}
.float-icon {
  position: absolute;
  top: -30px;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 20px;
  font-size: 25px;
  color: #fff;
}
.dark-color {
  color: #848181;
}
</style>
