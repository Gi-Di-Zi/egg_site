<script setup>
import { ref, onMounted } from "vue";
import { pageConfig } from "@/store";
import { gsap } from "gsap";

const store = pageConfig();

const imageSource = ref(require("@/images/along1.png"));
const imageSource2 = ref(require("@/images/along1.png"));

const isMoving = ref(true);

const animatedImage = ref(null);
let timeline = gsap.timeline();

const vw = window.innerWidth / 100;
const target = vw * 95 - 300;

// const isMoving2 = ref(true);
function shakeIt() {
  imageSource.value = require("@/images/test.gif");
  isMoving.value = false;
}
function stopShakeIt() {
  imageSource.value = require("@/images/along1.png");
  isMoving.value = true;
}
const { changePage } = store;

// 애니메이션 멈추기
const pauseAnimation = () => {
  imageSource2.value = require("@/images/test2.gif");
  timeline.pause();
};
// 애니메이션 재시작
const resumeAnimation = () => {
  imageSource2.value = require("@/images/along1.png");
  timeline.resume();
};

onMounted(() => {
  changePage("미니게임");
  timeline = gsap.to(animatedImage.value, {
    x: target,
    yoyo: true,
    repeat: -1,
    duration: 3,
    ease: "power1.inOut",
    paused: false,
  });
});
</script>

<template>
  <a-typography-title :level="2">미니게임</a-typography-title>
  <img
    :src="imageSource"
    style="width: 300px; object-fit: contain"
    @mouseover="shakeIt"
    @mouseout="stopShakeIt"
    :class="{ 'shake-animation': isMoving }"
  />
  <div style="width: 100%">
    <img
      ref="animatedImage"
      :src="imageSource2"
      style="width: 200px; object-fit: contain"
      @mousedown="pauseAnimation"
      @mouseup="resumeAnimation"
    />
  </div>
</template>

<style>
@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(-1deg);
  }
  40% {
    transform: rotate(1deg);
  }
  60% {
    transform: rotate(-1deg);
  }
  80% {
    transform: rotate(1deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.shake-animation {
  animation: shake 0.15s ease-in-out infinite;
}
</style>
