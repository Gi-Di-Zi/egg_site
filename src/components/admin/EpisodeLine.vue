<script setup>
import { ref, defineProps, defineEmits } from "vue";
import dayjs from "dayjs";
import { supabase } from "@/utils/supabase";
import { message as msg } from "ant-design-vue";

const props = defineProps({
  data: Object,
  index: Number,
});

const supabaseUrl = process.env.VUE_APP_SUPABASE_URL;

const emit = defineEmits(["updateList"]);

const deleteModal = ref(false);
const changeModal = ref(false);

const showSwitch = ref(props.data.show);

const title = ref(props.data.title);
const type = ref(props.data.type);
const salesDescription = ref(props.data.description);
const createdDate = ref(dayjs(props.data.createdDate));

const deleteModalOn = () => {
  deleteModal.value = true;
};

const okDeleteModal = () => {
  deleteGoods();
  msg.error("삭제 완료되었습니다.");
  deleteModal.value = false;
};
const cancelDeleteModal = () => {
  deleteModal.value = false;
};

const changeModalOn = () => {
  changeModal.value = true;
};

const okChangeModal = () => {
  changeGoods();
  msg.info("변경 완료되었습니다.");
  changeModal.value = false;
};
const cancelChangeModal = () => {
  changeModal.value = false;
};

async function showChange(event) {
  const { newData, error } = await supabase
    .from("episode")
    .update({ show: event })
    .eq("id", props.data.id)
    .select();

  if (error) {
    console.log(error);
  } else {
    newData;
  }
}

async function deleteGoods() {
  const { newData, error } = await supabase
    .from("episode")
    .delete()
    .eq("id", props.data.id);

  if (error) {
    console.log(error);
  } else {
    emit("updateList");
    newData;
  }
}

async function changeGoods() {
  const { newData, error } = await supabase
    .from("episode")
    .update({
      title: title.value,
      type: type.value,
      description: salesDescription.value,
      createdDate: createdDate.value,
    })
    .eq("id", props.data.id)
    .select();

  if (error) {
    console.log(error);
  } else {
    emit("updateList");
    newData;
  }
}
</script>

<template>
  <div style="display: flex; align-items: center">
    <a-typography-title :level="3">{{ index + 1 }}.</a-typography-title>
    <a-typography-title :level="4">{{ data.title }}</a-typography-title>
    <a-switch
      v-model:checked="showSwitch"
      style="margin-left: 10px; margin-top: 15px"
      @change="showChange"
    ></a-switch>
  </div>
  <div
    style="
      display: flex;
      justify-content: start;
      margin: 5px;
      margin-bottom: 10px;
    "
  >
    <a-image
      :src="`${supabaseUrl}/storage/v1/object/public/image/episode/${data.mainUrl}`"
      style="height: 100px"
    />
    <iframe
      height="100px"
      width="200px"
      :src="data.videoUrl"
      v-if="type == 'video'"
    />
  </div>
  <div style="display: flex; align-items: center">
    <a-button @click="changeModalOn" style="margin: 5px">변경</a-button>
    <a-button @click="deleteModalOn" style="margin: 5px">삭제</a-button>
  </div>
  <a-divider style="margin: 10px; border-color: #2c3e50" dashed />

  <a-modal
    :open="deleteModal"
    okText="OK"
    @ok="okDeleteModal"
    @cancel="cancelDeleteModal"
  >
    <template #title>
      <div>삭제 확인</div>
    </template>
    정말 삭제하시겠습니까?
  </a-modal>

  <a-modal
    :open="changeModal"
    okText="OK"
    @ok="okChangeModal"
    @cancel="cancelChangeModal"
  >
    <template #title>
      <a-typography-title :level="3">갤러리 정보</a-typography-title>
    </template>
    <a-typography-title :level="4">갤러리 유형</a-typography-title>
    <a-select
      v-model:value="type"
      placeholder="유형을 선택해주세요"
      style="width: 100%; margin-bottom: 10px; text-align: start"
    >
      <a-select-option value="image">이미지</a-select-option>
      <a-select-option value="emoticon">이모티콘</a-select-option>
      <a-select-option value="animation">애니메이션</a-select-option>
      <a-select-option value="continuity">콘티</a-select-option>
      <a-select-option value="video">동영상</a-select-option>
      <a-select-option value="cartoon">4컷 만화</a-select-option>
      <a-select-option value="etc">기타</a-select-option>
    </a-select>
    <a-typography-title :level="4">갤러리 이름</a-typography-title>
    <a-input v-model:value="title"></a-input>
    <a-typography-title :level="4">갤러리 설명</a-typography-title>
    <a-input v-model:value="salesDescription"></a-input>
    <a-typography-title :level="4">제작 날짜</a-typography-title>
    <a-date-picker v-model:value="createdDate" style="width: 100%" />
  </a-modal>
</template>
