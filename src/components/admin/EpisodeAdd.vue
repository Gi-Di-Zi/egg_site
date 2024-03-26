<script setup>
import { ref, onMounted, watch } from "vue";
import { supabase } from "@/utils/supabase";
import { message as msg } from "ant-design-vue";

const title = ref("");
const mainUrl = ref("");
const type = ref(null);
const description = ref("");
const imageUrl = ref("");
const createdDate = ref(null);

const file = ref(null);

const mainUrlDisabled = ref(true);

onMounted(() => {});

const uploadFile = async (event) => {
  file.value = event.target.files[0];

  const acceptedImageTypes = ["image/jpeg", "image/png"];
  if (!acceptedImageTypes.includes(file.value.type)) {
    msg.error("jpg 또는 png로만 업로드가 가능합니다!");
    return;
  }

  // 업로드할 파일과 파일 경로를 지정
  const filePath = file.value.name;

  const { error } = await supabase.storage
    .from("image")
    .upload(filePath, file.value);

  if (error) {
    console.error("Error uploading image: ", error);
    if (error.statusCode == "409") {
      msg.error("같은 이름의 이미지가 있습니다.");
    } else {
      msg.error("전송에 문제가 있습니다.");
    }
  } else {
    console.log("Image uploaded successfully!");
    if (type.value == "video") {
      imageUrl.value = filePath;
    } else {
      mainUrl.value = filePath;
    }
  }
};

watch(type, () => {
  if (type.value == "video") {
    mainUrlDisabled.value = false; // Disable mainUrl input if type is 'image'
  } else {
    mainUrlDisabled.value = true; // Enable mainUrl input for other types
  }
});

async function uploadSales() {
  if (title.value === "" || mainUrl.value === "" || description.value === "") {
    msg.error("채워지지 않은 부분이 있습니다");
    return;
  }
  const { data, error } = await supabase
    .from("episode")
    .insert({
      type: type.value,
      title: title.value,
      mainUrl: mainUrl.value,
      description: description.value,
      imageUrl: imageUrl.value,
      createdDate: createdDate.value,
      show: true,
    })
    .select();
  data;
  error;
  title.value = "";
  mainUrl.value = "";
  description.value = "";
  imageUrl.value = "";
  msg.info("업로드 완료!");
}
</script>

<template>
  <a-card style="width: 100%">
    <template #cover>
      <a-typography-title :level="2">에피소드 추가</a-typography-title>
    </template>
    <a-select
      v-model:value="type"
      placeholder="작품 유형을 선택해주세요"
      style="width: 100%; margin-bottom: 10px; text-align: start"
    >
      <a-select-option value="image">이미지</a-select-option>
      <a-select-option value="video">영상</a-select-option>
      <a-select-option value="cartoon">4컷 만화</a-select-option>
      <a-select-option value="etc">기타</a-select-option>
    </a-select>
    <a-input
      placeholder="작품 이름"
      v-model:value="title"
      style="margin-bottom: 10px"
    />
    <a-input
      placeholder="영상 링크"
      v-model:value="mainUrl"
      style="margin-bottom: 10px"
      :disabled="mainUrlDisabled"
    />
    <a-input
      placeholder="제품 설명"
      v-model:value="description"
      style="margin-bottom: 10px"
    />
    <a-date-picker v-model:value="createdDate" style="width: 100%" />
    <a-typography-title :level="5"
      >메인 사진 or 썸네일용 사진 (유형이 영상일 때)</a-typography-title
    >
    <a-input
      id="imageInput"
      type="file"
      placeholder="이미지 사진"
      @change="uploadFile"
      style="margin-bottom: 10px"
    />

    <a-button @click="uploadSales">업로드</a-button>
  </a-card>
</template>
