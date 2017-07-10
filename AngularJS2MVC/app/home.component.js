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
var userservice_service_1 = require('./userservice.service');
var HomeComponent = (function () {
    function HomeComponent(userservice) {
        this.userservice = userservice;
        this.name = 'Chetan Kamath';
        this.images = [];
        this.isLoggedin = false;
        this.intialEmpID = 11244;
        this.noOfUsers = 12;
        this.noUserShowing = true;
        this.currentEmpID = this.intialEmpID;
    }
    HomeComponent.prototype.setUser = function () {
        this.userservice.setUserLoggedIn();
        this.isLoggedin = this.userservice.getUserLoggedIn();
        this.addImages();
        this.noUserShowing = this.images.length == 0 ? true : false;
    };
    HomeComponent.prototype.removeUser = function () {
        this.currentEmpID = this.currentEmpID - this.noOfUsers;
        for (var i = 0; i < this.noOfUsers; i++) {
            if (this.images.length > 0) {
                this.images.splice(-1, 1);
            }
        }
        this.noUserShowing = this.images.length == 0 ? true : false;
        if (this.currentEmpID < this.intialEmpID) {
            this.currentEmpID = this.intialEmpID;
        }
    };
    HomeComponent.prototype.addImages = function () {
        this.images = this.userservice.getStationHImages(this.currentEmpID, this.noOfUsers);
        this.currentEmpID = this.currentEmpID + this.noOfUsers;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: './app/home.component.html'
        }), 
        __metadata('design:paramtypes', [userservice_service_1.UserService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map