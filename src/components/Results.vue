<template>
  <v-container>
    <v-row>
      <v-col class="elevation-11 rounded-lg pa-10">
        <h3>Resultados</h3>
        <template>
          <v-simple-table height="78vh">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Gasto</th>
                  <th class="text-left">Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="resultado in resultados" :key="resultado.id">
                  <td>{{ resultado.id }}</td>
                  <td>{{ resultado.result }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "result-comp",
  created() {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["resultados"]),
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
v-container {
  height: 300px;
}
</style>
