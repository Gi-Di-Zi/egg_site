<script setup>
import { ref, onMounted } from "vue";
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
</script>

<style>
a-card {
  width: 620px;
}

img {
  display: block;
  width: 300px;
}
</style>

<template>
  <a-layout-sider width="200" style="background: #fff">
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
        <a-menu-item key="1">아롱이</a-menu-item>
        <a-menu-item key="2">아몽이</a-menu-item>
        <a-menu-item key="3">아릉이</a-menu-item>
        <a-menu-item key="4">알알이</a-menu-item>
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
  <a-card :body-style="{ padding: 0, overflow: 'hidden' }">
    <a-flex justify="flex-start">
      <img alt="avatar" id="myImage" src="../img/egg.png" />
      <a-flex
        vertical
        align="flex-start"
        justify="space-between"
        :style="{ padding: '32px' }"
      >
        <a-typography>
          <a-typography-title :level="3"> “저는 알이에요.” </a-typography-title>
        </a-typography>
        <a-button type="primary" href="https://antdv.com" target="_blank"
          >Get Start</a-button
        >
      </a-flex>
    </a-flex>
  </a-card>
  <h1>{{ test }}</h1>
</template>
