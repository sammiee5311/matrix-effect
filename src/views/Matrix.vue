<template>
  <matrixCanvas :text="textQuery"/>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from 'vue-router'

import matrixCanvas from "../components/Matrix.vue";

const route = useRoute() 
const textQuery = computed(() => route.query.text ? route.query.text.toString() : "matrix")

</script>

<style scoped>
</style>
