<script setup>
import { useStore } from "vuex";
import { reactive, watch } from "vue";
import PatternView from "../../components/Landing/PatternView.vue";

const store = useStore();

let consumer = reactive({
  username: "",
  phone: "+998",
  password: "",
  gender: "",
});

const register = async () => {
  store.dispatch("auth/register", consumer).then(() => {
    console.log("dispatch called");
  });
};
</script>

<template>
  <div
    class="register-page h-[91.5vh] flex flex-col items-center justify-center"
  >
    <div class="register-box w-[500px]">
      <div class="box border-2 border-dark-primary p-6">
        <h1 class="box-title font-extrabold text-xl ml-4 font-exo">
          Ro'yxatdan o'tish <span class="text-yellow">.</span>
        </h1>
        <div class="box-form mt-8 flex flex-col">
          <div class="form-group flex flex-col mb-4">
            <label for="username" class="font-mont text-base font-medium"
              >Username <span class="text-yellow">*</span></label
            >
            <input
              autocomplete="off"
              type="text"
              v-model="consumer.username"
              id="username"
              placeholder="sardoraminov07"
              class="outline-none border-dark-primary border-2 px-4 py-2 font-mont"
            />
          </div>
          <div class="form-group flex flex-col mb-4">
            <label for="phone" class="font-mont text-base font-medium"
              >Telefon <span class="text-yellow">*</span></label
            >
            <input
              autocomplete="off"
              type="text"
              id="phone"
              v-model="consumer.phone"
              placeholder="+998 (99) 944 76-13"
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
              placeholder="kuchliparol07_"
              class="outline-none border-dark-primary border-2 px-4 py-2 font-mont"
            />
          </div>
          <div class="form-group flex flex-col mb-6">
            <p class="font-mont text-base mb-2 font-medium">
              Jins <span class="text-yellow">*</span>
            </p>
            <div class="radios flex flex-row items-center justify-between">
              <div class="radio relative flex flex-row items-center">
                <input
                  type="radio"
                  v-model="consumer.gender"
                  id="male"
                  name="radio"
                  value="male"
                  class="opacity-0"
                />
                <label
                  for="male"
                  class="label font-mont font-medium cursor-pointer ml-4"
                  >Erkak</label
                >
                <label
                  for="male"
                  class="checkmark absolute left-0 w-6 h-6 border-2 border-yellow rounded-full"
                ></label>
                <label
                  for="male"
                  class="dot absolute left-[6px] w-3 h-3 rounded-full"
                ></label>
              </div>
              <div class="radio relative flex flex-row items-center">
                <input
                  type="radio"
                  v-model="consumer.gender"
                  id="female"
                  name="radio"
                  value="female"
                  class="opacity-0"
                />
                <label
                  for="female"
                  class="label font-mont font-medium cursor-pointer"
                  >Ayol</label
                >
                <label
                  for="female"
                  class="checkmark absolute -left-4 w-6 h-6 border-2 border-yellow rounded-full"
                ></label>
                <label
                  for="female"
                  class="dot absolute -left-[10px] w-3 h-3 rounded-full"
                ></label>
              </div>
              <div class="radio relative flex flex-row items-center">
                <input
                  type="radio"
                  v-model="consumer.gender"
                  id="secret"
                  name="radio"
                  value="secret"
                  class="opacity-0"
                />
                <label
                  for="secret"
                  class="label font-mont font-medium cursor-pointer"
                  >Sir saqlansin</label
                >
                <label
                  for="secret"
                  class="checkmark absolute -left-4 w-6 h-6 border-2 border-yellow rounded-full"
                ></label>
                <label
                  for="secret"
                  class="dot absolute -left-[10px] w-3 h-3 rounded-full"
                ></label>
              </div>
            </div>
          </div>
          <button
            @click="register()"
            class="send-btn transition-all mt-2 w-full p-3 text-white bg-yellow uppercase font-mont font-bold text-lg"
            type="button"
          >
            Jo'natish
          </button>
        </div>
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
.radio .dot {
  transition: all 0.2s ease;
}
.radio input:checked ~ .dot {
  background: #f5cb5c;
}
.box {
  box-shadow: 16px 16px 0px #333533;
}

.send-btn:hover {
  transform: translate(-6px, -6px);
  box-shadow: 8px 8px 0px #333533;
}

@media (max-width: 561px) {
  .register-box {
    margin: 10px;
    width: 100%;
  }
}

@media (max-width: 400px) {
  .register-box {
    margin-top: -28px;
  }
  .radios {
    flex-direction: column;
    align-items: start;
  }

  .radios .checkmark {
    left: 0;
  }

  .radios .dot {
    left: 6px;
  }

  .radios .radio {
    margin-bottom: 8px;
  }

  .radios .label {
    margin-left: 18px;
  }
}
</style>
