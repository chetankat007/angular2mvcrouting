import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    images:any = [];
    isloggedin = false;
    constructor() { }

    setUserLoggedIn() {
        this.isloggedin = true;
    }

    getUserLoggedIn(): boolean {
        return this.isloggedin;
    }

    getStationHImages(empID: number, no: number): string[] {
        for (var i = 0; i < no; i++) {
            this.images.push('http://hexaware.com/wp-content/themes/hexaware-main/images/logo.png');
            empID = empID + 1;
        }
        return this.images;
    }
}
