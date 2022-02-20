import MatrixSymbol from "./matrixSymbol";

class MatrixEffect {
  fontSize: number;
  columns: number;
  symbols: MatrixSymbol[];
  constructor(
    public canvasWidth: number,
    public canvasHeight: number,
    public characters: string
  ) {
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.fontSize = 30;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.initialize();
  }
  private initialize() {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new MatrixSymbol(
        i,
        0,
        this.characters,
        this.fontSize,
        this.canvasHeight
      );
    }
  }
  resize(width: number, height: number) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.initialize();
  }
}

export default MatrixEffect;
