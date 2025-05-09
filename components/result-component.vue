<script lang="ts" setup>
import {type Interview, MajorType} from "~/interfaces/interview";

defineProps<{
  data: Interview;
}>();

const emit = defineEmits<{
  (e: 'back'): void
}>()

const getImageMajor = (major: MajorType): string => {
  switch (major) {
    case MajorType.CONTENT:
      return 'content.webp'
    case MajorType.PROGRAMMING:
      return 'programming.webp'
    case MajorType.DESIGN:
      return 'design.webp'
    case MajorType.MARKETING:
      return 'marketing.webp'
  }
}

const onBack = () => {
  emit('back')
}
</script>

<template>
  <div
    class="bg-black/30 shadow backdrop-blur-md select-none border-stone-200 p-5 rounded w-full z-10 flex relative justify-center items-center flex-col gap-3"
    style="max-width: 500px"
  >
    <NuxtImg
      :src="`/assets/${getImageMajor(data.major)}`"
      draggable="false"
      width="200px"
    />
    <div class="text-center">
      <h1 class="text-2xl text-white mt-3">
        ยินดีด้วยคุณ
        <b class="text-orange-500 font-mono"
          >{{ data.firstName }} {{ data.lastName }}</b
        >
      </h1>
      <h2 class="text-3xl text-green-400 font-mono">"ผ่านการคัดเลือก"</h2>
      <p class="text-white">หมายเลขประจำตัว {{ data.interviewRefNo }}</p>
    </div>
  </div>
  <button
    @click="onBack"
    class="text-white outline-0 hover:bg-black/20 rounded px-8 py-2"
  >
    กลับสู่หน้าหลัก
  </button>
</template>

<style scoped></style>
