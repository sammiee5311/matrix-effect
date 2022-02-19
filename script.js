const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const FPS = 40;
const NEXT_FRAME = 1000 / FPS;
let lastTime = 0;
let timer = 0;

const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, "#0aff0a");
gradient.addColorStop(1, "black");

class Symbol {
  constructor(x, y, fontSize, canvasHeight) {
    this.characters = "sammiee5311";
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.text = "";
    this.canvasHeight = canvasHeight;
  }
  draw(context) {
    this.text = this.characters.charAt(
      Math.floor(Math.random() * this.characters.length)
    );
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.95) {
      this.y = 0;
    } else {
      this.y += 1;
    }
  }
}

class Effect {
  constructor(canvasWidth, canvasHeight) {
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.fontSize = 30;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#initialize();
  }
  #initialize() {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
    }
  }
  resize(width, height) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#initialize();
  }
}

const effect = new Effect(canvas.width, canvas.height);

const animate = (timestamp) => {
  const deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  if (timer > NEXT_FRAME) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.textAlign = "center";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
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
};

animate(0);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  effect.resize(canvas.width, canvas.height);
});
