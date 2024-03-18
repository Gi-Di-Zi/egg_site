<script setup>
import SalesAdd from "@/components/admin/SalesAdd.vue";
import SalesChange from "@/components/admin/SalesChange.vue";

import { onMounted } from "vue";
import { pageConfig } from "@/store";

const store = pageConfig();

const { changePage } = store;

onMounted(() => {
  changePage("관리자");
});
</script>

<template>
  <a-typography-title :level="2">관리자</a-typography-title>
  <div style="display: flex">
    <SalesAdd />
    <SalesChange />
  </div>
</template>
