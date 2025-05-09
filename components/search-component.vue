<script lang="ts" setup>
import type { Interview } from "~/interfaces/interview";
import lodash from "lodash";

const props = defineProps<{
  data: Interview[];
}>();

const emit = defineEmits<{
  (e: "interview", data: Interview): void;
}>();

const interview = ref<Interview | undefined>(undefined);
const notFoundMessage = ref(false);
const search = ref("");

const onClick = () => {
  handleSearch(search.value);
};

const handleSearch = (text: string) => {
  const checkName = text.split(" ");
  if (checkName.length === 2) {
    interview.value = props.data.find(
      (item) =>
        item.firstName === checkName[0] && item.lastName === checkName[1]
    );
    emit("interview", interview.value as Interview);
  } else {
    interview.value = props.data.find((item) => item.interviewRefNo === text);
    emit("interview", interview.value as Interview);
  }
  if (lodash.isUndefined(interview.value)) {
    notFoundMessage.value = true;
  }
};
</script>

<template>
  <div
    class="flex justify-center items-center flex-col gap-2 select-none w-full"
    style="max-width: 500px"
  >
    <div class="w-full">
      <span class="text-white font-mono">ค้นหาข้อมูล</span>
      <input
        v-model="search"
        @keydown.enter="onClick"
        autofocus
        class="bg-black/70 placeholder:text-sm w-full shadow !outline-none text-white py-2 px-4 rounded border border-stone-800 hover:border-stone-700 hover:bg-black/40 transition"
        type="text"
        placeholder="รหัสประจำตัว หรือ ชื่อ-นามสกุล เป็นภาษาอังกฤษ"
      />
      <p v-if="notFoundMessage" class="text-red-600 text-center mt-2">
        ไม่พบข้อมูลที่คุณกำลังค้นหา
      </p>
    </div>
    <button
      @click="onClick"
      class="py-2 font-mono px-12 mt-3 rounded-full select-none !outline-none bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-orange-300 font-medium text-white border border-stone-800"
    >
      ตรวจสอบ
    </button>
  </div>
</template>

<style scoped></style>
