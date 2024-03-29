<script setup>
import { ref, onMounted } from "vue";
import { pageConfig } from "@/store";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import DougeGame from "@/components/Game/DougeGame.vue";

const store = pageConfig();

const gaugeValue = ref(0);
const gaugeMax = 100;
const gaugeDecreaseRate = 10; // 10 units per second

const imageSource = ref(require("@/images/along1.png"));
const imageSource2 = ref(require("@/images/along1.png"));
const imageSource3 = ref(require("@/images/along1.png"));

const eggGame = ref(null);

const animatedImage = ref(null);

const gameCode = ref(0);
const selectButtonShow = ref(true);

const shakeIt = () => {
  if (gaugeValue.value < 100) {
    gameTimeLine.restart();
    gaugeValue.value = Math.min(gaugeValue.value + 10, gaugeMax);
  }

  if (gaugeValue.value >= 100) {
    imageSource.value = require("@/images/along2.png");
  }
};

let gameTimeLine = gsap.timeline();
let timeline1 = gsap.timeline();

// eslint-disable-next-line no-unused-vars
let timeline2 = gsap.timeline();

const vw = window.innerWidth / 100;
const target = vw * 95 - 300;

const { changePage } = store;

const gameSelect = (number) => {
  gameCode.value = number;
  selectButtonShow.value = false;
};

const gameBack = () => {
  gameCode.value = 0;
  selectButtonShow.value = true;
};

// 애니메이션 멈추기
const pauseAnimation = () => {
  imageSource2.value = require("@/images/test2.gif");
  timeline1.pause();
};
// 애니메이션 재시작
const resumeAnimation = () => {
  imageSource2.value = require("@/images/along1.png");
  timeline1.resume();
};

onMounted(() => {
  changePage("미니게임");
  timeline1 = gsap.to(animatedImage.value, {
    x: target,
    yoyo: true,
    repeat: -1,
    duration: 3,
    ease: "power1.inOut",
    paused: false,
  });

  timeline2 = gsap.to(animatedImage.value, {
    y: "30",
    repeat: -1,
    duration: 0.8,
    yoyo: true,
    ease: "power1.inOut",
  });

  gsap.registerPlugin(Draggable);
  Draggable.create("#draggableTest", {
    bounds: window,
    onClick: function (event) {
      console.log("윙크!", event);
    },
  });

  gameTimeLine
    .to(eggGame.value, { rotation: 3, duration: 0.05 })
    .to(eggGame.value, { rotation: -3, duration: 0.05 })
    .to(eggGame.value, { rotation: 3, duration: 0.05 })
    .to(eggGame.value, { rotation: -3, duration: 0.05 })
    .to(eggGame.value, { rotation: 0, duration: 0.05 })
    .pause();
});

setInterval(() => {
  if (gaugeValue.value < 100) {
    gaugeValue.value = Math.max(gaugeValue.value - gaugeDecreaseRate, 0);
  }
}, 1000); //
</script>

<template>
  <a-typography-title :level="2">미니게임</a-typography-title>
  <div hidden>
    <img
      ref="eggGame"
      :src="imageSource"
      style="width: 300px; object-fit: contain"
      @click="shakeIt"
    />
    <div style="height: 20px; width: 100px; border: 1px solid black">
      <div
        :style="{
          height: '100%',
          width: gaugeValue + '%',
          backgroundColor: 'blue',
        }"
      ></div>
    </div>
    <div style="width: 100%">
      <img
        ref="animatedImage"
        :src="imageSource2"
        style="width: 200px; object-fit: contain"
        @mousedown="pauseAnimation"
        @mouseup="resumeAnimation"
      />
    </div>

    <img
      id="draggableTest"
      :src="imageSource3"
      style="width: 80px; object-fit: contain"
    />
  </div>
  <a-row style="justify-content: space-between; margin: 30px">
    <a-button
      @click="gameSelect(1)"
      v-if="selectButtonShow"
      style="width: 25%; height: 200px"
      >1번 게임</a-button
    >
    <a-button
      @click="gameSelect(2)"
      v-if="selectButtonShow"
      style="width: 25%; height: 200px"
      >2번 게임</a-button
    >
    <a-button
      @click="gameSelect(3)"
      v-if="selectButtonShow"
      style="width: 25%; height: 200px"
      >3번 게임</a-button
    >
  </a-row>

  <DougeGame v-if="gameCode == 1" />
  <a-row style="justify-content: center; margin: 30px">
    <a-button
      @click="gameBack"
      v-if="!selectButtonShow"
      style="width: 1280px; height: 100px"
      >돌아가기</a-button
    >
  </a-row>
</template>
