"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirPurifierSetting = void 0;
const airPurifier_1 = require("./airPurifier");
const ipsoDevice_1 = require("./ipsoDevice");
const ipsoObject_1 = require("./ipsoObject");
class AirPurifierSetting extends ipsoDevice_1.IPSODevice {
    constructor() {
        super(...arguments);
        this.fanMode = airPurifier_1.FanMode.Off;
    }
}
__decorate([
    (0, ipsoObject_1.ipsoKey)("5900"),
    __metadata("design:type", Number)
], AirPurifierSetting.prototype, "fanMode", void 0);
exports.AirPurifierSetting = AirPurifierSetting;