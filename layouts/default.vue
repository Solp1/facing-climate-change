<template>
  <v-app>
    <!-- .... -->
    <global-navbar></global-navbar>
    <NuxtPage style="margin-top: 50px;"></NuxtPage>
  </v-app>
</template>
<script setup lang="ts">
import GlobalNavbar from "~/components/globalNavbar.vue";
</script>