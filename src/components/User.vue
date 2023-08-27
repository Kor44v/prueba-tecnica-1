<template>
  <v-container class="box">
    <v-row justify="center">
      <v-col cols="6">
        <h3 class="text-center">Información del usuario</h3>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col class="">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="Nombre"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="">
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="Apellido"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex">
                <v-text-field
                  v-model="spent"
                  :rules="nameRules"
                  :counter="10"
                  label="Gasto"
                  required
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-select :items="gastos" label="Tipo de gasto"></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-file-input
              accept="image/*"
              label="Agrega el comprobante del gasto"
            ></v-file-input>
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Fecha de registro"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>
            <v-textarea
              outlined
              name="input-7-4"
              label="Descripción del gasto"
              value=""
            ></v-textarea>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "user-comp",
  created() {},
  data() {
    return {
      valid: false,
      firstname: "",
      lastname: "",
      nameRules: [
        (v) => !!v || "Nombre requerido.",
        (v) => v.length <= 10 || "El nombre debe tener almenos 10 caracteres.",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail es requerido",
        (v) => /.+@.+/.test(v) || "E-mail debe ser valido",
      ],
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu2: false,
      gastos: ["Comida", "Fijos", "Extras"], //se puede agregar más gastos
    };
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
.box {
  display: grid;
  height: 100vh;
  align-items: center;
}
</style>
