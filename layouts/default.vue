<script lang="ts" setup>
import "../assets/css/global.css";
import LoadingComponent from "~/components/loading-component.vue";
</script>

<template>
  <loading-component />
  <slot />
</template>

<style scoped></style>
