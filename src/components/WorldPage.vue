<script setup>
import { onMounted, ref } from "vue";
import { pageConfig } from "@/store";

const store = pageConfig();

const { changePage } = store;

onMounted(() => {
  changePage("세계관");
});

const selectedKey = ref("0");
const showWorld = (key) => {
  selectedKey.value = key.toString();
  console.log(key);
};
</script>

<template>
  <div style="width: 100%; display: flex; justify-content: center">
    <a-card class="wideMenu" style="width: 100%">
      <a-typography-title :level="2">세계관</a-typography-title>
      <a-row style="margin-top: 30px">
        <a-col :span="8">
          <a-button style="width: 95%; height: 300px; padding: 20px"
            >조명가게</a-button
          >
        </a-col>
        <a-col :span="8">
          <a-button style="width: 95%; height: 300px; padding: 20px"
            >감자 시티
          </a-button>
        </a-col>
        <a-col :span="8">
          <a-button style="width: 95%; height: 300px; padding: 20px"
            >고양이 동산</a-button
          >
        </a-col>
      </a-row>
    </a-card>

    <a-layout-header
      class="narrowMenu"
      style="
        visibility: hidden;
        display: flex !important;
        position: absolute;
        width: 85%;
        justify-content: center;
      "
    >
      <a-menu
        mode="horizontal"
        style="
          height: 100%;
          display: flex;
          justify-content: center;
          flex-grow: 1;
        "
      >
        <a-sub-menu key="sub1">
          <template #title>
            <span> 조명가게 </span>
          </template>
          <a-sub-menu key="sub1-1">
            <template #title>
              <span> 가게 구조 </span>
            </template>
            <a-menu-item key="1" @click="() => showWorld(1)"
              >구조도</a-menu-item
            >
            <a-menu-item key="2" @click="() => showWorld(2)"
              >가게 외부</a-menu-item
            >
            <a-menu-item key="3" @click="() => showWorld(3)"
              >가게 내부</a-menu-item
            >
            <a-menu-item key="4" @click="() => showWorld(4)"
              >사장실</a-menu-item
            >
            <a-menu-item key="5" @click="() => showWorld(5)">창고</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="6" @click="() => showWorld(6)">직원</a-menu-item>
          <a-menu-item key="7" @click="() => showWorld(7)"
            >판매 상품</a-menu-item
          >
          <a-menu-item key="8" @click="() => showWorld(8)"
            >가게 연혁</a-menu-item
          >
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span> 감자 시티 </span>
          </template>
          <a-menu-item key="9" @click="() => showWorld(9)">개요</a-menu-item>
          <a-menu-item key="10" @click="() => showWorld(10)"
            >랜드마크</a-menu-item
          >
          <a-menu-item key="11" @click="() => showWorld(11)">생활</a-menu-item>
          <a-menu-item key="12" @click="() => showWorld(12)">통계</a-menu-item>
          <a-menu-item key="13" @click="() => showWorld(13)"
            >주요 사건</a-menu-item
          >
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <template #title>
            <span> 고양이 동산 </span>
          </template>
          <a-menu-item key="14" @click="() => showWorld(14)"
            >지리적 환경</a-menu-item
          >
          <a-menu-item key="15" @click="() => showWorld(15)"
            >생물 분포도</a-menu-item
          >
          <a-menu-item key="16" @click="() => showWorld(16)"
            >주의사항</a-menu-item
          >
          <a-menu-item key="17" @click="() => showWorld(17)"
            >정부 계획</a-menu-item
          >
        </a-sub-menu>
      </a-menu>
    </a-layout-header>
  </div>
  <a-layout-content class="charaContent">
    <div v-if="selectedKey === '1'"></div>
    <div v-else-if="selectedKey === '2'"></div>
    <div v-else-if="selectedKey === '3'"></div>
    <div v-else-if="selectedKey === '5'"></div>
    <div v-else-if="selectedKey === '6'"></div>
    <div v-else-if="selectedKey === '0'">설명</div>
  </a-layout-content>
</template>
