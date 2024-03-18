<script setup>
import { onMounted } from "vue";
import { pageConfig } from "@/store";

const store = pageConfig();

const { changePage } = store;

onMounted(() => {
  changePage("세계관");
});
</script>

<template>
  <a-typography-title :level="2">세계관</a-typography-title>
</template>
