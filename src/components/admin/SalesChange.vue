<script setup>
import { onMounted, reactive } from "vue";
import { supabase } from "@/utils/supabase";
import SalesLine from "@/components/admin/SalesLine.vue";

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
  <a-card style="width: 100%">
    <template #cover>
      <a-typography-title :level="2">제품 변경</a-typography-title>
    </template>
    <SalesLine
      v-for="(value, index) in goods.list"
      :key="index"
      :data="value"
      :index="index"
      @updateList="getSalesList"
    />
  </a-card>
</template>
