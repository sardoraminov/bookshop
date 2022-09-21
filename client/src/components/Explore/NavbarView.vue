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
  <nav class="navigation py-5 links flex flex-row items-center">
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
    <div class="nav-links font-manr ml-10 font-medium space-x-4">
      <router-link to="#!" class="link transition hover:text-yellow">Haqimizda</router-link>
      <router-link to="#!" class="link transition hover:text-yellow">Bog'lanish</router-link>
      <router-link to="#!" class="link transition hover:text-yellow">FAQ</router-link>
    </div>
  </nav>
</template>
