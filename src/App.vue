<script setup lang="ts">
import { onMounted } from "vue";
import { option1 } from "@/api/home";
onMounted(async () => {
  // const res = await option1()
  // console.log(res)

})
</script>

<template>
  <router-view></router-view>
</template>

<style lang="less">
h1 {
  background-color: @warnColor;
  .hoverShadow();
}
</style>
