class MatrixSymbol {
  text: string;
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
    this.fontSize = fontSize;
    this.text = "";
    this.canvasHeight = canvasHeight;
  }
  draw(context: any) {
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

export default MatrixSymbol;
