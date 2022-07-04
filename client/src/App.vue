<script setup>
import ToastView from "./components/ToastView.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import LoadingView from "./components/LoadingView.vue";

const toastShow = computed(() => useStore().state.toast.show);
const loading = computed(() => useStore().state.loading);
</script>

<template>
  <div class="parent sm:px-4 md:px-6 px-2 relative">
    <ToastView v-if="toastShow"/>
    <LoadingView v-if="loading"/>
    <router-view v-slot="{ Component, route }" appear>
      <transition :name="route.meta.transition || 'fade'" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

html::-webkit-scrollbar {
  display: none;
}
</style>
