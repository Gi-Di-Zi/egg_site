<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { pageConfig } from "@/store";

let isModalVisible = ref(false);
let currentVideoUrl = ref(null);

const openVideoModal = (index) => {
  if (imageSources[index]["type"] === "video") {
    currentVideoUrl.value = imageSources[index]["url"];
    isModalVisible.value = true;
  }
};

const store = pageConfig();
const { changePage } = store;
let screenWidth = ref(window.innerWidth);

const imageSources = [
  {
    type: "image",
    url: require("@/images/along1.png"),
    title: "1",
    description: "11",
    tag: "4컷 만화",
  },
  {
    type: "image",
    url: require("@/images/along2.png"),
    title: "2",
    description: "22",
    tag: "4컷 만화",
  },
  {
    type: "image",
    url: require("@/images/test.gif"),
    title: "3",
    description: "33",
    tag: "4컷 만화",
  },
  {
    type: "image",
    url: require("@/images/test2.gif"),
    title: "4",
    description: "44",
    tag: "4컷 만화",
  },
  {
    type: "image",
    url: require("@/images/along1.png"),
    title: "5",
    description: "22",
    tag: "4컷 만화",
  },
  {
    type: "image",
    url: require("@/images/along2.png"),
    title: "6",
    description: "22",
    tag: "4컷 만화",
  },
  {
    type: "image",
    url: require("@/images/test.gif"),
    title: "7",
    description: "22",
    tag: "4컷 만화",
  },
  {
    type: "image",
    url: require("@/images/test2.gif"),
    title: "8",
    description: "22",
    tag: "4컷 만화",
  },
  {
    type: "image",
    url: require("@/images/test2.gif"),
    title: "9",
    description: "22",
    tag: "4컷 만화",
  },
  {
    type: "image",
    url: require("@/images/test2.gif"),
    title: "10",
    description: "22",
    tag: "4컷 만화",
  },
  {
    type: "image",
    url: require("@/images/along2.png"),
    title: "11",
    description: "22",
    tag: "4컷 만화",
  },
  {
    type: "image",
    url: require("@/images/along2.png"),
    title: "12",
    description: "22",
    tag: "4컷 만화",
  },
  {
    type: "video",
    url: "https://www.youtube.com/embed/ql3pDQ6O0ME",
    imageUrl: require("@/images/along2.png"),
    title: "13",
    description: "22",
    tag: "유튜브 영상",
  },
];

const showText = ref(Array(imageSources.length).fill(false));
const showVideoPreview = ref(Array(imageSources.length).fill(false));
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
  if (imageSources[index]["type"] === "video") {
    showVideoPreview.value[index] = true;
  }
};

const hideType = (index) => {
  showText.value[index] = false;
  if (imageSources[index]["type"] === "video") {
    showVideoPreview.value[index] = false;
  }
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
            <a-image
              alt="example"
              :src="imageSources[index]['url']"
              v-if="imageSources[index]['type'] === 'image'"
            />
            <img
              alt="example"
              :src="imageSources[index]['imageUrl']"
              v-if="imageSources[index]['type'] === 'video'"
              style="width: 100%; object-fit: contain"
            />
            <img
              :key="index"
              src="@/images/youtubePlay.png"
              v-show="showVideoPreview[index]"
              class="hover-video"
              @click="openVideoModal(index)"
            />
            <p class="hover-text" :key="index" v-show="showText[index]">
              {{ imageSources[index]["tag"] }}
            </p>
          </div>
        </template>
        <a-card-meta :title="imageSources[index]['title']">
          <template #description>{{
            imageSources[index]["description"]
          }}</template>
        </a-card-meta>
      </a-card>
    </a-col>
  </a-row>
  <a-modal v-model:visible="isModalVisible" width="1024px" :footer="null">
    <iframe
      width="100%"
      height="600px"
      :src="currentVideoUrl"
      frameborder="0"
    ></iframe>
  </a-modal>
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
  padding-right: 20px;
  text-align: left;
  background-color: rgb(31, 80, 104);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.hover-video {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 90px;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
</style>
