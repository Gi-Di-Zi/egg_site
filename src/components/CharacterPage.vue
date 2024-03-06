<script setup>
import { ref, onMounted } from "vue";
import ALong from "./EggCharacter/A_Long.vue";
import { pageConfig } from "@/store";
import {
  userOutlined,
  laptopOutlined,
  notificationOutlined,
} from "@ant-design/icons-vue";

const store = pageConfig();

const { changePage } = store;

onMounted(() => {
  changePage("캐릭터");
});

const test = ref("캐릭터 페이지");

const selectedKey = ref("1");
const showCharacter = (key) => {
  selectedKey.value = key.toString();
  console.log(key);
};
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
            알 시리즈
          </span>
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
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <laptop-outlined />
            알의 가족
          </span>
        </template>
        <a-menu-item key="5">돌돌이</a-menu-item>
        <a-menu-item key="6">xxx</a-menu-item>
        <a-menu-item key="7">xxx</a-menu-item>
        <a-menu-item key="8">xxx</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <template #title>
          <span>
            <notification-outlined />
            기타
          </span>
        </template>
        <a-menu-item key="9">고양이 종족</a-menu-item>
        <a-menu-item key="10">고양이 아님 종족</a-menu-item>
        <a-menu-item key="11">엑스트라</a-menu-item>
        <a-menu-item key="12">xxx</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>

  <a-layout-header
    class="horizontalSider"
    style="visibility: hidden; display: flex; position: absolute; width: 300px"
  >
    <a-menu
      v-model:selectedKeys="selectedKeys2"
      v-model:openKeys="openKeys"
      mode="horizontal"
      theme="light"
    >
      <a-sub-menu key="sub3">
        <template #title>
          <span>
            <user-outlined />
            알 시리즈
          </span>
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
          <span>
            <laptop-outlined />
            알의 가족
          </span>
        </template>
        <a-menu-item key="5">돌돌이</a-menu-item>
        <a-menu-item key="6">xxx</a-menu-item>
        <a-menu-item key="7">xxx</a-menu-item>
        <a-menu-item key="8">xxx</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub5">
        <template #title>
          <span>
            <notification-outlined />
            기타
          </span>
        </template>
        <a-menu-item key="9">고양이 종족</a-menu-item>
        <a-menu-item key="10">고양이 아님 종족</a-menu-item>
        <a-menu-item key="11">엑스트라</a-menu-item>
        <a-menu-item key="12">xxx</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-header>

  <a-layout-content class="charaContent">
    <div v-if="selectedKey === '1'">
      <ALong />
    </div>
    <div v-if="selectedKey === '2'">
      <EggSecond />
    </div>
    <div v-if="selectedKey !== '1'">
      {{ test }}
    </div>
  </a-layout-content>
</template>

<style>
img {
  display: block;
}
@media screen and (max-width: 1120px) {
  .verticalSider {
    display: none !important;
  }
  .horizontalSider {
    visibility: visible !important;
    background-color: white !important;
  }
  .charaContent {
    margin-top: 80px;
  }
}
</style>
