module scenes {
  export class Over extends objects.Scene {
    // private instance variable
    private _gameOver: objects.Button;
    private _space: objects.Space;
    private _restartButton: objects.Button;
    private _scoreboard: managers.ScoreBoard;

    // public properties

    // constructor
    constructor() {
      super();
      this.Start();
    }

    // private methods
    private _restartButtonClick(): void {
      managers.Game.currentState = config.Scene.PLAY1;
    }

    // public methods

    public Start(): void {
      this._space = new objects.Space();
      this._gameOver = new objects.Button("gameOver", 497.5, 200, true);
      this._restartButton = new objects.Button("replay", 500.5, 445, true);
      this._scoreboard = new managers.ScoreBoard();
      this.Main();
    }

    public Update(): void {
      this._space.Update();
    }

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Reset(): void {}

    public Main(): void {
      this.addChild(this._space);
      this.addChild(this._gameOver);
      this.addChild(this._restartButton);

      this.addChild(this._scoreboard.HighScoreLabel);
      this._scoreboard.HighScore = managers.Game.highScore;

      this._restartButton.on("click", this._restartButtonClick);
    }
  }
}
