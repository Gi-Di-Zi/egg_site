<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { pageConfig } from "@/store";
import { message as msg } from "ant-design-vue";

const store = pageConfig();
const router = useRouter();
let selectedKeys = computed(() => store.state.selectedKey);

const showModal = ref(false);

const adminId = ref("");
const adminPassword = ref("");

const showPage = computed(() => store.state.showPage);

addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

const backToMain = () => {
  selectedKeys.value = ["0"];
  router.push("/");

  const { changePage } = store;
  changePage("");
};
const movePage = (key) => {
  if (key === 1) {
    router.push("/character");
    selectedKeys.value = ["1"];
  } else if (key === 2) {
    router.push("/world");
    selectedKeys.value = ["2"];
  } else if (key === 3) {
    router.push("/episode");
    selectedKeys.value = ["3"];
  } else if (key === 4) {
    router.push("/author");
    selectedKeys.value = ["4"];
  } else if (key === 5) {
    router.push("/sales");
    selectedKeys.value = ["5"];
  } else if (key === 6) {
    router.push("/game");
    selectedKeys.value = ["6"];
  } else if (key === 7) {
    router.push("/contect");
    selectedKeys.value = ["7"];
  }
};

const modalOn = () => {
  showModal.value = true;
};
const okModal = () => {
  const id = adminId.value;
  const password = adminPassword.value;
  if (id === "test" && password === "test") {
    localStorage.setItem("access", true);
    router.push("admin");
  } else {
    msg.error("정보가 맞지 않습니다.");
  }
  showModal.value = false;
  adminId.value = "";
  adminPassword.value = "";
};
const cancelModal = () => {
  showModal.value = false;
};
</script>

<template>
  <a-layout style="border-radius: 20px !important">
    <div
      class="logo"
      style="width: 100%; display: flex; justify-content: center; padding: 10px"
    >
      <img
        src="https://fmcaxedcftqxqcdrdpfd.supabase.co/storage/v1/object/public/image/group/group_profile.png?t=2024-03-19T07%3A17%3A08.212Z"
        style="height: 64px"
        alt="oops!"
        @click="backToMain"
        oncontextmenu="return false;"
      />
    </div>
    <a-layout-header
      class="header"
      style="
        display: flex;
        justify-content: center;
        width: 90%;
        margin-left: 5%;
        border-radius: 30px;
        margin-bottom: 20px;
      "
    >
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selected-keys="selectedKeys"
        class="headerMenu"
        style="flex-grow: 1"
      >
        <a-menu-item key="1" @click="() => movePage(1)">캐릭터</a-menu-item>
        <a-menu-item key="2" @click="() => movePage(2)">세계관</a-menu-item>
        <a-menu-item key="3" @click="() => movePage(3)">갤러리</a-menu-item>
        <a-menu-item key="4" @click="() => movePage(4)">작가진</a-menu-item>
        <a-menu-item key="5" @click="() => movePage(5)">Goods</a-menu-item>
        <a-menu-item key="6" @click="() => movePage(6)">mini-game</a-menu-item>
        <a-menu-item key="7" @click="() => movePage(7)">Contect</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0; display: none">
        <a-breadcrumb-item>알 페이지</a-breadcrumb-item>
        <a-breadcrumb-item>{{ showPage }}</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout
        style="
          padding: 24px 24px;
          background: #fff;
          min-height: 280px;
          border-radius: 20px;
        "
      >
        <router-view />
      </a-layout>
    </a-layout-content>
    <a-layout-footer
      style="text-align: end; color: #a0a0a0; border-radius: 20px !important"
    >
      <a-button @click="modalOn">관리자 페이지</a-button>
      <p>Copyright © 2024 KIM DONG JIN & JIN YERIM. All Rights Reserved.</p>
      <p>
        이 사이트 내의 이미지 및 기타 소스들은 제작자 및 소유자의 허락없이는
        사용할 수 없습니다.
      </p>
      <a-divider />
    </a-layout-footer>
  </a-layout>

  <a-modal :open="showModal" okText="OK" @ok="okModal" @cancel="cancelModal">
    <template #title>
      <div>관리자 페이지 접속</div>
    </template>
    <a-input
      v-model:value="adminId"
      placeholder="관리자 아이디"
      style="width: 95%; margin: 10px"
    ></a-input>
    <a-input-password
      v-model:value="adminPassword"
      placeholder="관리자 비밀번호"
      style="width: 95%; margin: 10px"
    ></a-input-password>
  </a-modal>
  <a-back-top />
</template>

<style></style>
