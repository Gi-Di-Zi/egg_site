<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { pageConfig } from "@/store";

const store = pageConfig();
const { changePage } = store;
let screenWidth = ref(window.innerWidth);

const imageSources = [
  require("@/images/along1.png"),
  require("@/images/along2.png"),
  require("@/images/test.gif"),
  require("@/images/test2.gif"),
  require("@/images/along1.png"),
  require("@/images/along2.png"),
  require("@/images/test.gif"),
  require("@/images/test2.gif"),
  require("@/images/test2.gif"),
  require("@/images/test2.gif"),
  require("@/images/along2.png"),
  require("@/images/along2.png"),
];

const showText = ref(Array(imageSources.length).fill(false));

const getImagesForColumn = (colNumber) => {
  return imageSources
    .map((_, index) => index)
    .filter((index) => index % colCounts.value === colNumber - 1);
};

const handleResize = () => {
  screenWidth.value = window.innerWidth;
};

const previewType = (index) => {
  showText.value[index] = true;
};

const hideType = (index) => {
  showText.value[index] = false;
};

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const colCounts = computed(() => {
  if (screenWidth.value >= 1920) {
    return 6;
  } else if (screenWidth.value >= 1120) {
    return 4;
  } else {
    return 2;
  }
});

onMounted(() => {
  changePage("에피소드");
  window.addEventListener("resize", handleResize);
});
</script>

<template>
  <a-row>
    <a-col
      :xs="12"
      :lg="{ span: 24 / colCounts }"
      v-for="n in colCounts"
      :key="`col-${n}`"
    >
      <a-card
        v-for="index in getImagesForColumn(n)"
        :src="imageSources[index]"
        :key="`img-${index}`"
        style="width: 100%; object-fit: contain"
      >
        <template #cover>
          <div
            @mouseover="() => previewType(index)"
            @mouseleave="() => hideType(index)"
          >
            <a-image alt="example" :src="imageSources[index]" />
            <p class="hover-text" :key="index" v-show="showText[index]">
              4컷 만화
            </p>
          </div>
        </template>
        <a-card-meta title="Europe Street beat">
          <template #description>www.instagram.com</template>
        </a-card-meta>
      </a-card>
    </a-col>
  </a-row>
</template>
<style scoped>
.hover-text {
  position: absolute;
  bottom: 90px;
  left: 0;
  color: white;
  font-weight: 400;
  font-size: 16px;
  padding: 3px;
  padding-left: 10px;
  padding-right: 25px;
  text-align: left;
  background-color: rgb(31, 80, 104);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
</style>
