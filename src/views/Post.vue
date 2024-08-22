<script setup>
import { ref } from 'vue'
import UsersTable from '@/components/UsersTable.vue'

</script>

<template>
  <div class="container-fluid">
  <div>
    <h1>Post</h1>
    <p>Tutti i post</p>
  </div>
</div>
<div class="container-fluid">
  <div id="app">
    <UsersTable />
  </div>
</div>
</template>
