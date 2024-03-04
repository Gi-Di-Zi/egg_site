<script setup></script>

<template>
  <a-card :body-style="{ padding: 0, overflow: 'hidden' }">
    <a-flex justify="flex-start">
      <img alt="avatar" id="myImage" src="../../img/egg.png" />
      <a-flex
        vertical
        align="flex-start"
        justify="space-between"
        :style="{ padding: '32px' }"
      >
        <a-typography>
          <a-typography-title :level="3"> “저는 알이에요.” </a-typography-title>
        </a-typography>
      </a-flex>
    </a-flex>
  </a-card>
</template>

<style scoped></style>
