module objects {
  export class Meteor extends objects.AbstractGameObject {
    // private instance variables
    private _verticalSpeed: number;
    private _horizontalSpeed: number;

    // public properties

    // constructor
    constructor() {
      super("meteor");
      this.Start();
    }

    // private methods
    private _move(): void {
      this.x += this._verticalSpeed; //i want my meteor to move not ony vertical but also horizontal
      this.y += this._horizontalSpeed;
    }

    private _checkBounds(): void {
      if (this.x > 1024 + this.Width) {
        this.Reset();
      }
    }

    // public methods

    public Reset(): void {
      this._verticalSpeed = Math.floor(Math.random() * 3 + 3); //randomizing my speed as well
      this._horizontalSpeed = Math.floor(Math.random() * 3 - 2);
      this.x = -this.Width;
      this.y = Math.floor(
        Math.random() * (1024 - this.Height) + this.HalfHeight
      );
      this.alpha = 1;
    }

    public Start(): void {
      this.Reset();
    }

    public Update(): void {
      this._move();
      this._checkBounds();
    }

    public Destroy(): void {}
  }
}
