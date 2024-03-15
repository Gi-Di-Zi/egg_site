<script setup>
import { reactive, ref, onMounted } from "vue";
import { pageConfig } from "@/store";
import SampleOne from "@/components/Goods/SampleOne.vue";
import { supabase } from "@/utils/supabase";

const store = pageConfig();

const data = reactive([
  "랭킹순",
  "판매량순",
  "낮은 가격순",
  "높은 가격순",
  "최신순",
]);
const value = ref(data);
const current = ref(1);
const goods = reactive({
  list: [],
});

const { changePage } = store;

onMounted(() => {
  changePage("Goods");
  getGoodsList();
});

async function getGoodsList() {
  const { data, error } = await supabase.from("sales").select();
  goods.list = data;
  console.log(goods.list);
  error;
}
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
  <div style="display: flex; flex-wrap: wrap; justify-content: center">
    <SampleOne
      v-for="(value, index) in goods.list"
      :key="index"
      :data="value"
      style="margin-bottom: 30px; width: 30%; box-sizing: border-box"
    />
  </div>

  <a-pagination v-model:current="current" :total="50" show-less-items />
</template>
