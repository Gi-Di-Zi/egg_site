<script setup>
import { onMounted } from "vue";
import { pageConfig } from "@/store";

const store = pageConfig();

const { changePage } = store;

onMounted(() => {
  changePage("Contect");
});
</script>

<template>
  <a-typography-title :level="2">Contect</a-typography-title>
</template>
