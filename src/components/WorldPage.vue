<script setup>
import { ref, onMounted } from "vue";
import { pageConfig } from "@/store";

const store = pageConfig();

const { changePage } = store;

onMounted(() => {
  changePage("월드");
});

const test = ref("월드");
</script>

<template>
  <h1>{{ test }}</h1>
</template>
