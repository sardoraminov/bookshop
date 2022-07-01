<script setup>
const { showModal, title, content } = defineProps({
  showModal: Boolean,
  title: String,
  content: String,
});
</script>
<template>
  <div
    v-show="showModal"
    class="modal w-full h-screen z-40 fixed top-0 left-0 right-0 bg-dark-primary bg-opacity-70 flex flex-col items-center justify-center"
  >
    <div class="modal-box bg-white rounded p-4">
      <div class="box-title mb-4 flex flex-row items-center justify-between">
        <h1 class="title font-mont text-lg font-bold">{{ title }}</h1>
        <button class="btn text-2xl">&times;</button>
      </div>
      <div class="box-desc font-manr" v-html="content"></div>
    </div>
  </div>
</template>
<style></style>
