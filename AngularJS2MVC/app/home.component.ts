import { Component } from '@angular/core';
import { UserService } from './userservice.service';
@Component({
    selector: 'home',
    templateUrl: './app/home.component.html'
})
export class HomeComponent {
    name: string = 'Chetan Kamath';
    images: any = [];
    isLoggedin = false;
    currentEmpID: number;
    intialEmpID: number = 11244;
    noOfUsers = 12;
    noUserShowing = true;

    constructor(private userservice: UserService) {
        this.currentEmpID = this.intialEmpID;

    }

    setUser()
    {
        this.userservice.setUserLoggedIn();
        this.isLoggedin = this.userservice.getUserLoggedIn();
        this.addImages();
        this.noUserShowing = this.images.length == 0 ? true : false;

    }

    removeUser()
    {

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
    }

    addImages()
    {
        this.images = this.userservice.getStationHImages(this.currentEmpID, this.noOfUsers);
        this.currentEmpID = this.currentEmpID + this.noOfUsers;
    }

}