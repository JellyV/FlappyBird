class FlappyBirdEntity {
    constructor(scene) {
        this._sprite = scene.add.sprite(50, 100, "bird");
    }
}


class FlappyBirdGame {
    constructor() {
        this._game = this._CreateGame()
    }

    _CreateGame(){
        const self = this;
        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            scene: {
                preload: function () {self._OnPreload(this); },
                create:  function () {self._OnCreate(this); },
                update: function () {self._OnCreate(this); }
            }
        };

        return new Phaser.Game(config);
    }

    _OnPreload(scene) {
        this._scene = scene;
        this._scene.load.image("sky", "assets/sky.png");
        this._scene.load.image("bird", "assets/bird.png");
    }

    _OnCreate(scene) {
        const s = this._scene.add.image(400, 300, "sky");
        s.displayWidth = 800;
        s.displayHeight = 600;

        this._bird = new FlappyBirdEntity(this._scene);
    }

    _OnUpdate(scene) {
        const currentFrame = scene.time.now;
        if (this._previousFrame == null) {
            this._previousFrame = currentFrame;
        }

        const timeElapsedInS = (currentFrame - this._previousFrame) / 1000.0;

        this._previousFrame = currentFrame;
    }
}


_GAME = new FlappyBirdGame()
