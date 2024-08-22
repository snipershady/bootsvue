<script setup>
import { ref } from "vue";

const tableData = ref([]);

function getData() {
  return fetch("http://local.sym7vue.com/get_all_user")
    .then((response) => response.json())
    .then((json) => {
      tableData.value = json;
    });
}

getData();
</script>

<template>
  <div>
    <h2>Elenco Utenti - Tabella</h2>
    <div v-if="tableData">
      <table class="table table-striped">
        <thead class="table-success">
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Cognome</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in tableData" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.nome }}</td>
            <td>{{ user.cognome }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>mammt</div>
  </div>
</template>

<style scoped></style>
