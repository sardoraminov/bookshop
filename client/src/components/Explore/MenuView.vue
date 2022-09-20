<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const clickSound = async () => {
  store.dispatch("playSong").then(() => {
    return;
  });
};

let menuVisible = computed(() => {
  return store.state.menuVisible;
});
</script>

<template>
  <div
    class="menu flex items-start bg-black bg-opacity-30 h-screen max-h-screen fixed top-0 left-0 w-full"
  >
    <aside
      class="menu-component p-4 h-screen w-auto max-h-screen overflow-y-scroll bg-white text-dark-primary"
    >
      <h1 class="comp-title font-space text-2xl font-extrabold">
        Menu <span class="mark text-yellow">.</span>
      </h1>
      <div class="comp-parts">
        <nav class="part-links font-manr">
          <router-link
            @click="clickSound()"
            to="#"
            class="bg-gray-200 py-2 px-3 rounded-md flex flex-row items-center transition hover:bg-yellow hover:text-white"
          >
            <ion-icon name="person-outline"></ion-icon>
            <p class="ml-2 font-bold">Kabinet</p>
          </router-link>
        </nav>
      </div>
    </aside>
    <button>&times;</button>
  </div>
</template>

<style scoped>
.menu-component::-webkit-scrollbar {
  display: none;
}
</style>
