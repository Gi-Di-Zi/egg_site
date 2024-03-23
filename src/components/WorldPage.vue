<script setup>
import { onMounted } from "vue";
import { pageConfig } from "@/store";

const store = pageConfig();

const { changePage } = store;

onMounted(() => {
  changePage("세계관");
});
</script>

<template>
  <a-layout-sider
      width="200"
      style="background: #fff; margin-right: 20px"
      class="verticalSider"
  >
    <a-menu
        v-model:selectedKeys="selectedKeys2"
        v-model:openKeys="openKeys"
        mode="inline"
        style="height: 100%"
    >
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <user-outlined />
            조명가게
          </span>
        </template>
        <a-sub-menu key="sub1-1">
          <template #title>
          <span>
            <user-outlined />
            가게 구조
          </span>
          </template>
          <a-menu-item key="1" @click="() => showCharacter(1)"
          >구조도</a-menu-item
          >
          <a-menu-item key="2" @click="() => showCharacter(2)"
          >가게 외부</a-menu-item
          >
          <a-menu-item key="3" @click="() => showCharacter(3)"
          >가게 내부</a-menu-item
          >
          <a-menu-item key="3" @click="() => showCharacter(3)"
          >사장실</a-menu-item
          >
          <a-menu-item key="4" @click="() => showCharacter(4)"
          >창고</a-menu-item
          >
        </a-sub-menu>
        <a-menu-item key="2" @click="() => showCharacter(5)"
        >직원</a-menu-item
        >
        <a-menu-item key="3" @click="() => showCharacter(6)"
        >판매 상품</a-menu-item
        >
        <a-menu-item key="4" @click="() => showCharacter(7)"
        >가게 연혁</a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <laptop-outlined />
            감자 시티
          </span>
        </template>
        <a-menu-item key="6" @click="() => showCharacter(9)">개요</a-menu-item>
        <a-menu-item key="6" @click="() => showCharacter(9)">랜드마크</a-menu-item>
        <a-menu-item key="5" @click="() => showCharacter(8)">생활</a-menu-item>
        <a-menu-item key="7" @click="() => showCharacter(10)">통계</a-menu-item>
        <a-menu-item key="8" @click="() => showCharacter(11)">주요 사건</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <template #title>
          <span>
            <notification-outlined />
            고양이 동산
          </span>
        </template>
        <a-menu-item key="10" @click="() => showCharacter(13)"
        >지리적 환경</a-menu-item>
        <a-menu-item key="9" @click="() => showCharacter(12)"
        >생물 분포도</a-menu-item>
        <a-menu-item key="11" @click="() => showCharacter(14)"
        >주의사항</a-menu-item>
        <a-menu-item key="12" @click="() => showCharacter(15)">정부 계획</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>
