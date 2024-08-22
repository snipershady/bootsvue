<script setup>
import { ref } from "vue";

const tableData = ref([]);

function getData() {
  return fetch("https://apibootsvue.spinfo.it/post/get-all")
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
            <th>Titolo</th>
            <th>Sottotitolo</th>
            <th>Testo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in tableData" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.title }}</td>
            <td>{{ user.subtitle }}</td>
            <td>{{ user.body }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<style scoped></style>
