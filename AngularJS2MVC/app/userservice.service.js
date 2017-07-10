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
var core_1 = require('@angular/core');
var UserService = (function () {
    function UserService() {
        this.images = [];
        this.isloggedin = false;
    }
    UserService.prototype.setUserLoggedIn = function () {
        this.isloggedin = true;
    };
    UserService.prototype.getUserLoggedIn = function () {
        return this.isloggedin;
    };
    UserService.prototype.getStationHImages = function (empID, no) {
        for (var i = 0; i < no; i++) {
            this.images.push('http://hexaware.com/wp-content/themes/hexaware-main/images/logo.png');
            empID = empID + 1;
        }
        return this.images;
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=userservice.service.js.map