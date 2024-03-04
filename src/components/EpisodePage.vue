<script setup>
import { ref, onMounted } from "vue";
import { pageConfig } from "@/store";

const store = pageConfig();

const { changePage } = store;

onMounted(() => {
  changePage("에피소드");
});
const test = ref("episode");
</script>

<template>
  <h1>{{ test }}</h1>
</template>
