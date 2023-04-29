<script setup>
import { useStore } from "vuex";
import navIcon from "../../resources/img/navicon.svg";

const store = useStore();

const handleClick = () => {
  store.dispatch("playSong").then(() => {
    store.commit("setMenuVisible", true);
  });
};
</script>

<template>
  <nav class="navigation py-5 links flex flex-row items-center justify-between">
    <div class="nav-logo">
      <div class="open flex flex-row items-center">
        <button @click="handleClick">
          <img :src="navIcon" alt="navbar icon" />
        </button>
        <p class="font-space font-bold text-dark-primary ml-5 text-xl">
          Booki <span class="text-yellow">.</span>
        </p>
      </div>
    </div>
    <div class="nav-search font-manr ml-10 flex items-center font-medium w-[70%] space-x-4 border rounded px-4 py-2">
      <ion-icon class="text-gray-600" name="search-outline"></ion-icon>
      <input type="text" placeholder="Izlash..." class="outline-none w-full">
    </div>
  </nav>
</template>

<style scoped>
@media (max-width: 560px) {
  .open p {
    display: none;
  }
}
</style>