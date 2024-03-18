<script setup></script>

<template>
  <a-card :body-style="{ padding: 20, width: '100%' }">
    <a-flex class="charaExplain">
      <a-flex>
        <img
          alt="main1"
          id="mainImage"
          src="https://fmcaxedcftqxqcdrdpfd.supabase.co/storage/v1/object/public/image/a_long/along1.png"
          class="charaImage"
        />
        <img
          alt="main2"
          id="actImage"
          src="https://fmcaxedcftqxqcdrdpfd.supabase.co/storage/v1/object/public/image/a_long/along2.png"
          class="charaImage"
        />
      </a-flex>

      <a-flex
        vertical
        justify="flex-start"
        align="flex-start"
        style="margin-left: 30px"
      >
        <a-typography-title :level="2">
          “캐릭터를 관통하는 대사.”
        </a-typography-title>

        <a-typography-title :level="4">
          <span style="margin-right: 15px">이름 : 아롱이</span> |
          <span style="margin-left: 15px">나이 : 20살</span>
        </a-typography-title>
        <a-typography-paragraph>
          감자시티 인턴 겸 조명가게 알바생.
        </a-typography-paragraph>
        <a-typography-paragraph> 착하고 호기심이 많다. </a-typography-paragraph>
        <a-typography-paragraph>
          어리숙하고 소심한 성격으로 다양한 사건에 자주 휘말림.
        </a-typography-paragraph>
        <a-typography-paragraph>
          기타등등...기타등등...기타등등...기타등등...기타등등...기타등등...기타등등...기타등등...기타등등...기타등등...기타등등...기타등등...기타등등...기타등등...기타등등...기타등등...
        </a-typography-paragraph>
      </a-flex>
    </a-flex>
    <img
      alt="turnaround"
      id="turnaroundImage"
      src="https://fmcaxedcftqxqcdrdpfd.supabase.co/storage/v1/object/public/image/a_long/along_turnaround.png"
      class="turnaroundImage"
    />
    <img
      alt="doodle"
      src="https://fmcaxedcftqxqcdrdpfd.supabase.co/storage/v1/object/public/image/a_long/along_doodle1.png"
      class="turnaroundImage"
    />
  </a-card>
</template>

<style scoped></style>
