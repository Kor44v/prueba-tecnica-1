<template>
  <v-container class="container">
    <v-row>
      <v-col>
        <User />
      </v-col>
      <v-col>
        <Results />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import User from "@/components/User.vue";
import Results from "@/components/Results.vue";
export default {
  name: "Home-view",

  components: {
    User,
    Results,
  },
};
</script>
<style scoped>
.container {
  background-color: #fff;
}
</style>
