<script setup>
import { ref, onMounted } from "vue";
import { pageConfig } from "@/store";

const store = pageConfig();

const { changePage } = store;

onMounted(() => {
  changePage("Contect");
});
const test = ref("Contect");
</script>

<template>
  <h1>{{ test }}</h1>
</template>
