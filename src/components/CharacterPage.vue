<script setup>
import { ref, onMounted } from "vue";
import ALong from "./EggCharacter/A_Long.vue";
import AMong from "./EggCharacter/A_Mong.vue";
import ALn from "./EggCharacter/A_Ln.vue";
import DolDol from "./EggCharacter/DolDol.vue";
import AR from "./EggCharacter/A_R.vue";
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

const selectedKey = ref("0");
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
        <a-menu-item key="5" @click="() => showCharacter(5)"
          >돌돌이</a-menu-item
        >
        <a-menu-item key="6" @click="() => showCharacter(6)">아리</a-menu-item>
        <a-menu-item key="7" @click="() => showCharacter(7)">xxx</a-menu-item>
        <a-menu-item key="8" @click="() => showCharacter(8)">xxx</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <template #title>
          <span>
            <notification-outlined />
            기타
          </span>
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
        <a-menu-item key="5" @click="() => showCharacter(5)"
          >돌돌이</a-menu-item
        >
        <a-menu-item key="6" @click="() => showCharacter(6)">아리</a-menu-item>
        <a-menu-item key="7" @click="() => showCharacter(7)">xxx</a-menu-item>
        <a-menu-item key="8" @click="() => showCharacter(8)">xxx</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub5">
        <template #title>
          <span>
            <notification-outlined />
            기타
          </span>
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
      <a-typography-title :level="2">캐릭터</a-typography-title>
    </div>
  </a-layout-content>
</template>
