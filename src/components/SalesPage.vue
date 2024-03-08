<script setup>
import { reactive, ref, onMounted } from "vue";
import { pageConfig } from "@/store";
import SampleOne from "@/components/Goods/SampleOne.vue";

const store = pageConfig();

const data = reactive([
  "랭킹순",
  "판매량순",
  "낮은 가격순",
  "높은 가격순",
  "최신순",
]);
const value = ref(data[0]);
const current = ref(1);

const { changePage } = store;

onMounted(() => {
  changePage("Goods");
});
</script>

<template>
  <a-typography-title :level="2">판매 상품</a-typography-title>
  <a-segmented
    v-model:value="value"
    :options="data"
    size="large"
    style="width: 443px; margin-top: 30px"
  />
  <a-divider style="height: 1px; background-color: #000000" />
  <div style="display: flex">
    <SampleOne />
    <SampleOne />
    <SampleOne />
  </div>
  <div style="display: flex">
    <SampleOne />
    <SampleOne />
    <SampleOne />
  </div>
  <a-pagination v-model:current="current" :total="50" show-less-items />
</template>
