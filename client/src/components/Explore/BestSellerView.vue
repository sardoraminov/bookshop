<script setup>
import book from "../../resources/img/book.jpg";
</script>

<template>
  <header class="best-seller flex flex-row">
    <div class="left-part">
      <div class="text-side text-dark-primary">
        <p class="hashtag font-manr">#1 best-seller</p>
        <h1 class="quote font-mont">
          In order to succeed, you must read this!
        </h1>
      </div>
      <div class="link-part">
        <p class="price">
          <strike>49.000</strike> <b class="text-dark-primary">39.000</b>
        </p>
        <div class="links flex flex-row items-center justify-start">
          <router-link
            to="#!"
            class="bg-yellow transition hover:shadow-md text-white font-bold rounded-md py-2 px-4 text-lg font-mont flex flex-row items-center w-auto max-w-auto"
            ><p class="mr-3">SOTIB OLISH</p>
            <ion-icon name="bag-outline"></ion-icon
          ></router-link>
          <router-link
            to="#!"
            class="link text-yellow bg-white underline font-semibold rounded-md py-2 px-4 text-lg font-mont flex flex-row items-center w-auto max-w-auto"
            ><p class="mr-3">SOTIB OLISH</p>
            <ion-icon name="return-up-forward-outline"></ion-icon
          ></router-link>
        </div>
      </div>
      <div class="author-part mt-4">
        <p class="font-mont">Muallif</p>
        <div class="author flex flex-row items-center">
          <div class="w-10 h-[2px] bg-yellow mr-2"></div>
          <router-link class="font-manr font-bold text-xl" to="#!"
            >Jorj Oruell</router-link
          >
        </div>
      </div>
      <p class="description-part font-manr mt-4">
        «1984» romani – asl ism-sharifi Erik Artur Bler bo‘lgan ingliz
        yozuvchisi Jorj Oruellning kelajak haqidagi dahshatli ssenariysidir.
        Romanda individuallik va inson huquqlari butunlay vayron qilingan, ong
        nazorat ostiga olingan, odamlar esa mexanizatsiyalashgan bir massaga
        aylangan totalitar dunyo tartibi hayratlanarli darajadagi tasavvur kuchi
        bilan hatto eng nozik detallarigacha tasvirlanadi. Asar garchi utopik
        xarakterga ega bo‘lsa-da, ba'zi tanqidchi va yozuvchilar tomonidan
        realistik asar sifatida baholanadi.
      </p>
    </div>
    <div class="right-part">
      <div class="bg absolute top-0 right-0 bg-yellow w-[1000px] h-[900px]"></div>
      <div class="img">
        <img :src="book" alt="book 1984 jorj oruell" />
      </div>
    </div>
  </header>
</template>

<style scoped>
strike {
  text-decoration-thickness: 2px;
  text-decoration-color: red;
}

ion-icon {
  --ionicon-stroke-width: 54px;
}

.link {
  text-decoration-thickness: 2px;
}
</style>
