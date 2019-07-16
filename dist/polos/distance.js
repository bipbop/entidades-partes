"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var js_levenshtein_1 = __importDefault(require("js-levenshtein"));
var partes_1 = require("./partes");
var mapValues_1 = __importDefault(require("lodash/mapValues"));
function distance(str) {
    var items = mapValues_1.default(partes_1.Partes, function (a) {
        var distances = mapValues_1.default(a, function (n) {
            return js_levenshtein_1.default(str, n);
        });
        var parte = Object.entries(distances).sort(function (a, b) { return a[1] - b[1]; })[0][0];
        return { parte: parte, distance: distances[parte] };
    });
    var polo = Object.entries(items).sort(function (a, b) { return a[1].distance - b[1].distance; })[0][0];
    return __assign({ polo: polo }, items[polo]);
}
exports.distance = distance;
//# sourceMappingURL=distance.js.map