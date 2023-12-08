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

    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    
    <v-card title="Cliquez sur une des images pour en découvrir plus" 
              variant="tonal">
    </v-card>
  </v-container>
</template>