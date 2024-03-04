<script setup>
import { ref, onMounted } from "vue";
import { pageConfig } from "@/store";

const store = pageConfig();

const { changePage } = store;

onMounted(() => {
  changePage("Goods");
});
const test = ref("굿즈");
</script>

<template>
  <h1>{{ test }}</h1>
</template>
