<script setup>
import { useRouter } from "vue-router";
import TextView from "../../components/Landing/Header/TextView.vue";
const router = useRouter();

const changeRoute = () => {
  setTimeout(() => {
    router.push("/register");
  }, 400);
};
</script>

<template>
  <header class="landing-header flex flex-row">
    <div class="header-left flex flex-col justify-around w-[80%]">
      <div class="freespace"></div>
      <div class="text-view">
        <TextView />
        <button @click="changeRoute()" class="nav-link mt-4">
          <span
            class="relative py-3 px-5 font-mont font-semibold uppercase border rounded-full"
            >Ro'yxatdan o'tish</span
          >
        </button>
      </div>
      <p class="description font-manr text-lg text-dark-primary">
        Internet do’konimiz orqali siz xohlagan janrdagi kitoblarni hamyonbop
        narxlarda xarid qilishingiz mumkin. Bizning
        <span class="text-yellow-darken">yetkazib berish</span> xizmatimiz
        orqali kitoblaringiz uyingizgacha yetkazib beriladi
      </p>
    </div>
    <div class="header-right overflow-hidden w-3/4 flex items-end justify-end">
      <img
        src="../../resources/img/books.png"
        class="h-[91.5vh] w-full mt-4"
        alt=""
      />
    </div>
  </header>
</template>
<style scoped>
.nav-link span::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scaleY(0);
  transform-origin: bottom;
  background: #f5cb5c;
  z-index: -1;
  transition: 0.4s ease;
  border-radius: 99px;
}

.nav-link:hover span::after {
  transform: scaleY(1);
  transform-origin: top;
}

.nav-link span {
  transition: all 0.4s ease;
}

.nav-link:hover span {
  border-color: transparent;
  color: #fff;
}

.text-view {
  width: 450px;
}
@media (max-width: 1740px) {
  .header-right {
    width: 70%;
  }
}

@media (max-width: 1535px) {
  .header-right {
    width: 90%;
  }

  .header-left {
    width: 65%;
  }
}

@media (max-width: 1269px) {
  .header-left {
    width: 50%;
  }
}

@media (max-width: 1217px) {
  .header-right {
    width: 95%;
  }
}

@media (max-width: 1187px) {
  .header-right {
    display: none;
  }

  .header-left {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80vh;
    width: 70%;
  }
}

@media (max-width: 685px) {
  .header-left {
    width: 100%;
  }
  .text-view {
    width: 90%;
  }
}

@media (max-width: 498px) {
  .nav-link {
    margin-top: 5px;
  }
}

@media (max-width: 477px) {
  .text-view {
    width: 100%;
  }
}

@media (max-width: 409px) {
  .text-view {
    margin-top: -100px;
  }
}
</style>
