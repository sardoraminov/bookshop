<script setup>
import { computed, onMounted } from "@vue/runtime-core";
import api from "../helpers/api";
import { useStore } from "vuex";
import Cookies from "js-cookie";
import MenuView from "../components/Explore/MenuView.vue";
import NavbarView from "../components/Explore/NavbarView.vue";

const store = useStore();
const token = Cookies.get("token");

const menuVisible = computed(() => {
  return store.state.menuVisible;
});

const chekcUserValid = async () => {
  const res = await api.get("/accounts/loggedin", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const data = await res.data;

  if (data.status === "bad") {
    store.commit("setToastShow", true);
    store.commit("setToastMsg", data.msg);

    Cookies.remove("token");
    Cookies.remove("account");

    window.location.href = "/";
  } else {
    return;
  }
};

onMounted(() => {
  chekcUserValid();
});
</script>

<template>
  <div class="explore">
    <NavbarView/>
    <Transition>
      <MenuView />
    </Transition>
    <router-view/>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 1;
  transform: translateX(-90%);
}
</style>
