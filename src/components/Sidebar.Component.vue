<template>
  <div style="background: rgb(27 27 27 / 89%)">
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="padding: 0 !important"
    >
      <div class="container-fluid" style="padding: 2% !important">
        <button
          class="navbar-toggler"
          style="background: white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <a class="navbar-brand text-white"><strong>M Y E</strong></a>
          <div class="navbar-nav me-auto"></div>
          <ul class="navbar-nav me-5 mb-lg-0">
            <li class="nav-item me-3">
              <router-link class="nav-link text-white" to="/">
                Inicio
              </router-link>
            </li>
            <li class="nav-item me-3">
              <router-link class="nav-link text-white" to="/proyectos">
                Proyectos
              </router-link>
            </li>
            <li class="nav-item me-3">
              <router-link class="nav-link text-white" to="/informacion">
                Informacion
              </router-link>
            </li>
            <li class="nav-item me-3">
              <router-link class="nav-link text-white" to="/contactenos">
                Contactenos
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
};
</script>