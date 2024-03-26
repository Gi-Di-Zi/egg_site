<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { pageConfig } from "@/store";
import { supabase } from "@/utils/supabase";

let isModalVisible = ref(false);
let isModalVisible2 = ref(false);
let currentVideoUrl = ref(null);

const supabaseUrl = process.env.VUE_APP_SUPABASE_URL;

const imageSources = ref([]);

const getEpisodeList = async () => {
  const { data } = await supabase
    .from("episode")
    .select()
    .filter("show", "eq", true);
  imageSources.value = data;
};

function formatDate(dateString) {
  var options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

const openVideoModal = (index) => {
  if (imageSources.value[index]["type"] === "video") {
    currentVideoUrl.value = imageSources.value[index]["mainUrl"];
    isModalVisible.value = true;
    isModalVisible2.value = true;
  }
};

const store = pageConfig();
const { changePage } = store;
let screenWidth = ref(window.innerWidth);

const stopVideo = () => {
  isModalVisible.value = false;
};

const stopVideo2 = () => {
  isModalVisible2.value = false;
};
const itemTag = (type) => {
  switch (type) {
    case "image":
      return "그림";
    case "video":
      return "유튜브 영상";
    case "cartoon":
      return "4컷 만화";
    default:
      return "기타";
  }
};

const showText = ref(Array(imageSources.value.length).fill(false));
const showVideoPreview = ref(Array(imageSources.value.length).fill(false));
const getImagesForColumn = (colNumber) => {
  return imageSources.value
    .map((_, index) => index)
    .filter((index) => index % colCounts.value === colNumber - 1);
};

const handleResize = () => {
  screenWidth.value = window.innerWidth;
};

const previewType = (index) => {
  showText.value[index] = true;
  if (imageSources.value[index]["type"] === "video") {
    showVideoPreview.value[index] = true;
  }
};

const hideType = (index) => {
  showText.value[index] = false;
  if (imageSources.value[index]["type"] === "video") {
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
  getEpisodeList();
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
        style="width: 100%"
      >
        <template #cover>
          <div
            @mouseover="() => previewType(index)"
            @mouseleave="() => hideType(index)"
          >
            <a-image
              alt="example"
              :src="`${supabaseUrl}/storage/v1/object/public/image/episode/${imageSources[index]['mainUrl']}`"
              v-if="imageSources[index]['type'] === 'image'"
              width="100%"
            />
            <img
              alt="example"
              :src="`${supabaseUrl}/storage/v1/object/public/image/episode/${imageSources[index]['imageUrl']}`"
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
              {{ itemTag(imageSources[index].type) }}
            </p>
          </div>
        </template>
        <a-card-meta :title="imageSources[index]['title']">
          <template #description>
            <div class="description">
              {{ imageSources[index]["description"] }}
            </div>
            <p />

            제작 날짜 : {{ formatDate(imageSources[index]["createdDate"]) }}
          </template>
        </a-card-meta>
      </a-card>
    </a-col>
  </a-row>
  <a-modal
    v-if="isModalVisible2"
    v-model:visible="isModalVisible"
    width="1024px"
    :footer="null"
    @close="stopVideo"
    :afterClose="stopVideo2"
  >
    <iframe
      width="100%"
      height="600px"
      :src="currentVideoUrl + '?autoplay=1'"
      allow="autoplay"
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

.description {
  word-wrap: break-word;
}
</style>
