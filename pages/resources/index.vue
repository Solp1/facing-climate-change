<template>
  <v-container>
    <h1>Ressources</h1>

    <v-row align-content="start">
      <v-col
          v-for="resource in resources"
          :key="resource.id"
          md="4"
          sm="6"
          xs="6"
      >
        <v-card
            hover
            height="200px"
            :text="resource.description"
            :title="resource.title"
            :to="`/${route.name}/${resource.path}`"
            class="my-3"
            color="primary-lighten-2"
        />
      </v-col>
    </v-row>
  </v-container>

</template>

<script setup>
const route = useRoute();

const { data: resources } = await useAsyncData('resources', () => queryContent('/resources').find())
</script>