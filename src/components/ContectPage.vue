<script setup>
import { ref, onMounted } from "vue";
import { pageConfig } from "@/store";
import { InfoCircleTwoTone, CheckCircleTwoTone } from "@ant-design/icons-vue";
import { supabase } from "@/utils/supabase";
import { message as msg } from "ant-design-vue";

const store = pageConfig();
const name = ref("");
const email = ref("");
const message = ref("");
const modalVisible = ref(false);
const modalVisible2 = ref(false);

async function insertContect() {
  const { data, error } = await supabase
    .from("contect")
    .insert({
      title: name.value,
      email: email.value,
      contents: message.value,
    })
    .select();
  data;
  error;
  name.value = "";
  email.value = "";
  message.value = "";
}

const submitForm = () => {
  modalVisible.value = true;
};

const okModal = () => {
  if (name.value !== "" && email.value !== "" && message.value !== "") {
    insertContect();
    modalVisible2.value = true;
  } else {
    msg.error("채워지지 않는 부분이 있습니다.");
  }

  modalVisible.value = false;
};

const confirmModal = () => {
  modalVisible2.value = false;
};

const cancelModal = () => {
  modalVisible.value = false;
};

const { changePage } = store;

onMounted(() => {
  changePage("Contect");
});
</script>

<template>
  <a-typography-title :level="2">Contect</a-typography-title>
  <a-input v-model:value="name" placeholder="제목" class="contactForm" />
  <a-input v-model:value="email" placeholder="이메일" class="contactForm" />
  <a-input
    v-model:value="message"
    placeholder="내용"
    class="contactForm"
    style="height: 500px !important"
  />

  <a-button type="primary" @click="submitForm" class="contactForm"
    >제출</a-button
  >
  <a-modal :open="modalVisible" okText="OK" @ok="okModal" @cancel="cancelModal">
    <template #title>
      <div>제출 확인 <InfoCircleTwoTone two-tone-color="#c2c2c2" /></div>
    </template>
    <p>제출하시겠습니까?</p>
  </a-modal>

  <a-modal :open="modalVisible2" okText="OK" @ok="confirmModal">
    <template #title>
      <div>확인 완료 <CheckCircleTwoTone two-tone-color="#00ff00" /></div>
    </template>
    <p>제출되었습니다!</p>
  </a-modal>
</template>
