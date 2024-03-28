<script setup></script>

<template>
  <a-card :body-style="{ padding: 20, width: '100%' }">
    <a-flex class="charaExplain">
      <a-flex>
        <img
          alt="profile"
          id="mainImage"
          src="https://fmcaxedcftqxqcdrdpfd.supabase.co/storage/v1/object/public/image/a_r/ar_profile.png?t=2024-03-20T04%3A38%3A01.251Z"
          class="charaImage"
          oncontextmenu="return false;"
        />
      </a-flex>

      <a-flex
        vertical
        justify="flex-start"
        align="flex-start"
        style="margin-left: 50px"
      >
        <a-typography-title :level="2"> “비켜.” </a-typography-title>

        <a-typography-title :level="4">
          <span style="margin-right: 15px">이름 : 아리 (알 종족)</span> |
          <span style="margin-left: 15px; margin-right: 15px"
            >생일 : 1월 25일
          </span>
          |
          <span style="margin-left: 15px; margin-right: 15px"
            >성격 : 과격함</span
          >
          |
          <span style="margin-left: 15px">소속 : 조명가게 알바생</span>
        </a-typography-title>

        <a-typography-title :level="4">[ 캐릭터 소개 ]</a-typography-title>
        <p />
        <a-typography-paragraph class="typoSytle">
          가족이야기의 등장 캐릭터. 아롱이의 누나이자 돌돌이의 딸.
        </a-typography-paragraph>
        <a-typography-paragraph class="typoSytle">
          맨날 사고만 치는 동생과 달리 의젓하고 어려운 일도 척척 해내는 만능
          캐릭터이다.
        </a-typography-paragraph>
        <a-typography-paragraph class="typoSytle">
          성격이 불 같기 때문에 화를 자주 내지만 가족을 생각하고 동생을 챙겨주는
          따뜻한 면모 또한 존재한다.
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
        src="https://fmcaxedcftqxqcdrdpfd.supabase.co/storage/v1/object/public/image/a_r/ar_application.png?t=2024-03-20T04%3A38%3A14.475Z"
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
        src="https://fmcaxedcftqxqcdrdpfd.supabase.co/storage/v1/object/public/image/a_r/ar_turnaround.png?t=2024-03-20T04%3A38%3A21.224Z"
        class="turnaroundImage"
        oncontextmenu="return false;"
      />
    </div>
  </a-card>
</template>

<style scoped></style>
