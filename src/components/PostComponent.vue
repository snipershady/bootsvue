<script setup>
import { computed, ref } from "vue";

const tableData = ref([]);
const tableDateude = ref([]); //variabile inutile
const tableDataLen = computed(()=> tableData.value.length)

function getData() {
  return fetch("http://local.sym7vuebe.com/post/get-all")
    .then((response) => response.json())
    .then((json) => {
      tableData.value = json;
    });
}


getData();

setTimeout(() => {
  tableData.value.push({
    id: 1,
    title: "La compagnia dell'anello",
    body: "mammt",
    date: "2024-08-22T10:04:45+00:00",
    featured: true,
    subtitle: "di JRR Tolkien",
    isArchived: false,
    slug: "la-compagnia-dell-anello",
    views: 0,
  });
}, 2000);
</script>

<template>
  <div>
    <h2>Elenco Utenti - Tabella</h2>

    <div class="row">
      <div class="col">
        <label for="cars">Choose a car:</label>
        <select class="form-select" name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
        </select>
      </div>
    </div>

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
      <div class="row">
        <div class="col">Numero di righe computed = {{ tableDataLen }}</div>
        <div class="col">Numero di righe  = {{ tableData.length }}</div>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<style scoped></style>
