<template>
  <v-container class="container">
    <v-row>
      <v-col class="rounded-lg elevation-11">
        <h3 class="text-center">Admin view</h3>
        <Gastos :gastos="gastos" />
        <v-btn color="primary" class="align-self-end" @click="$router.push('/')"
          >Home</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import Gastos from "@/components/TablaGastos.vue";
export default {
  name: "admin-view",
  created() {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["gastos"]),
  },
  props: {},
  methods: {},
  components: {
    Gastos,
  },
};
</script>

<style scoped>
.container {
  background-color: #fff;
}
</style>
