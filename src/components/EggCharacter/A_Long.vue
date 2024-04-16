<script setup></script>

<template>
  <a-card :body-style="{ padding: 20, width: '100%' }">
    <a-flex class="charaExplain">
      <a-flex>
        <img
          alt="profile"
          id="mainImage"
          src="https://fmcaxedcftqxqcdrdpfd.supabase.co/storage/v1/object/public/image/a_long/along_profile.png"
          class="charaImage"
          oncontextmenu="return false;"
        />
      </a-flex>

      <a-flex
        vertical
        justify="flex-start"
        align="flex-start"
        style="margin-left: 50px"
        class="narrowTypo3"
      >
        <a-typography-title :level="2" class="narrowTypo">
          “어... 이게 뭐지?”
        </a-typography-title>

        <a-typography-title :level="4" class="narrowTypo2">
          <span style="margin-right: 15px">이름 : 아롱이 (알 종족)</span>
          <span class="wideSpace">|</span>
          <p class="narrowSpace" />
          <span style="margin-left: 15px; margin-right: 15px"
            >생일 : 3월 26일
          </span>
          <span class="wideSpace">|</span>
          <p class="narrowSpace" />
          <span style="margin-left: 15px; margin-right: 15px"
            >성격 : 어리숙함</span
          >
          <span class="wideSpace">|</span>
          <p class="narrowSpace" />
          <span style="margin-left: 15px"
            >소속 : 감자시티 대기업 인턴, 조명가게 알바생</span
          >
        </a-typography-title>

        <a-typography-title :level="4">[ 캐릭터 소개 ]</a-typography-title>
        <p />
        <a-typography-paragraph class="typoSytle">
          가족이야기와 알 시리즈의 주인공.
        </a-typography-paragraph>
        <a-typography-paragraph class="typoSytle">
          점 3개로 이루어진 맹한 얼굴이 특징이며 어리숙하고 소심하지만 항상
          열심히 일하며 착하고 호기심 많은 성격이다.
        </a-typography-paragraph>
        <a-typography-paragraph class="typoSytle">
          항상 다양한 사건사고에 휘말린다.
        </a-typography-paragraph>
      </a-flex>
    </a-flex>
    <a-typography-title :level="4" style="text-align: start" class="typoMargin"
      >[ 응용 동작 ]</a-typography-title
    >
    <div style="display: flex; justify-content: center">
      <img
        alt="application"
        id="turnaroundImage"
        src="https://fmcaxedcftqxqcdrdpfd.supabase.co/storage/v1/object/public/image/a_long/along_application.png?t=2024-03-19T07%3A33%3A40.050Z"
        class="turnaroundImage"
        oncontextmenu="return false;"
      />
    </div>
    <a-typography-title :level="4" style="text-align: start" class="typoMargin"
      >[ 턴 어라운드 ]</a-typography-title
    >
    <div style="display: flex; justify-content: center">
      <img
        alt="turnaround"
        src="https://fmcaxedcftqxqcdrdpfd.supabase.co/storage/v1/object/public/image/a_long/along_turnaround_2.png?t=2024-03-19T07%3A47%3A13.971Z"
        class="turnaroundImage"
        oncontextmenu="return false;"
      />
    </div>
  </a-card>
</template>

<style scoped></style>
