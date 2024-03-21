<script setup>
import { ref, onMounted } from "vue";
import { pageConfig } from "@/store";

const store = pageConfig();

const imageSource = ref(require("@/images/along1.png"));

const isShaking = ref(false);
function shakeIt() {
  imageSource.value = require("@/images/test.gif");

  isShaking.value = true;
  setTimeout(() => {
    isShaking.value = false;
  }, 500);
}
function stopShakeIt() {
  imageSource.value = require("@/images/along1.png");
}
const { changePage } = store;

onMounted(() => {
  changePage("미니게임");
});
</script>

<template>
  <a-typography-title :level="2">미니게임</a-typography-title>
  <img
    :src="imageSource"
    style="width: 400px; object-fit: contain"
    @mouseover="shakeIt"
    @mouseout="stopShakeIt"
  />
</template>

<style>
@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(-5deg);
  }
  40% {
    transform: rotate(5deg);
  }
  60% {
    transform: rotate(-5deg);
  }
  80% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.shake-animation {
  animation: 0.1s ease-in-out 0s 1 shake;
}
</style>
