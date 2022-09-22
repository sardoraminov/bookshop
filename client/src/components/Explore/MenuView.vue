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
    v-show="menuVisible"
    @click.self="$store.commit('setMenuVisible', false)"
    class="menu flex items-start h-screen max-h-screen fixed top-0 left-0 w-full"
  >
    <aside
      class="menu-component border-r-2 p-4 h-screen w-auto max-h-screen overflow-y-scroll bg-white text-dark-primary"
    >
      <router-link @click="$store.dispatch('playSong')" to="/explore" class="comp-title font-space text-3xl font-extrabold">
        Menu <span class="mark text-yellow">.</span>
      </router-link>
      <div class="comp-parts space-y-4">
        <nav class="part-links mt-3 font-manr">
          <h3 class="title font-bold text-lg">Shaxsiy</h3>
          <div class="links flex flex-wrap gap-2">
            <router-link
              @click="clickSound()"
              to="/explore/profile"
              class="bg-gray-100 py-2 px-3 rounded-md flex flex-row items-center transition hover:bg-yellow hover:text-white"
            >
              <ion-icon name="person-outline"></ion-icon>
              <p class="ml-2 font-bold">Kabinet</p>
            </router-link>
            <router-link
              @click="clickSound()"
              to="#"
              class="bg-gray-100 py-2 px-3 rounded-md flex flex-row items-center transition hover:bg-yellow hover:text-white"
            >
              <ion-icon name="cart-outline"></ion-icon>
              <p class="ml-2 font-bold">Savatcha</p>
            </router-link>
            <router-link
              @click="clickSound()"
              to="#"
              class="bg-gray-100 py-2 px-3 rounded-md flex flex-row items-center transition hover:bg-yellow hover:text-white"
            >
              <ion-icon name="heart-outline"></ion-icon>
              <p class="ml-2 font-bold">Sevimlilar</p>
            </router-link>
          </div>
        </nav>
      </div>
    </aside>
    <button
      @click="
        () => {
          $store.commit('setMenuVisible', false);
          $store.dispatch('playSong');
        }
      "
      class="text-3xl font-bold text-black ml-2"
    >
      &times;
    </button>
  </div>
</template>

<style scoped>
  .menu {
    z-index: 999999999999999;
  }
.menu-component {
  box-shadow: 11px 0px 92px -3px #d6d5d5bf;
  z-index: 999999999999999 !important;
}
.menu-component::-webkit-scrollbar {
  display: none;
}

ion-icon {
  font-size: 18px;
  stroke-width: 40px;
}
</style>
