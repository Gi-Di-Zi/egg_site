<script setup>
import { onMounted } from "vue";
import { pageConfig } from "@/store";

const store = pageConfig();

const { changePage } = store;

onMounted(() => {
  changePage("");
});
</script>

<template>
  <a-typography-title :level="2">메인</a-typography-title>
</template>
