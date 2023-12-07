<template>
    <v-container >
      <h1>About</h1>

      <v-img
        class="bg-white"
        width="300"
        :aspect-ratio="1"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        cover
        @click="$router.push({path: '/resources/ernest'})"
      ></v-img>
    </v-container>
  </template>