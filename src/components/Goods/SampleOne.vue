<script setup>
import { PlusCircleFilled } from "@ant-design/icons-vue";
const test = () => {
  console.log("good!");
};
</script>

<template>
  <a-card style="flex: 1; display: block; margin: 30px">
    <template #cover>
      <img
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        style="height: 300px"
      />
    </template>
    <a-card-meta>
      <template #description>
        <a-typography-title :level="3">상품 이름</a-typography-title>
        <a-typography-title :level="5">₩ 20,000</a-typography-title>
        <PlusCircleFilled
          @click="test"
          style="font-size: 50px; margin-top: 20px"
        />
      </template>
    </a-card-meta>
  </a-card>
</template>

<style scoped></style>
