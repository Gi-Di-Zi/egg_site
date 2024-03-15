<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const backToMain = () => {
  router.push("/");
};
</script>

<template>
  <a-result
    status="404"
    title="기술 부족"
    sub-title="죄송합니다. 페이지를 찾을 수 없다는데요?"
  >
    <template #extra>
      <a-button type="primary" @click="backToMain">메인으로 돌아가기</a-button>
    </template>
  </a-result>
</template>
