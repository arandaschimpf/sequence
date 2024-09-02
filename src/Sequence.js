"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequence = /** @class */ (function () {
    function Sequence() {
        this.values = [0, 0, 0, 0];
    }
    Object.defineProperty(Sequence.prototype, "value0", {
        get: function () {
            return this.values[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sequence.prototype, "value1", {
        get: function () {
            return this.values[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sequence.prototype, "value3", {
        get: function () {
            return this.values[3];
        },
        enumerable: false,
        configurable: true
    });
    Sequence.prototype.isSolution = function (candidate) {
        return this.values[2] === candidate;
    };
    return Sequence;
}());
exports.default = Sequence;
