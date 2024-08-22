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
    <div v-if="tableData.length > 0">
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
          <tr v-for="post in tableData" :key="post.id">
            <td>{{ post.id }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.subtitle }}</td>
            <td>{{ post.body }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<style scoped></style>
