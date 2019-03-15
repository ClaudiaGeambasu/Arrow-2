module objects {
  export class SonEnemy extends objects.AbstractGameObject {
    // private instance variables
    private _horizontalSpeed: number;
    private _redenemy: objects.RedEnemy;

    // public properties

    // constructor
    constructor() {
      super("player");
      this.Start();
    }

    // private methods
    private _move(): void {
      this.x += 10;
    }

    private _checkBounds(): void {
      if (this.x > 1024 + this.Width) {
        this.Reset();
      }
    }

    // public methods

    public Reset(): void {
      this.x = -this.Width; //esto me da desde donde el objeto saldra
      this.y = managers.Game.yRedEnemy;
    }

    public Start(): void {
      this._horizontalSpeed = 5;
      this.Reset();
    }

    public Update(): void {
      this._move();
      this._checkBounds();
    }

    public Destroy(): void {}
  }
}
