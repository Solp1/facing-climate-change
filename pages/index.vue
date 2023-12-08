<template>
  <v-container>
    <h1> Faire face au changement climatique</h1>

    <v-btn color="secondary-lighten-2" 
           variant="tonal" 
           location="center" 
           @click="$router.push({path: '/resources/ernest'})">
           Vers Ernest   
    </v-btn>
    <div class="images-container">
      <v-img
          class="bg-white"
          width="200"
          :aspect-ratio="1"
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          cover
          @click="$router.push({path: '/resources/ernest'})"
        />

        <v-img
          class="bg-white"
          width="200"
          :aspect-ratio="1"
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          cover
          @click="$router.push({path: '/resources/ernest'})"
        />

        <v-img
          class="bg-white"
          width="200"
          :aspect-ratio="1"
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          cover
          @click="$router.push({path: '/resources/ernest'})"
        />
  
        <v-img
          class="bg-white"
          width="200"
          :aspect-ratio="1"
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          cover
          @click="$router.push({path: '/resources/ernest'})"
        />
  
        <v-img
          class="bg-white"
          width="200"
          :aspect-ratio="1"
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          cover
          @click="$router.push({path: '/resources/ernest'})"
        ></v-img>
    </div>

  </v-container>
</template>