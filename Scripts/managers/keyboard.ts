module managers {
  export class Keyboard {
    //private instance variables

    //public instances variables
    public moveForward: boolean;
    public moveBackward: boolean;
    public moveLeft: boolean;
    public moveRight: boolean;
    public hack: boolean;

    public shoot: boolean;
    public enable: boolean; //turn off my keyboard
    public paused: boolean;

    //cosntructor
    constructor() {
      this.enable = true;
      document.addEventListener("keydown", this.onKeyDown.bind(this), false);
      document.addEventListener("keyup", this.onKeyUp.bind(this), false);
    }

    //private methods

    //public methods
    public onKeyDown(event: KeyboardEvent): void {
      switch (event.keyCode) {
        //(fall through)
        case config.Keys.W: //up key
        case config.Keys.UP_ARROW:
          this.moveForward = true;
          break;

        case config.Keys.A:
        case config.Keys.LEFT_ARROW:
          this.moveLeft = true;
          break;

        case config.Keys.S:
        case config.Keys.DOWN_ARROW:
          this.moveBackward = true;
          break;

        case config.Keys.D:
        case config.Keys.RIGHT_ARROW:
          this.moveRight = true;
          break;

        case config.Keys.space:
          this.shoot = true;
          break;

        case config.Keys.C:
          this.hack = true;
          break;
      }
    }

    public onKeyUp(event: KeyboardEvent): void {
      switch (event.keyCode) {
        case config.Keys.W: //up key
        case config.Keys.UP_ARROW:
          this.moveForward = false;
          break;

        case config.Keys.A:
        case config.Keys.LEFT_ARROW:
          this.moveLeft = false;
          break;

        case config.Keys.S:
        case config.Keys.DOWN_ARROW:
          this.moveBackward = false;
          break;

        case config.Keys.D:
        case config.Keys.RIGHT_ARROW:
          this.moveRight = false;
          break;

        case config.Keys.space:
          this.shoot = false;
          break;
      }
    }
  }
}
