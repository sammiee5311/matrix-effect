<template>
  <canvas class="canvas" ref="matrixCanvas"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import MatrixEffect from  "../matrixEffect"

const matrixCanvas = ref<HTMLCanvasElement>(null!);

const FPS = 40;
const NEXT_FRAME = 1000 / FPS;

let lastTime = 0;
let timer = 0;
let effect: MatrixEffect;
let ctx: CanvasRenderingContext2D;

const props = defineProps<{ text: string }>()

const resizeWindow = () => {
    matrixCanvas.value.width = window.innerWidth;
    matrixCanvas.value.height = window.innerHeight;
    effect.resize(matrixCanvas.value.width, matrixCanvas.value.height);
}

onMounted(() => {
  ctx = matrixCanvas.value.getContext("2d")!;
  matrixCanvas.value.width = window.innerWidth;
  matrixCanvas.value.height = window.innerHeight;

  const gradient = ctx.createLinearGradient(0, 0, matrixCanvas.value.width, matrixCanvas.value.height);
  gradient.addColorStop(0, "#0aff0a");
  gradient.addColorStop(1, "black");

  effect = new MatrixEffect(matrixCanvas.value.width, matrixCanvas.value.height, props.text);

  const animate = (timestamp: number) => {
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    if (timer > NEXT_FRAME) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.textAlign = "center";
      ctx.fillRect(0, 0, matrixCanvas.value!.width, matrixCanvas.value!.height);
      ctx.fillStyle = gradient;
      ctx.font = effect.fontSize + "px monospace";
      effect.symbols.forEach((symbol) => {
        symbol.draw(ctx);
      });
      timer = 0;
    } else {
      timer += deltaTime;
    }
    requestAnimationFrame(animate);
  }
  animate(0);

  window.addEventListener("resize", resizeWindow)
})

onUnmounted(() => { 
    window.removeEventListener('resize', resizeWindow); 
})
</script>

<style scoped>
.canvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
