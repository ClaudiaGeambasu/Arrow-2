module objects {
  export class Shoot extends objects.AbstractGameObject {
    // constructor
    constructor() {
      super("shot");
      this.Start();
    }

    // public methods
    public Reset(): void {
      this.x = -5000;
      this.y = -5000;
    }

    public Start(): void {
      this.HalfWidth = 0; // duda
      this.HalfHeight = -10;
      this.Reset();
    }

    public Update(): void {
      this.Move();
      this.CheckBounds();
    }

    public Destroy(): void {}
    public Move(): void {
      if (managers.Game.goingLeft) {
        this.x += this.HalfHeight;
      }
      if (managers.Game.goingRigth) {
        this.x -= this.HalfHeight;
      }
      if (managers.Game.goingUp) {
        this.y += this.HalfHeight;
      }
      if (managers.Game.goingDown) {
        this.y -= this.HalfHeight;
      }
    }
    public CheckBounds(): void {
      if (this.x <= -this.Height) {
        this.Reset();
      }
    }
  }
}
