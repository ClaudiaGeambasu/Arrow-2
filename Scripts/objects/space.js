var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Space = /** @class */ (function (_super) {
        __extends(Space, _super);
        // constructor
        function Space() {
            return _super.call(this, managers.Game.assetManager.getResult("space")) || this;
        }
        // public methods
        //Reset the object location to some value
        Space.prototype.Reset = function () {
            this.x = -224; //1024-800 that is my width
        };
        Space.prototype.Start = function () {
            this.Reset();
        };
        Space.prototype.Update = function () { };
        Space.prototype.Destroy = function () { };
        return Space;
    }(createjs.Bitmap));
    objects.Space = Space;
})(objects || (objects = {}));
//# sourceMappingURL=space.js.map