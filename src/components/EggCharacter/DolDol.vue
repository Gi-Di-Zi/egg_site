<script setup></script>

<template>
  <a-card :body-style="{ padding: 20, width: '100%' }">
    <a-flex class="charaExplain">
      <a-flex>
        <img
          alt="profile"
          id="mainImage"
          src="https://fmcaxedcftqxqcdrdpfd.supabase.co/storage/v1/object/public/image/dol/dol_profile.png?t=2024-03-20T04%3A42%3A44.335Z"
          class="charaImage"
        />
      </a-flex>

      <a-flex
        vertical
        justify="flex-start"
        align="flex-start"
        style="margin-left: 50px"
      >
        <a-typography-title :level="2">
          “가만히 있으면 돈이 나오냐? 돈을 벌어야지!”
        </a-typography-title>

        <a-typography-title :level="4">
          <span style="margin-right: 15px"
            >이름 : 돌돌이 (알 종족 / 희귀형 - Real Stone)</span
          >
          |
          <span style="margin-left: 15px; margin-right: 15px"
            >생일 : 7월 14일
          </span>
          |
          <span style="margin-left: 15px; margin-right: 15px"
            >성격 : 고지식함</span
          >
          |
          <span style="margin-left: 15px">소속 : 조명가게 사장님</span>
        </a-typography-title>

        <a-typography-title :level="4">[ 캐릭터 소개 ]</a-typography-title>
        <p />
        <a-typography-paragraph class="typoSytle">
          가족이야기의 등장 캐릭터이자 아롱이와 아리의 아빠.
        </a-typography-paragraph>
        <a-typography-paragraph class="typoSytle">
          가족이 함께 운영하는 조명 가게의 사장님이며 아들과 딸을
          아르바이트생으로 두고 있다.
        </a-typography-paragraph>
        <a-typography-paragraph class="typoSytle">
          엄격한 성격이며 항상 미간에 주름이 잡혀있다.
        </a-typography-paragraph>
        <a-typography-paragraph class="typoSytle">
          모종의 사건으로 돈에 대한 집착이 심한 편이나 가족들을 매우 아끼고
          있다.
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
        src="https://fmcaxedcftqxqcdrdpfd.supabase.co/storage/v1/object/public/image/dol/dol_application.png?t=2024-03-20T04%3A42%3A54.441Z"
        class="turnaroundImage"
      />
    </div>
    <a-typography-title :level="4" style="text-align: start" class="typoMargin"
      >[ 턴 어라운드 ]</a-typography-title
    >
    <div style="display: flex; justify-content: center">
      <img
        alt="turnaround"
        src="https://fmcaxedcftqxqcdrdpfd.supabase.co/storage/v1/object/public/image/dol/dol_turnaround.png?t=2024-03-20T04%3A43%3A02.280Z"
        class="turnaroundImage"
      />
    </div>
  </a-card>
</template>

<style scoped></style>
