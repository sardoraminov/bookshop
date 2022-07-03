<template>
  <div
    v-show="toastOptions.show"
    class="toast-notification bg-white inline w-auto border-2 border-dark-primary font-manr p-2 text-lg font-medium shadow-lg rounded"
  >
    {{ toastOptions.msg }}
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const toastOptions = computed(() => {
  return store.state.toast;
});
</script>

<style scoped>
.toast-notification {
  position: fixed;
  top: 20px;
  animation: fade-up 0.4s ease forwards;
  z-index: 999999999999999999999999;
}

@media (max-width: 406px) {
  .toast-notification {
    width: 95%;
    top: 10px;
    left: 10px;
    right: 10px;
  }
}

@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
