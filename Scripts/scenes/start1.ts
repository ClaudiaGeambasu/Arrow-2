module scenes {
<<<<<<< HEAD
  export class Start extends objects.Scene {
      // private instance variable
      private _nameGame: objects.Button;
      private _spacebackground: objects.StartBackground;
      private _startButton: objects.Button;
      private _musicButton: objects.Button;
      private _informationButton: objects.Button;
      
     // private _explosion: objects.ExplosionStart[];
     // private _explosionNum: number;
      private _engineSound: createjs.AbstractSoundInstance;


      // constructor
      constructor() {
          super();

          this.Start();
      }

      // public methods

      public Start(): void {

          this._spacebackground = new objects.StartBackground();
         
          this._nameGame = new objects.Button("ArrowGame", 775.5, 100, true);
          this._startButton = new objects.Button("start", 765.5, 200, true);
          this._informationButton = new objects.Button("info", 980.5, 496, true);
          this._musicButton = new objects.Button("music", 980.5, 566, true);       
         // this._restartButton = new objects.Button("exit", 765.5, 300, true);

          this._engineSound = createjs.Sound.play("startSound");
          this._engineSound.loop = -1; 
=======
  export class Start1 extends objects.Scene {
    // private instance variable
    private _nameGame: objects.Button;
    private _space: objects.Space;
    private _startButton: objects.Button;
    private _musicButton: objects.Button;
    private _settingButton: objects.Button;
    private _restartButton: objects.Button;
    //private _window: createjs.Bitmap;
    // private _explosion: objects.ExplosionStart[];
    // private _explosionNum: number;
    private _engineSound: createjs.AbstractSoundInstance;

    // constructor
    constructor() {
      super();

      this.Start();
    }

    // public methods

    public Start(): void {
      this._space = new objects.Space();
      this._nameGame = new objects.Button("ArrowGame", 497.5, 200, true);
      this._startButton = new objects.Button("start", 497.5, 360, true);
      this._settingButton = new objects.Button("settings", 425.5, 446, true);
      this._musicButton = new objects.Button("music", 565.5, 446, true);
      this._restartButton = new objects.Button("exit", 497.5, 524, true);
      this._engineSound = createjs.Sound.play("startSound");
      this._engineSound.loop = -1;
      this._engineSound.volume = 0.4;
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
      //this.addChild(this._window);
      this.addChild(this._nameGame);
      this.addChild(this._startButton);
      this.addChild(this._restartButton);
      this.addChild(this._musicButton);
      this.addChild(this._settingButton);

      this._startButton.on("click", () => {
        managers.Game.currentState = config.Scene.PLAY3;
        this._engineSound.stop();
      });
      this._musicButton.on("click", () => {
        if (this._engineSound.volume == 0.4) {
>>>>>>> 9fb218cd98b2faf1502487f6b44908c7762497bc
          this._engineSound.volume = 0.0;
          this.Main();
      }

      public Update(): void {
          this._spacebackground.Update();
       
          
      }

      public Destroy(): void {
          this.removeAllChildren();
      }

      public Reset(): void {

      }

      public Main(): void {

          this.addChild(this._spacebackground);
          //this.addChild(this._window);
          this.addChild(this._nameGame);
          this.addChild(this._startButton);
          this.addChild(this._informationButton);
          this._informationButton.on("click", () => {
              managers.Game.currentState = config.Scene.INFORMATION;
             //this._engineSound.stop();
          });

          this.addChild(this._musicButton);
  
          this._startButton.on("click", () => {
              managers.Game.currentState = config.Scene.PLAY1;
             this._engineSound.stop();
          });
          this._musicButton.on("click", () => {
              if(this._engineSound.volume != 0.0)
              {
                  this._engineSound.volume -= 0.2;   
              }
              else                 
                  if(this._engineSound.volume <= 0.0)
              {
                  this._engineSound.volume = 1.0;
              
              }                
          });


      }
  }
}