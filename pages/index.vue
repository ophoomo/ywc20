<script lang="ts" setup>
import SearchComponent from "../components/search-component.vue";
import ResultComponent from "../components/result-component.vue";
import { $fetch } from "ofetch";
import { onMounted } from "vue";
import type { Interview } from "~/interfaces/interview";

interface YwcAPIResponse {
  content: Interview[];
  design: Interview[];
  marketing: Interview[];
  programing: Interview[];
}

const refId = "PG24";
const dataSource = ref<Interview[]>([]);
const interview = ref<Interview | undefined>(undefined);

const getDataAPI = async () => {
  const response = await $fetch<YwcAPIResponse>(
    "https://api.ywc20.ywc.in.th/homework/candidates",
    {
      method: "GET",
      headers: {
        "x-reference-id": refId,
      },
    }
  );
  if (!response) return;
  dataSource.value = Object.values(response).flat();
};

onMounted(() => {
  getDataAPI();
});
</script>

<template>
  <div
    class="flex justify-center items-center !h-screen w-full flex-col gap-5 p-5"
  >
    <div class="mb-5 flex gap-10 flex-wrap justify-center items-center">
      <NuxtImg
        draggable="false"
        src="/assets/ywc20-logo-main.webp"
        width="300px"
      />
      <div class="flex justify-center items-center flex-col select-none">
        <h1 class="text-2xl text-white shadow">ประกาศผล</h1>
        <h2 class="text-4xl font-mono text-orange-500 shadow">รอบสัมภาษณ์</h2>
      </div>
    </div>
    <SearchComponent
      v-if="interview === undefined"
      @interview="(data) => (interview = data)"
      :data="dataSource"
    />
    <ResultComponent @back="interview = undefined" v-else :data="interview" />
  </div>
</template>

<style scoped></style>
