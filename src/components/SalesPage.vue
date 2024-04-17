<script setup>
import { reactive, ref, onMounted, watch } from "vue";
import { pageConfig } from "@/store";
import GoodsCard from "@/components/Goods/GoodsCard.vue";
import { supabase } from "@/utils/supabase";

const store = pageConfig();

const loading = ref(false);

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
  loading: [],
});

const { changePage } = store;

onMounted(async () => {
  getGoodsList();
  changePage("Goods");

  const { count } = await supabase
    .from("sales")
    .select("id", { count: "exact" })
    .eq("show", "true");
  // totalItems를 얻기 위한 쿼리
  totalItems.value = count;
});

watch(current, () => {
  sortGoodsList(currentEvent.value);
});

async function getGoodsList() {
  loading.value = true;
  const { data } = await supabase
    .from("sales")
    .select()
    .filter("show", "eq", true)
    .limit(pagination.value)
    .range(
      (current.value - 1) * pagination.value,
      current.value * pagination.value - 1
    );
  goods.list = data;
  loading.value = false;
}

async function sortGoodsList(event) {
  loading.value = true;
  currentEvent.value = event;
  const { data } = await supabase
    .from("sales")
    .select()
    .filter("show", "eq", true)
    .range(
      (current.value - 1) * pagination.value,
      current.value * pagination.value - 1
    );
  let sortedArray;

  if (event === "랭킹순") {
    sortedArray = data;
    goods.list = [...sortedArray];
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
  loading.value = false;
}
</script>

<template>
  <a-typography-title :level="2">판매 상품</a-typography-title>
  <a-segmented
    v-model:value="value"
    :options="data"
    size="large"
    style="width: 443px; margin-top: 30px"
    class="segmented"
    @change="sortGoodsList"
  />
  <a-divider style="height: 1px; background-color: #000000" />
  <div style="display: flex; flex-wrap: wrap; justify-content: center">
    <a-spin size="large" v-if="loading" style="margin-top: 200px" />
    <GoodsCard
      v-else
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
