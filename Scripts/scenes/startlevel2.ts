module scenes {
    export class StartLevel2 extends objects.Scene {
        // private instance variable
        
        private _space: objects.Space;
        private _startButton: objects.Button;
       
       
        private _restartButton: objects.Button;
        private _engineSound: createjs.AbstractSoundInstance;


        // constructor
        constructor() {
            super();

            this.Start();
        }

        // public methods

        public Start(): void {

            this._space = new objects.Space();

           
            this._startButton = new objects.Button("start", 497.5, 360, true);     
            this._restartButton = new objects.Button("exit", 497.5, 524, true);
            this._engineSound = createjs.Sound.play("startSound");
            this._engineSound.loop = -1; 
            this._engineSound.volume = 1.0;
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

            this.addChild(this._space);
            this.addChild(this._startButton);
            this.addChild(this._restartButton);


            this._startButton.on("click", () => {
                managers.Game.currentState = config.Scene.PLAY;
               this._engineSound.stop();
            });


        }
    }
}