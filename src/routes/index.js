import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: "history",
    props: true,
    routes: [
        { path: '/', name: 'InicioComponent', component: () => import("@/components/Inicio.Component.vue") },
        { path: '/proyectos', name: 'ProyectosComponent', component: () => import("@/components/Proyectos.Component.vue") },
        { path: '/informacion', name: 'InformacionComponent', component: () => import("@/components/Informacion.Component.vue") },
        { path: '/contactenos', name: 'ContactenosComponent', component: () => import("@/components/Contactenos.Component.vue") }
    ]
})

export default router;