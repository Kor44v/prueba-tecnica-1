<template>
  <v-container>
    <v-row>
      <v-col>
        <template>
          <v-simple-table height="78vh">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Empleado</th>
                  <th class="text-left">Monto gasto</th>
                  <th class="text-left">Tipo gasto</th>
                  <th class="text-left">decision</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(gasto, index) in gastos" :key="index">
                  <td>
                    <a
                      href=""
                      @click.prevent="$router.push(`/admin/${gasto.firstName}`)"
                      >{{ gasto.firstName }}-{{ index }}</a
                    >
                  </td>
                  <td>$ {{ gasto.spent }}</td>
                  <td>{{ gasto.selectedSelect }}</td>
                  <td>
                    <v-btn class="mr-3" color="success" @click="test"
                      >Aceptar</v-btn
                    >
                    <v-btn color="error">Rechazar</v-btn>
                  </td>
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
export default {
  name: "gastos-comp",
  created() {},
  data() {
    return {};
  },
  props: {
    gastos: {
      type: Array,
      required: true,
    },
  },
  methods: {
    test() {
      console.log(index);
    },
  },
};
</script>

<style scoped></style>
