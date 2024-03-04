<script setup>
import { ref, onMounted } from "vue";
import { pageConfig } from "@/store";

const store = pageConfig();

const { changePage } = store;

onMounted(() => {
  changePage("작가진");
});
const test = ref("author");
</script>

<template>
  <h1>{{ test }}</h1>
</template>
