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
            alert( "Account logged out." )
            console.log( res );
        });
    }
}