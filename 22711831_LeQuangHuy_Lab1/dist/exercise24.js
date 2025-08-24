"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirConditioner = exports.Fan = void 0;
class Appliance {
}
class Fan extends Appliance {
    turnOn() {
        console.log(" Fan is now spinning.");
    }
}
exports.Fan = Fan;
class AirConditioner extends Appliance {
    turnOn() {
        console.log("Air Conditioner is cooling the room.");
    }
}
exports.AirConditioner = AirConditioner;
