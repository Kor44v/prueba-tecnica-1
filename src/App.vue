<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>
#app {
  /* Otras propiedades de estilo para el contenedor principal si es necesario */
  background-image: url("../src/assets/assets-cached.jpg"); /* Reemplaza con la URL de tu imagen */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 100vh; /* Ajusta esto según tus necesidades */
}
</style>
