"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.getEnv = void 0;
var dotenv_1 = require("dotenv");
var error = (0, dotenv_1.config)().error;
if (error) {
    throw new Error("Could not load environment variables");
}
var getEnv = function (key) {
    var value = process.env[key];
    if (!value) {
        throw new Error("No value set for " + key);
    }
    return value;
};
exports.getEnv = getEnv;
exports.config = {
    destAddress: (0, exports.getEnv)('DESTINATION_ADDRESS'),
    providerURL: (0, exports.getEnv)('PROVIDER_URL')
};
