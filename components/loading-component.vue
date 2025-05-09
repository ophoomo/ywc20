<script lang="ts" setup>
import { motion } from "motion-v";

const loading = ref(true);
const showLoop = ref(false);

onMounted(() => {
  const timer = setTimeout(() => {
    loading.value = false;
    clearTimeout(timer);
  }, 2800);
});
</script>

<template>
  <AnimatePresence>
    <motion.div
      v-if="loading"
      :exit="{ opacity: 0 }"
      :initial="{ opacity: 1 }"
      class="w-full !h-screen bg-black fixed flex justify-center items-center z-50!"
    >
      <div>
        <motion.div
          v-if="showLoop"
          :animate="{ scale: [1, 1.5, 1] }"
          :transition="{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.1,
          }"
        >
          <NuxtImg src="/assets/logo-ywc20-mono.webp" />
        </motion.div>
        <motion.div
          v-else
          :animate="{ scale: 1, opacity: 1 }"
          :initial="{ scale: 0, opacity: 0 }"
          :transition="{ duration: 0.3, ease: 'easeInOut' }"
          @animationComplete="showLoop = true"
        >
          <NuxtImg src="/assets/logo-ywc20-mono.webp" />
        </motion.div>
      </div>
    </motion.div>
  </AnimatePresence>
</template>

<style scoped></style>
