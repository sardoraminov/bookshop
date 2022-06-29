<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

let count = ref(store.getters["getCount"])

const incrementCount = () => {
  store.commit("setCount", count.value++);
};
</script>

<template>
  <div class="landing">
    <h1>{{ count }}</h1>
    <button @click="incrementCount()">Increment</button>
  </div>
</template>

<style></style>
