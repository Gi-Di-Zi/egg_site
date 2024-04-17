<script setup>
import { reactive, onMounted, ref } from "vue";
import { supabase } from "@/utils/supabase";
import { CloseCircleTwoTone } from "@ant-design/icons-vue";

const list = reactive({
  chatList: [],
  fileList: [],
});

const checked = ref(false);

const newMessage = ref("");
const sendMessage = async () => {
  let speaker = "";
  if (checked.value) {
    speaker = "you";
  } else {
    speaker = "me";
  }
  await supabase.from("chat").insert({
    speaker: speaker,
    context: newMessage.value,
    created_at: new Date(),
  });
  getChat();
  newMessage.value = "";
};

const deleteChat = async (id) => {
  await supabase.from("chat").delete().eq("id", id);
  getChat();
};

onMounted(() => {
  getChat();
  setInterval(getChat, 10000);
});

async function getChat() {
  const { data } = await supabase.from("chat").select();
  list.chatList = data;
}
</script>

<template>
  <a-typography-title :level="2">비밀</a-typography-title>
  <a-row>
    <a-col
      :span="8"
      style="display: flex; justify-content: center; border: 1px solid gray"
    >
      <div style="width: 90%">
        <a-typography-title :level="3">채팅</a-typography-title>
        <a-card
          style="
            width: 100%;
            height: 700px;
            background-color: greenyellow;
            margin-top: 30px;
            margin-bottom: 30px;
          "
        >
          <div
            style="
              display: flex;
              background-color: #a0a0a0;
              justify-content: center;
              padding: 5px;
            "
          >
            <span>나</span>
            <a-switch
              v-model:checked="checked"
              style="margin-left: 5px; margin-right: 5px"
            ></a-switch>
            <span>너</span>
          </div>
          <div style="overflow-y: auto; max-height: 560px">
            <template v-for="chat in list.chatList" :key="chat.id">
              <div
                v-if="chat.speaker === 'me'"
                style="
                  display: flex;
                  justify-content: end;
                  margin: 10px;
                  align-items: center;
                "
              >
                <CloseCircleTwoTone
                  style="align-content: center; margin-right: 10px"
                  two-tone-color="#eb2f96"
                  @click="deleteChat(chat.id)"
                />
                <h4 style="align-content: center">
                  {{ chat.created_at.split("T")[0] }}
                </h4>
                <h2
                  style="
                    border-radius: 20px;
                    background-color: #ececec;
                    padding-left: 20px;
                    padding-right: 20px;
                    align-content: center;
                    margin-left: 10px;
                  "
                >
                  {{ chat.context }}
                </h2>
              </div>
              <div
                v-if="chat.speaker === 'you'"
                style="display: flex; justify-content: start; margin: 10px"
              >
                <h2
                  style="
                    border-radius: 20px;
                    background-color: #ececec;
                    padding-left: 20px;
                    padding-right: 20px;
                    align-content: center;
                    margin-right: 10px;
                  "
                >
                  {{ chat.context }}
                </h2>
                <h4 style="align-content: center">
                  {{ chat.created_at.split("T")[0] }}
                </h4>
                <CloseCircleTwoTone
                  style="align-content: center; margin-left: 10px"
                  two-tone-color="#eb2f96"
                  @click="deleteChat(chat.id)"
                />
              </div>
            </template>
          </div>
          <div
            style="position: absolute; bottom: 20px; width: 90%; display: flex"
          >
            <a-input
              placeholder="메시지 작성"
              style="margin-bottom: 10px; margin-right: 10px"
              v-model:value="newMessage"
              @keyup.enter="sendMessage"
            />
            <a-button type="primary" @click="sendMessage">전송</a-button>
          </div>
        </a-card>
      </div>
    </a-col>
    <a-col
      :span="16"
      style="
        display: flex;
        justify-content: center;
        border: 1px solid gray;
        border-radius: 10px;
      "
    >
      <a-typography-title :level="3">파일 업로드</a-typography-title>
    </a-col>
  </a-row>
</template>
<style scoped></style>
