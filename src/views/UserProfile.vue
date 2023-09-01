<template>
  <v-container id="element-to-convert">
    <v-row>
      <v-col>
        <template>
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">
                  {{ this.name }} {{ this.gastoFiltered.lastName }}
                </div>
                <v-list-item-title class="text-h5 mb-1">
                  {{ gastoFiltered.email }}
                </v-list-item-title>
                <v-list-item-subtitle> </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </template>

        <h3 class="ma-10 text-center">{{ $route.params.id }}</h3>
        <div>
          <p>{{ this.gastoFiltered.firstName }}</p>
        </div>
      </v-col>
      <v-col class="elevation-11 rounded-lg">
        <template>
          <v-simple-table height="78vh">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Monto de gasto</th>
                  <th class="text-left">Descripción del gasto</th>
                  <th class="text-left">Tipo de gasto</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="gasto in gastoFiltered" :key="gasto.firstName">
                  <td>$ {{ gasto.spent }}</td>
                  <td>{{ gasto.descp }}</td>
                  <td>{{ gasto.selectedSelect }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="d-flex justify-space-between pa-4">
            <v-btn color="success" @click="exportToPDF">Export to PDF</v-btn>
            <v-btn color="primary" @click="$router.push('/admin')">Admin</v-btn>
          </div>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import html2pdf from "html2pdf.js";
export default {
  name: "user-profile-view",
  created() {
    this.getData(this.name);
    this.getName();
  },
  beforeCreate() {},
  data() {
    return {
      name: "",
      gastoFiltered: {},
    };
  },
  computed: {
    ...mapState(["gastos"]),
  },
  props: {},
  methods: {
    async getName() {
      this.name = this.$route.params.id;
      await this.getData(this.name); // Llama a getData después de obtener el nombre
      console.log("test", this.name);
    },
    async getData(name) {
      let info = this.gastos.filter((gasto) => gasto.firstName == name);
      console.log("info", info);
      this.gastoFiltered = info;
      console.log("gasto filtered", this.gastoFiltered);
    },
    exportToPDF() {
      html2pdf(document.getElementById("element-to-convert"), {
        margin: 1,
        filename: "reporte.pdf",
      });
    },
  },
  components: {},
};
</script>

<style scoped></style>
