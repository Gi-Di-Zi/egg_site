<script setup>
import { PlusCircleFilled } from "@ant-design/icons-vue";
import { defineProps, onMounted, ref } from "vue";
import { router } from "@/router";

const props = defineProps({
  // toRefs를 이용하여 reactive 프로퍼티를 unwrap
  data: Object,
});

const moveToDetail = () => {
  router.push({ name: "goods-detail", params: { id: props.data.id } });
};

onMounted(async () => {
  console.log(props.data);
});

const imagePath = ref(
  `${process.env.VUE_APP_SUPABASE_URL}/storage/v1/object/public/image/${props.data.picture_main}`
);
</script>

<template>
  <a-card
    style="
      flex: 1;
      display: block;
      margin: 30px;
      max-width: 500px;
      min-width: 500px;
    "
  >
    <template #cover>
      <img alt="example" :src="imagePath" style="height: 300px" />
    </template>
    <a-card-meta>
      <template #description>
        <a-typography-title :level="3">{{ data.name }}</a-typography-title>
        <a-typography-title :level="5">₩ {{ data.price }}</a-typography-title>
        <a-typography-title :level="5">{{
          data.description
        }}</a-typography-title>
        <PlusCircleFilled
          style="font-size: 50px; margin-top: 20px"
          @click="moveToDetail"
        />
      </template>
    </a-card-meta>
  </a-card>
</template>

<style scoped></style>
