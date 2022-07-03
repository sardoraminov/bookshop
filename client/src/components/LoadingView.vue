<template>
  <div class="loading-spinner">
    <div class="snippet" data-title=".dot-bricks">
      <div class="stage">
        <div class="dot-bricks"></div>
      </div>
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
.dot-bricks {
  position: fixed;
  bottom: 50px;
  left: -9999px;
  width: 10px;
  height: 10px;
  transform: translateX(200%);
  border-radius: 5px;
  background-color: #f6aa1c;
  color: #f6aa1c;
  box-shadow: 9991px -16px 0 0 #f6aa1c, 9991px 0 0 0 #f6aa1c,
    10007px 0 0 0 #f6aa1c;
  animation: dotBricks 2s infinite ease;
  z-index: 999999999999999999999;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes dotBricks {
  0% {
    box-shadow: 9991px -16px 0 0 #f6aa1c, 9991px 0 0 0 #f6aa1c,
      10007px 0 0 0 #f6aa1c;
  }
  8.333% {
    box-shadow: 10007px -16px 0 0 #f6aa1c, 9991px 0 0 0 #f6aa1c,
      10007px 0 0 0 #f6aa1c;
  }
  16.667% {
    box-shadow: 10007px -16px 0 0 #f6aa1c, 9991px -16px 0 0 #f6aa1c,
      10007px 0 0 0 #f6aa1c;
  }
  25% {
    box-shadow: 10007px -16px 0 0 #f6aa1c, 9991px -16px 0 0 #f6aa1c,
      9991px 0 0 0 #f6aa1c;
  }
  33.333% {
    box-shadow: 10007px 0 0 0 #f6aa1c, 9991px -16px 0 0 #f6aa1c,
      9991px 0 0 0 #f6aa1c;
  }
  41.667% {
    box-shadow: 10007px 0 0 0 #f6aa1c, 10007px -16px 0 0 #f6aa1c,
      9991px 0 0 0 #f6aa1c;
  }
  50% {
    box-shadow: 10007px 0 0 0 #f6aa1c, 10007px -16px 0 0 #f6aa1c,
      9991px -16px 0 0 #f6aa1c;
  }
  58.333% {
    box-shadow: 9991px 0 0 0 #f6aa1c, 10007px -16px 0 0 #f6aa1c,
      9991px -16px 0 0 #f6aa1c;
  }
  66.666% {
    box-shadow: 9991px 0 0 0 #f6aa1c, 10007px 0 0 0 #f6aa1c,
      9991px -16px 0 0 #f6aa1c;
  }
  75% {
    box-shadow: 9991px 0 0 0 #f6aa1c, 10007px 0 0 0 #f6aa1c,
      10007px -16px 0 0 #f6aa1c;
  }
  83.333% {
    box-shadow: 9991px -16px 0 0 #f6aa1c, 10007px 0 0 0 #f6aa1c,
      10007px -16px 0 0 #f6aa1c;
  }
  91.667% {
    box-shadow: 9991px -16px 0 0 #f6aa1c, 9991px 0 0 0 #f6aa1c,
      10007px -16px 0 0 #f6aa1c;
  }
  100% {
    box-shadow: 9991px -16px 0 0 #f6aa1c, 9991px 0 0 0 #f6aa1c,
      10007px 0 0 0 #f6aa1c;
  }
}
</style>
