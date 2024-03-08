<script setup>
import { onMounted } from "vue";
import { pageConfig } from "@/store";

const store = pageConfig();

const { changePage } = store;

onMounted(() => {
  changePage("에피소드");
});
</script>

<template>
  <a-typography-title :level="2">현재 제작된 작품</a-typography-title>
</template>
