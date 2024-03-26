<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "@/utils/supabase";
import { message as msg } from "ant-design-vue";

const name = ref("");
const price = ref("");
const description = ref("");

const file = ref(null);
const fileName = ref(null);

onMounted(() => {
  fileName.value = "";
});

const uploadFile = async (event) => {
  file.value = event.target.files[0];

  const acceptedImageTypes = ["image/jpeg", "image/png"];
  if (!acceptedImageTypes.includes(file.value.type)) {
    msg.error("jpg 또는 png로만 업로드가 가능합니다!");
    return;
  }

  // 업로드할 파일과 파일 경로를 지정
  const filePath = `${file.value.name}`;
  fileName.value = file.value.name;

  const { error } = await supabase.storage
    .from("image")
    .upload("sales/" + filePath, file.value);

  if (error) {
    console.error("Error uploading image: ", error);
    if (error.statusCode == "409") {
      msg.error("같은 이름의 이미지가 있습니다.");
    } else {
      msg.error("전송에 문제가 있습니다.");
    }
  } else {
    console.log("Image uploaded successfully!");
  }
};

async function uploadSales() {
  if (
    name.value === "" ||
    price.value === "" ||
    description.value === "" ||
    fileName.value === ""
  ) {
    msg.error("채워지지 않은 부분이 있습니다");
    return;
  }
  const { data, error } = await supabase
    .from("sales")
    .insert({
      name: name.value,
      price: price.value,
      description: description.value,
      picture_main: fileName.value,
      show: true,
      regist_time: new Date(),
      count_sales: 0,
    })
    .select();
  data;
  error;
  name.value = "";
  price.value = "";
  description.value = "";
  fileName.value = "";
  msg.info("업로드 완료!");
}
</script>

<template>
  <a-card style="width: 100%">
    <template #cover>
      <a-typography-title :level="2">제품 추가</a-typography-title>
    </template>
    <a-input
      placeholder="제품 이름"
      v-model:value="name"
      style="margin-bottom: 10px"
    />
    <a-input
      placeholder="제품 가격 (숫자와 쉼표만 입력)"
      v-model:value="price"
      style="margin-bottom: 10px"
    />
    <a-input placeholder="제품 설명" v-model:value="description" />
    <a-typography-title :level="5"
      >메인 제품 사진 ( 반드시 영어로 작성 )</a-typography-title
    >
    <a-input
      id="imageInput"
      type="file"
      placeholder="메인 사진"
      @change="uploadFile"
    />
    <a-typography-title :level="5"
      >추가 제품 사진 ( 최대 3장 까지 - 미구현 )</a-typography-title
    >
    <a-input
      id="imageInput"
      type="file"
      placeholder="서브 사진 1"
      style="margin-bottom: 10px"
    />
    <a-input
      id="imageInput"
      type="file"
      placeholder="서브 사진 2"
      style="margin-bottom: 10px"
    />
    <a-input
      id="imageInput"
      type="file"
      placeholder="서브 사진 3"
      style="margin-bottom: 10px"
    />
    <a-button @click="uploadSales">업로드</a-button>
  </a-card>
</template>
