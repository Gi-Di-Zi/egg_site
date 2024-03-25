<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { pageConfig } from "@/store";

const store = pageConfig();
const { changePage } = store;

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

let screenWidth = ref(window.innerWidth);

const getImagesForColumn = (colNumber) => {
  return imageSources.filter(
    (_, index) => index % colCounts.value === colNumber - 1
  );
};

const handleResize = () => {
  screenWidth.value = window.innerWidth;
};

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const colCounts = computed(() => {
  if (screenWidth.value >= 1200) {
    return 6;
  } else if (screenWidth.value >= 992) {
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
      <img
        v-for="(src, index) in getImagesForColumn(n)"
        :src="src"
        :key="`img-${index}`"
        style="width: 100%; object-fit: contain"
      />
    </a-col>
  </a-row>
</template>
