<script setup>
import { reactive, ref, onMounted, watch } from "vue";
import { pageConfig } from "@/store";
import SampleOne from "@/components/Goods/SampleOne.vue";
import { supabase } from "@/utils/supabase";

const store = pageConfig();

const pageSize = 7;

const pagination = ref(6);

const totalItems = ref(0);

const currentEvent = ref("랭킹순");

const data = reactive([
  "랭킹순",
  "판매량순",
  "낮은 가격순",
  "높은 가격순",
  "최신순",
]);
const value = ref(data[0]);
const current = ref(1);
const goods = reactive({
  list: [],
});

const { changePage } = store;

onMounted(async () => {
  const { count } = await supabase
    .from("sales")
    .select("id", { count: "exact" })
    .eq("show", "true");
  // totalItems를 얻기 위한 쿼리
  totalItems.value = count;

  changePage("Goods");
  getGoodsList();
});

watch(current, () => {
  sortGoodsList(currentEvent.value);
});

async function getGoodsList() {
  const { data, error } = await supabase
    .from("sales")
    .select()
    .limit(pageSize)
    .range((current.value - 1) * pageSize, current.value * pageSize - 1);
  goods.list = data;
  console.log(goods.list);
  error;
}

async function sortGoodsList(event) {
  currentEvent.value = event;
  const { data } = await supabase
    .from("sales")
    .select()
    .range((current.value - 1) * pageSize, current.value * pageSize - 1);
  let sortedArray;
  if (event === "랭킹순") {
    getGoodsList();
  } else if (event === "판매량순") {
    sortedArray = data.sort((a, b) => b.count_sales - a.count_sales);
    goods.list = [...sortedArray];
  } else if (event === "낮은 가격순") {
    sortedArray = data.sort(
      (a, b) =>
        parseInt(a.price.replace(/,/g, "")) -
        parseInt(b.price.replace(/,/g, ""))
    );
    goods.list = [...sortedArray];
    console.log(data);
  } else if (event === "높은 가격순") {
    sortedArray = data.sort(
      (a, b) =>
        parseInt(b.price.replace(/,/g, "")) -
        parseInt(a.price.replace(/,/g, ""))
    );
    goods.list = [...sortedArray];
  } else if (event === "최신순") {
    sortedArray = data.sort(
      (a, b) => new Date(b.regist_time) - new Date(a.regist_time)
    );
    goods.list = [...sortedArray];
  }
}
</script>

<template>
  <a-typography-title :level="2">판매 상품</a-typography-title>
  <a-segmented
    v-model:value="value"
    :options="data"
    size="large"
    style="width: 443px; margin-top: 30px"
    @change="sortGoodsList"
  />
  <a-divider style="height: 1px; background-color: #000000" />
  <div style="display: flex; flex-wrap: wrap; justify-content: center">
    <SampleOne
      v-for="value in goods.list"
      :key="value.id"
      :data="value"
      style="margin-bottom: 30px; width: 30%; box-sizing: border-box"
    />
  </div>

  <a-pagination
    v-model:current="current"
    v-model:total="totalItems"
    v-model:page-size="pagination"
    show-less-items
  />
</template>
