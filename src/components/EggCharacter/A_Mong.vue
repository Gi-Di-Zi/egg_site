<script setup></script>

<template>
  <a-card :body-style="{ padding: 20, width: '100%' }">
    <a-flex class="charaExplain">
      <a-flex>
        <img
          alt="profile"
          id="mainImage"
          src="https://fmcaxedcftqxqcdrdpfd.supabase.co/storage/v1/object/public/image/a_mong/among_profile.png"
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
          “이거 재밌겠는걸? 히히히...”
        </a-typography-title>

        <a-typography-title :level="4">
          <span style="margin-right: 15px">이름 : 아몽이 (알 종족)</span> |
          <span style="margin-left: 15px; margin-right: 15px"
            >생일 : 11월 18일
          </span>
          |
          <span style="margin-left: 15px; margin-right: 15px"
            >성격 : 장난꾸러기, 매사에 적극적</span
          >
          |
          <span style="margin-left: 15px"
            >좋아하는 음식 : 케이크, 달달한 계란 요리
          </span>
        </a-typography-title>

        <a-typography-title :level="4">[ 캐릭터 소개 ]</a-typography-title>
        <p />
        <a-typography-paragraph class="typoSytle">
          아롱이의 친구.
        </a-typography-paragraph>
        <a-typography-paragraph class="typoSytle">
          감자 시티 최고의 분위기 메이커. 요리하는 것을 좋아하고 옷을 항상
          깔끔하게 입고 다닌다.
        </a-typography-paragraph>
        <a-typography-paragraph class="typoSytle">
          다만 늘 계략을 꾸미고 있다. 지금도...
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
        src="https://fmcaxedcftqxqcdrdpfd.supabase.co/storage/v1/object/public/image/a_mong/among_application.png"
        class="turnaroundImage"
      />
    </div>
    <a-typography-title :level="4" style="text-align: start" class="typoMargin"
      >[ 턴 어라운드 ]</a-typography-title
    >
    <div style="display: flex; justify-content: center">
      <img
        alt="turnaround"
        src="https://fmcaxedcftqxqcdrdpfd.supabase.co/storage/v1/object/public/image/a_mong/among_turnaround.png?t=2024-03-20T04%3A28%3A32.948Z"
        class="turnaroundImage"
      />
    </div>
  </a-card>
</template>

<style scoped></style>
