<script setup>
import { ref, onMounted } from "vue";
import { pageConfig } from "@/store";

const store = pageConfig();
const { changePage } = store;


const image1 = ref(require('@/images/along1.png'));
const image2 = ref(require('@/images/test.gif'));



onMounted(() => {
  changePage("에피소드");
});
</script>

<template>
  <a-row>
    <a-col :span="4">
      <img :src="image1" style="width: 100%; object-fit: contain;"/>
      <img :src="image1" style="width: 100%; object-fit: contain;"/>
    </a-col>
    <a-col :span="4">
      <img :src="image2" style="width: 100%; object-fit: contain;"/>
      <img :src="image1" style="width: 100%; object-fit: contain;"/>
    </a-col>
    <a-col :span="4">
      <img :src="image1" style="width: 100%; object-fit: contain;"/>
    </a-col>
    <a-col :span="4">
      <img :src="image1" style="width: 100%; object-fit: contain;"/>
    </a-col>
    <a-col :span="4">
      <img :src="image1" style="width: 100%; object-fit: contain;"/>
    </a-col>
    <a-col :span="4">
      <img :src="image1" style="width: 100%; object-fit: contain;"/>
    </a-col>

  </a-row>
</template>