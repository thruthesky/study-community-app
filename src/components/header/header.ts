import { Component } from '@angular/core';
import { User } from '../../api/backend-angular-api/user';
@Component({
    selector: 'header-component',
    templateUrl: 'header.html'
})
export class HeaderComponent {

    constructor( private user: User) {

    }

    onClickLogout(){
        this.user.logout( res =>{
            console.log( res );
        });
    }
}