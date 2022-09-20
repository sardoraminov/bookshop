<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

let menuVisible = computed(() => {
  return store.state.menuVisible;
});
</script>

<template>
  <div class="menu">
    <aside class="menu-component">
      <h1 class="comp-title">Menu <span class="mark">.</span></h1>
      <div class="comp-parts">
        <nav class="part-links">
          <router-link to="">
            <ion-icon name="heart"></ion-icon>
          </router-link>
        </nav>
      </div>
    </aside>
    <button>&times;</button>
  </div>
</template>

<style></style>
