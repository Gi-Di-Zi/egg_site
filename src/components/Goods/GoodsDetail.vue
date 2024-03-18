<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { pageConfig } from "@/store";

const store = pageConfig();
const route = useRoute();

const { changePage } = store;

onMounted(() => {
  changePage("Goods (상세 페이지)");
  const id = route.params.id;
  console.log(id);
});
</script>

<template>
  <a-typography-title :level="2">디테일이당</a-typography-title>
</template>
