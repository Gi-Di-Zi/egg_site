<script setup>
import SalesAdd from "@/components/admin/SalesAdd.vue";
import SalesChange from "@/components/admin/SalesChange.vue";
</script>

<template>
  <a-typography-title :level="2">관리자</a-typography-title>
  <div style="display: flex">
    <SalesAdd />
    <SalesChange />
  </div>
</template>
