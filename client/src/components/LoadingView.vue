<template>
  <div
    class="loading-spinner border rounded shadow-lg absolute top-[86px] sm:left-4 md:left-6 left-2 bg-white"
  >
    <div class="container w-10 h-10">
      <div
        class="dot-bricks w-[8.5px] h-[8.5px] bg-yellow-darken rounded-full div1"
      ></div>
      <div
        class="dot-bricks w-[8.5px] h-[8.5px] bg-yellow-darken rounded-full div2"
      ></div>
      <div
        class="dot-bricks w-[8.5px] h-[8.5px] bg-yellow-darken rounded-full div3"
      ></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.loading-spinner {
  animation: fade 0.6s ease;
}

.dot-bricks:nth-child(1) {
  animation: transformation1 2s linear both;
  animation-iteration-count: infinite;
}

.dot-bricks:nth-child(2) {
  animation: transformation2 2s linear both;
  animation-iteration-count: infinite;
}

.dot-bricks:nth-child(3) {
  animation: transformation3 2s linear both;
  animation-iteration-count: infinite;
}

@keyframes transformation1 {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(20px, 0);
  }
  50% {
    transform: translate(20px, 20px);
  }
  75% {
    transform: translate(0, 20px);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes transformation2 {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(0, 20px);
  }
  50% {
    transform: translate(-20px, 20px);
  }
  75% {
    transform: translate(-20px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes transformation3 {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(0, -20px);
  }
  50% {
    transform: translate(20px, -20px);
  }
  75% {
    transform: translate(20px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  place-items: center;
}

.div1 {
  grid-area: 1 / 1 / 2 / 2;
}
.div2 {
  grid-area: 1 / 2 / 2 / 3;
}
.div3 {
  grid-area: 2 / 1 / 3 / 2;
}
</style>
