<script setup></script>

<template>
  <a-card :body-style="{ padding: 20, width: '100%' }">
    <a-flex class="charaExplain">
      <a-flex>
        <img
          alt="profile"
          id="mainImage"
          src="https://fmcaxedcftqxqcdrdpfd.supabase.co/storage/v1/object/public/image/a_ln/aln_profile.png"
          class="charaImageAln"
          oncontextmenu="return false;"
        />
      </a-flex>

      <a-flex
        vertical
        justify="flex-start"
        align="flex-start"
        class="narrowTypo3"
        style="margin-left: 50px"
      >
        <a-typography-title :level="2" class="narrowTypo">
          “무슨 일 있으면 형한테 말해.”
        </a-typography-title>

        <a-typography-title :level="4" class="narrowTypo2">
          <span style="margin-right: 15px">이름 : 아릉이 (알 종족)</span>
          <span class="wideSpace">|</span>
          <p class="narrowSpace" />
          <span style="margin-left: 15px; margin-right: 15px"
            >생일 : 10월 23일
          </span>
          <span class="wideSpace">|</span>
          <p class="narrowSpace" />
          <span style="margin-left: 15px; margin-right: 15px"
            >성격 : 상남자, 츤데레</span
          >
          <span class="wideSpace">|</span>
          <p class="narrowSpace" />
          <span style="margin-left: 15px"
            >특이사항 : 모든 옷이 작아서 불만이다.</span
          >
        </a-typography-title>

        <a-typography-title :level="4">[ 캐릭터 소개 ]</a-typography-title>
        <p />
        <a-typography-paragraph class="typoSytle">
          아롱이 (알) 의 친한 형.
        </a-typography-paragraph>
        <a-typography-paragraph class="typoSytle">
          아롱이와 같이 어릴 때부터 고양이 종족한테 자주 쫒겨 강해지는 것을
          목표로 삼고 있다.
        </a-typography-paragraph>
        <a-typography-paragraph class="typoSytle">
          고양이 종족이 가장 먹기 좋은 사이즈와 형태를 가지고 있으며 고양이 종족
          사이에서는 가장 맛있을 거 같은 알로 선정되었다.
        </a-typography-paragraph>
      </a-flex>
    </a-flex>
    <a-typography-title
      :level="4"
      style="text-align: start"
      class="typoMarginAln"
      >[ 응용 동작 ]</a-typography-title
    >
    <div style="display: flex; justify-content: center">
      <img
        alt="application"
        id="turnaroundImage"
        src="https://fmcaxedcftqxqcdrdpfd.supabase.co/storage/v1/object/public/image/a_ln/aln_application.png?t=2024-03-20T04%3A30%3A39.998Z"
        class="turnaroundImage"
        oncontextmenu="return false;"
      />
    </div>
    <a-typography-title
      :level="4"
      style="text-align: start"
      class="typoMarginAln"
      >[ 턴 어라운드 ]</a-typography-title
    >
    <div style="display: flex; justify-content: center">
      <img
        alt="turnaround"
        src="https://fmcaxedcftqxqcdrdpfd.supabase.co/storage/v1/object/public/image/a_ln/aln_turnaround.png?t=2024-03-20T05%3A40%3A51.351Z"
        class="turnaroundImage"
        oncontextmenu="return false;"
      />
    </div>
  </a-card>
</template>

<style scoped></style>
