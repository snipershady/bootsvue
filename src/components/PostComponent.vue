<script setup>
import { computed, ref } from "vue";

const tableData = ref([]);
const isArchived = ref(0);

const tableDataLen = computed(() => tableData.value.length);

function getData() {
  return fetch(`http://local.sym7vuebe.com/post/get-all?is_archived=${isArchived.value}`)
    .then((response) => response.json())
    .then((json) => {
      tableData.value = json;
    });
}

function archivePost(id) {
  fetch(`http://local.sym7vuebe.com/post/${id}/archive`, { method: "POST" })
    .then((response) => response.json())
    .then((json) => {
      console.log("Post archiviato:", json);
      getData(); // Aggiorna la lista dopo l'archiviazione
    });
}




getData();

/*
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
*/
</script>

<template>
  <div>
    <h2>Elenco Utenti - Tabella</h2>

    <div class="row">
      <div class="col">
        <label for="cars">Filtra i dati</label>
        <select class="form-control" v-model="isArchived">
          <option :value="1">Archiviate</option>
          <option :value="0">Attive</option>
        </select>
        <button class="btn btn-success mt-3 mb-5" @click="getData">Carica dati</button>
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
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in tableData" :key="post.id">
            <td>{{ post.id }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.subtitle }}</td>
            <td>{{ post.body }}</td>
            <td>
              <button class="btn btn-warning" @click="archivePost(post.id)">Archive</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="col">Numero di righe computed = {{ tableDataLen }}</div>
        <div class="col">Numero di righe = {{ tableData.length }}</div>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<style scoped></style>
