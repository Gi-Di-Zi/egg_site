<script setup>
import { onMounted } from "vue";
import { pageConfig } from "@/store";

const store = pageConfig();

const { changePage } = store;

onMounted(() => {
  changePage("작가진");
});
</script>

<template>
  <a-typography-title :level="2">작가진</a-typography-title>
</template>
