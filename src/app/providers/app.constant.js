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
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var Configuration = (function () {
    function Configuration() {
        this.url = " https://cornerstone.njs.jelastic.vps-host.net";
        this.baseUrl = " https://cornerstone.njs.jelastic.vps-host.net/";
        this.Server = " https://cornerstone.njs.jelastic.vps-host.net/";
    }
    // set access_token after user login
    Configuration.prototype.setAccessToken = function () {
        this.getRole();
    };
    Configuration.prototype.getRole = function () {
        this.role = localStorage.getItem("role");
        this.getUserId();
        return this.role;
    };
    Configuration.prototype.getUserId = function () {
        this.userId = localStorage.getItem("id");
        this.Server = this.baseUrl + this.role + "/" + this.userId;
        return this.userId;
    };
    return Configuration;
}());
Configuration = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], Configuration);
exports.Configuration = Configuration;
//# sourceMappingURL=app.constant.js.map