var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.Check = function (object1, object2) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            if (math.Vec2.Distance(P1, P2) <
                object1.HalfHeight + object2.HalfHeight) {
                if (!object2.isColliding) {
                    object2.isColliding = true;
                    switch (object2.name) {
                        case "meteor":
                            if (object2.alpha != 0) {
                                createjs.Sound.play("meteorSound");
                                managers.Game.scoreBoard.Lives -= 1;
                                createjs.Sound.play("laser");
                            }
                            if (managers.Game.highScore <= managers.Game.scoreBoard.Score) {
                                managers.Game.scoreBoard.HighScore =
                                    managers.Game.scoreBoard.Score;
                                managers.Game.highScore = managers.Game.scoreBoard.HighScore;
                            }
                            break;
                        case "brouncerock":
                            if (object2.alpha != 0) {
                                createjs.Sound.play("extralive");
                                managers.Game.scoreBoard.Score += 50;
                                if (managers.Game.scoreBoard.Score % 1000 == 0) {
                                    managers.Game.scoreBoard.Lives += 1;
                                }
                                if (managers.Game.highScore <= managers.Game.scoreBoard.Score) {
                                    managers.Game.scoreBoard.HighScore =
                                        managers.Game.scoreBoard.Score;
                                    managers.Game.highScore = managers.Game.scoreBoard.HighScore;
                                    object2.alpha = 0;
                                }
                            }
                            break;
                        case "sonenemy":
                            createjs.Sound.play("explosion");
                            if (object1.name == "shot") {
                                if (object1.alpha != 0) {
                                    managers.Game.scoreBoard.Score += 100;
                                    var boom = new objects.Boom("boom");
                                    boom.x = object2.x - object2.Width;
                                    boom.y = object2.y - object2.Height;
                                    managers.Game.sceneObject.addChild(boom);
                                    object2.Reset();
                                }
                            }
                            if (object1.name == "player") {
                                managers.Game.scoreBoard.Lives -= 1;
                                var boom = new objects.Boom("boom");
                                boom.x = object2.x - object2.Width;
                                boom.y = object2.y - object2.Height;
                                managers.Game.sceneObject.addChild(boom);
                                object1.alpha = 0;
                                managers.Game.player.planeflash.alpha = 1;
                                managers.Game.player.planeflash.gotoAndPlay("planeflash");
                                object2.Reset();
                            }
                            break;
                        case "smallmeteor":
                            createjs.Sound.play("laser");
                            var smooked = new objects.Boom("explosionsmoke");
                            smooked.x = object2.x;
                            smooked.y = object2.y;
                            managers.Game.sceneObject.addChild(smooked);
                            if (managers.Game.scoreBoard.Score >= 50) {
                                managers.Game.scoreBoard.Score -= 50;
                            }
                            if (managers.Game.highScore <= managers.Game.scoreBoard.Score) {
                                managers.Game.scoreBoard.HighScore =
                                    managers.Game.scoreBoard.Score;
                                managers.Game.highScore = managers.Game.scoreBoard.HighScore;
                            }
                            break;
                        case "rockSilver": //silver
                            if (object1.alpha != 0) {
                                createjs.Sound.play("explosion");
                                managers.Game.scoreBoard.Lives -= 2;
                                var boom1 = new objects.Boom("boom");
                                boom1.x = object2.x - object2.Width;
                                boom1.y = object2.y - object2.Height;
                                managers.Game.sceneObject.addChild(boom1);
                                object1.alpha = 0;
                                managers.Game.player.planeflash.alpha = 1;
                                managers.Game.player.planeflash.gotoAndPlay("planeflash");
                                object2.Reset();
                            }
                            break;
                        case "enemy":
                            createjs.Sound.play("explosion");
                            if (object1.name == "shot") {
                                if (object1.alpha != 0) {
                                    managers.Game.scoreBoard.Score += 100;
                                    var boom = new objects.Boom("boom");
                                    boom.x = object2.x - object2.Width;
                                    boom.y = object2.y - object2.Height;
                                    managers.Game.sceneObject.addChild(boom);
                                    object2.Reset();
                                }
                            }
                            if (object1.name == "player") {
                                managers.Game.scoreBoard.Lives -= 1;
                                var boom = new objects.Boom("boom");
                                boom.x = object2.x - object2.Width;
                                boom.y = object2.y - object2.Height;
                                managers.Game.sceneObject.addChild(boom);
                                object1.alpha = 0;
                                managers.Game.player.planeflash.alpha = 1;
                                managers.Game.player.planeflash.gotoAndPlay("planeflash");
                                object2.Reset();
                            }
                            break;
                    }
                }
            }
            else {
                object2.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map