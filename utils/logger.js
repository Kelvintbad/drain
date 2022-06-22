"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
var fs = __importStar(require("fs"));
var Logger = /** @class */ (function () {
    function Logger() {
        var _this = this;
        this.logger = function (fileName, text) {
            try {
                fs.appendFileSync(fileName, text + '\n');
            }
            catch (err) {
                console.log(err);
            }
        };
        this.logHistory = function (text) {
            return _this.logger(_this.history, text);
        };
        this.logSuccess = function (text) {
            return _this.logger(_this.successes, text);
        };
        this.date = new Date().toISOString();
        this.history = "./logs/" + this.date + "-history.txt";
        this.successes = "./logs/" + this.date + "-successes.txt";
    }
    return Logger;
}());
exports.log = new Logger();
