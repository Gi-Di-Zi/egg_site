<script setup>
import SalesAdd from "@/components/admin/SalesAdd.vue";
import SalesChange from "@/components/admin/SalesChange.vue";
import EpisodeAdd from "@/components/admin/EpisodeAdd.vue";
import EpisodeChange from "@/components/admin/EpisodeChange.vue";

import { ref, onMounted } from "vue";
import { pageConfig } from "@/store";

const store = pageConfig();
const activeKey = ref([]);
const expandIconPosition = ref("end");
const { changePage } = store;

const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
};

const anchors = ref([
  { href: "1", title: "갤러리 관리", id: "#episode" },
  { href: "2", title: "Goods 관리", id: "#sales" },
]);

const handleClick = (e, id, href) => {
  e.preventDefault();
  activeKey.value = [href];
  scrollToElement(id);
};

onMounted(() => {
  changePage("관리자");
});
</script>

<template>
  <a-row>
    <a-col :span="2" style="padding-right: 5px">
      <div
        style="border-right: 1px dotted #000; height: 100%; padding-right: 5px"
      >
        <a-anchor :target-offset="0" style="position: fixed; margin-top: 100px">
          <a-anchor-link
            v-for="anchor in anchors"
            :key="anchor.href"
            :href="'#' + anchor.title"
            :title="anchor.title"
            @click="(e) => handleClick(e, anchor.id, anchor.href)"
          />
        </a-anchor>
      </div>
    </a-col>
    <a-col :span="22">
      <a-collapse
        v-model:activeKey="activeKey"
        :expand-icon-position="expandIconPosition"
      >
        <a-collapse-panel key="1" header="갤러리 관리" id="episode">
          <p />
          <a-row>
            <a-col :span="11">
              <EpisodeAdd />
            </a-col>
            <a-col :span="2" />
            <a-col :span="11">
              <EpisodeChange />
            </a-col>
          </a-row>
        </a-collapse-panel>
        <a-collapse-panel key="2" header="Goods 관리" id="sales">
          <p />
          <a-row>
            <a-col :span="11">
              <SalesAdd />
            </a-col>
            <a-col :span="2" />
            <a-col :span="11">
              <SalesChange />
            </a-col>
          </a-row>
        </a-collapse-panel>
      </a-collapse>
    </a-col>
  </a-row>
</template>
