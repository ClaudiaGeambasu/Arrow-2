module scenes {
    export class Over extends objects.Scene {
        // private instance variable
        private _gameOverLabel: objects.Label;
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
            managers.Game.currentState = config.Scene.PLAY;
        }

        // public methods

        public Start(): void {
            this._space = new objects.Space();
            this._gameOverLabel = new objects.Label("Game Over", "60px", "Consolas", "#FF0000", 345, 240, true);         
            this._restartButton = new objects.Button("restartButton", 360, 360, true);
            this._scoreboard = new managers.ScoreBoard();
            this.Main();
        }

        public Update(): void {
            this._space.Update();
        }

        public Destroy(): void {
            this.removeAllChildren();
        }

        public Reset(): void {

        }

        public Main(): void {
            // adds ocean to the stage     
            this.addChild(this._space);
            this.addChild(this._gameOverLabel);
            this.addChild(this._restartButton);

            //add scoreboard to the scence
            
            this.addChild(this._scoreboard.HighScoreLabel);
            this._scoreboard.HighScore= managers.Game.highScore;
            

            this._restartButton.on("click", this._restartButtonClick);
            // restart the play scene    
        }
    }
}