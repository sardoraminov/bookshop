<script setup>
import PatternView from "../../components/Landing/PatternView.vue";
import { computed, reactive } from "vue";
import { useStore } from "vuex";

const store = useStore();

const disabledButton = computed(() => {
  return store.state.button.disabled;
});

let consumer = reactive({
  username: "",
  password: "",
});

const login = async () => {
  store.dispatch('playSong')
  store.dispatch("auth/login", consumer).then(() => {
    console.log("auth/login called");
  });
};
</script>

<template>
  <div class="login-page h-[91.5vh] flex flex-col items-center justify-center">
    <div class="register-box w-[500px]">
      <div class="box border-2 border-dark-primary p-6">
        <h1 class="box-title font-extrabold text-xl ml-4 font-exo">
          Kirish <span class="text-yellow">.</span>
        </h1>
        <form @submit.prevent="login" class="box-form mt-8 flex flex-col">
          <div class="form-group flex flex-col mb-4">
            <label for="username" class="font-mont text-base font-medium"
              >Username <span class="text-yellow">*</span></label
            >
            <input
              autocomplete="off"
              type="text"
              v-model="consumer.username"
              id="username"
              placeholder="Foydalanuvchi ismi"
              class="outline-none border-dark-primary border-2 px-4 py-2 font-mont"
            />
          </div>

          <div class="form-group flex flex-col mb-6">
            <label for="password" class="font-mont text-base font-medium"
              >Parol <span class="text-yellow">*</span></label
            >
            <input
              autocomplete="off"
              type="password"
              id="password"
              v-model="consumer.password"
              placeholder="*********"
              class="outline-none border-dark-primary border-2 px-4 py-2 font-mont"
            />
          </div>

          <button
            @click="login()"
            :disabled="disabledButton"
            class="send-btn disabled:bg-gray-500 transition-all mt-2 w-full p-3 text-white bg-yellow uppercase font-mont font-bold text-lg disabled:bg-gray disabled:cursor-default"
            type="submit"
          >
            KIRISH
          </button>
        </form>
      </div>
      <footer class="author font-exo font-medium mt-10 text-center">
        made with 💛 by dasturchioka
      </footer>
    </div>
    <div class="pattern w-full flex flex-row fixed bottom-0 -left-10 right-0">
      <div>
        <PatternView />
      </div>
      <div class="-translate-x-[70px]">
        <PatternView />
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 561px) {
  .register-box {
    margin: 10px;
    width: 100%;
  }
}

.box {
  box-shadow: 16px 16px 0px #333533;
}

.send-btn:hover {
  transform: translate(-6px, -6px);
  box-shadow: 8px 8px 0px #333533;
}
</style>
