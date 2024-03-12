<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { pageConfig } from "@/store";

const store = pageConfig();
const router = useRouter();
let selectedKeys = ref(["1"]);

const showPage = computed(() => store.state.showPage);

const backToMain = () => {
  selectedKeys.value = ["0"];
  router.push("/");

  const { changePage } = store;
  changePage("");
};
const movePage = (key) => {
  if (key === 1) {
    router.push("character");
    selectedKeys.value = ["1"];
  } else if (key === 2) {
    router.push("world");
    selectedKeys.value = ["2"];
  } else if (key === 3) {
    router.push("episode");
    selectedKeys.value = ["3"];
  } else if (key === 4) {
    router.push("author");
    selectedKeys.value = ["4"];
  } else if (key === 5) {
    router.push("sales");
    selectedKeys.value = ["5"];
  } else if (key === 6) {
    router.push("contect");
    selectedKeys.value = ["6"];
  }
};
</script>

<template>
  <a-layout>
    <a-layout-header
      class="header"
      style="display: inline-flex; margin-left: 50px; margin-right: 50px"
    >
      <div class="logo">
        <img
          src="./images/along1.png"
          style="height: 64px; margin-right: 30px"
          alt="oops!"
          @click="backToMain"
        />
      </div>
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selected-keys="selectedKeys"
        class="headerMenu"
      >
        <a-menu-item key="1" @click="() => movePage(1)">캐릭터</a-menu-item>
        <a-menu-item key="2" @click="() => movePage(2)">세계관</a-menu-item>
        <a-menu-item key="3" @click="() => movePage(3)">에피소드</a-menu-item>
        <a-menu-item key="4" @click="() => movePage(4)">작가진</a-menu-item>
        <a-menu-item key="5" @click="() => movePage(5)">Goods</a-menu-item>
        <a-menu-item key="6" @click="() => movePage(6)">Contect</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>알 페이지</a-breadcrumb-item>
        <a-breadcrumb-item>{{ showPage }}</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="padding: 24px 24px; background: #fff; min-height: 280px">
        <router-view />
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      The Egg Page ©2024 Created by Kim Dong Jin
    </a-layout-footer>
  </a-layout>
</template>

<style></style>
