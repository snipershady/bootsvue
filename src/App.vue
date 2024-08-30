<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
</script>

<template>   
  <NavBar />
  <SideBar />
  <RouterView />
</template>

<style scoped>
/* Aggiungi qui i tuoi stili personalizzati */
</style>
