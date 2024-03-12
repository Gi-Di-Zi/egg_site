<script setup>
import { ref, onMounted } from "vue";
import { pageConfig } from "@/store";
import { InfoCircleTwoTone, CheckCircleTwoTone } from "@ant-design/icons-vue";

const store = pageConfig();
const name = ref("");
const email = ref("");
const message = ref("");
const modalVisible = ref(false);
const modalVisible2 = ref(false);

const submitForm = () => {
  modalVisible.value = true;
};

const okModal = () => {
  modalVisible.value = false;
  modalVisible2.value = true;
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
  <a-input v-model="name" placeholder="제목" class="contactForm"></a-input>
  <a-input v-model="email" placeholder="이메일" class="contactForm"></a-input>
  <a-input
    v-model="message"
    placeholder="내용"
    class="contactForm"
    style="height: 500px !important"
  ></a-input>

  <a-button type="primary" @click="submitForm" class="contactForm"
    >제출</a-button
  >
  <a-modal
    :visible="modalVisible"
    okText="OK"
    @ok="okModal"
    @cancel="cancelModal"
  >
    <template #title>
      <div>제출 확인 <InfoCircleTwoTone two-tone-color="#c2c2c2" /></div>
    </template>
    <p>제출하시겠습니까?</p>
  </a-modal>

  <a-modal :visible="modalVisible2" okText="OK" @ok="confirmModal">
    <template #title>
      <div>확인 완료 <CheckCircleTwoTone two-tone-color="#00ff00" /></div>
    </template>
    <p>제출되었습니다!</p>
  </a-modal>
</template>
