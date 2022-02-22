class MatrixSymbol {
  text: string;
  prevText: string;
  constructor(
    public x: number,
    public y: number,
    public characters: string,
    public fontSize: number,
    public canvasHeight: number
  ) {
    this.characters = characters;
    this.x = x;
    this.y = y;
    this.prevText = "";
    this.fontSize = fontSize;
    this.text = "";
    this.canvasHeight = canvasHeight;
  }
  private setPrevTextColor(context: CanvasRenderingContext2D) {
    if (this.y < 1) return;
    context.fillStyle = "#0aff0a";
    context.fillText(
      this.prevText,
      this.x * this.fontSize,
      (this.y - 1) * this.fontSize
    );
  }
  draw(context: CanvasRenderingContext2D) {
    this.setPrevTextColor(context);

    this.text = this.characters.charAt(
      Math.floor(Math.random() * this.characters.length)
    );

    this.prevText = this.text;
    context.fillStyle = "white";
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);

    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.97) {
      this.y = 0;
    } else {
      this.y += 1;
    }
  }
}

export default MatrixSymbol;
