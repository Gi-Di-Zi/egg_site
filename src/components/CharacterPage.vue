<script setup>
import { ref, onMounted } from "vue";
import ALong from "./EggCharacter/A_Long.vue";
import AMong from "./EggCharacter/A_Mong.vue";
import ALn from "./EggCharacter/A_Ln.vue";
import DolDol from "./EggCharacter/DolDol.vue";
import AR from "./EggCharacter/A_R.vue";
import { pageConfig } from "@/store";

const store = pageConfig();

const { changePage } = store;

onMounted(() => {
  changePage("캐릭터");
});

const selectedKey = ref("0");
const showCharacter = (key) => {
  selectedKey.value = key.toString();
  console.log(key);
};
</script>

<template>
  <a-card>
    <a-typography-title :level="2">캐릭터</a-typography-title>
    <a-row>
      <a-col :span="8">
        <a-button style="width: 95%; height: 200px; padding: 10px"
          >알 캐릭터</a-button
        >
      </a-col>
      <a-col :span="8">
        <a-button style="width: 95%; height: 200px; padding: 10px"
          >알의 가족</a-button
        >
      </a-col>
      <a-col :span="8">
        <a-button style="width: 95%; height: 200px; padding: 10px"
          >기타</a-button
        >
      </a-col>
    </a-row>
  </a-card>

  <a-layout-header
    class="narrowMenu"
    style="visibility: hidden; display: flex; position: absolute; width: 300px"
  >
    <a-menu mode="horizontal" theme="light">
      <a-sub-menu key="sub3">
        <template #title>
          <span> 알 시리즈 </span>
        </template>
        <a-menu-item key="1" @click="() => showCharacter(1)"
          >아롱이</a-menu-item
        >
        <a-menu-item key="2" @click="() => showCharacter(2)"
          >아몽이</a-menu-item
        >
        <a-menu-item key="3" @click="() => showCharacter(3)"
          >아릉이</a-menu-item
        >
        <a-menu-item key="4" @click="() => showCharacter(4)"
          >알알이</a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <template #title>
          <span> 알의 가족 </span>
        </template>
        <a-menu-item key="5" @click="() => showCharacter(5)"
          >돌돌이</a-menu-item
        >
        <a-menu-item key="6" @click="() => showCharacter(6)">아리</a-menu-item>
        <a-menu-item key="7" @click="() => showCharacter(7)">xxx</a-menu-item>
        <a-menu-item key="8" @click="() => showCharacter(8)">xxx</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub5">
        <template #title>
          <span> 기타 </span>
        </template>
        <a-menu-item key="9" @click="() => showCharacter(9)"
          >고양이 종족</a-menu-item
        >
        <a-menu-item key="10" @click="() => showCharacter(10)"
          >고양이 아님 종족</a-menu-item
        >
        <a-menu-item key="11" @click="() => showCharacter(11)"
          >엑스트라</a-menu-item
        >
        <a-menu-item key="12" @click="() => showCharacter(12)">xxx</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-header>

  <a-layout-content class="charaContent">
    <div v-if="selectedKey === '1'">
      <ALong />
    </div>
    <div v-else-if="selectedKey === '2'">
      <AMong />
    </div>
    <div v-else-if="selectedKey === '3'">
      <ALn />
    </div>
    <div v-else-if="selectedKey === '5'">
      <DolDol />
    </div>
    <div v-else-if="selectedKey === '6'">
      <AR />
    </div>
    <div v-else-if="selectedKey === '0'">
      <a-typography-title :level="2">설명</a-typography-title>
    </div>
  </a-layout-content>
</template>
