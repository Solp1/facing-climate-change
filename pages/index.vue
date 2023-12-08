<template>
  <v-container>
    <h1> Faire face au changement climatique</h1>

    <div class="images-container">
      <v-img
          class="v-slider__thumb"
          width="200"
          src="/img/industry.png"
          contain
          @click="$router.push({path: '/resources/industry'})"
          
        />

        <v-img
          class="v-slider__thumb"
          width="200"
          src="/img/transport.png"
          contain
          @click="$router.push({path: '/resources/transport'})"
        />

        <v-img
          class="v-slider__thumb"
          width="200"
          src="/img/construction.png"
          contain
          @click="$router.push({path: '/resources/construction'})"
        />
  
        <v-img
          class="v-slider__thumb"
          width="200"
          src="/img/agriculture.png"
          contain
          @click="$router.push({path: '/resources/agriculture'})"
        />
  
        <v-img
          class="v-slider__thumb"
          width="200"
          src="/img/electricity.png"
          contain
          @click="$router.push({path: '/resources/electricity'})"
        ></v-img>
    </div>

    <v-btn color="secondary-lighten-2" 
           variant="tonal" 
           location="center" 
           @click="$router.push({path: '/resources/ernest'})">
           Vers Ernest   
    </v-btn>

  </v-container>
</template>