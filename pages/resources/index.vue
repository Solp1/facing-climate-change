<template>
  <v-container >
    <h2>Ressources</h2>

    <v-row align-content="start">
      <v-col
          v-for="resource in resources"
          :key="resource.id"
          md="4"
          sm="6"
          xs="6"
      >
        <v-card
            :text="resource.description"
            :title="resource.title"
            :to="`/${route.name}/${resource.path}`"
            class="my-3"
        />
      </v-col>
    </v-row>
  </v-container>

</template>

<script setup>
const route = useRoute();

const { data: resources } = await useAsyncData('resources', () => queryContent('/resources').find())
</script>