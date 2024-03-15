<script setup>
import { onMounted, reactive } from "vue";
import { supabase } from "@/utils/supabase";
import SampleLine from "@/components/admin/SampleLine.vue";

const goods = reactive({
  list: [],
});

onMounted(() => {
  getSalesList();
});

async function getSalesList() {
  const { data } = await supabase.from("sales").select();
  console.log(data);
  goods.list = data;
}
</script>

<template>
  <a-card style="width: 800px; display: block">
    <template #cover>
      <a-typography-title :level="2">제품 변경</a-typography-title>
    </template>
    <SampleLine
      v-for="(value, index) in goods.list"
      :key="index"
      :data="value"
      :index="index"
      @updateList="getSalesList"
    />
  </a-card>
</template>
