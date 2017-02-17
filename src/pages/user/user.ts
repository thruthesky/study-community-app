import { Component } from '@angular/core';
import { User } from '../../api/backend-angular-api/user';
import { USER_REGISTER_REQUEST_DATA, USER_LOGIN_REQUEST_DATA } from '../../api/backend-angular-api/interface';

@Component({
    selector: 'user-page',
    templateUrl: 'user.html'
})

export class UserPage {

    register: USER_REGISTER_REQUEST_DATA = <USER_REGISTER_REQUEST_DATA> {}
    login: USER_LOGIN_REQUEST_DATA = <USER_LOGIN_REQUEST_DATA> {}

    constructor( private userService: User ){ }

    validateInput(){
        if ( this.register.id == null || this.register.id == "" ) return this.validateError('ID');
        if ( this.register.name == null || this.register.name == "" ) return this.validateError('Name');
        if ( this.register.address == null || this.register.address == "" ) return this.validateError('Address');
        if ( this.register.mobile == null || this.register.mobile == "" ) return this.validateError('Mobile');
        if ( this.register.email == null || this.register.email == "" ) return this.validateError('Email');
        if ( this.register.password == null || this.register.password == "" ) return this.validateError('Password');

        // if ( this.login.id == null || this.login.id == "" ) return this.validateError('ID');
        // if ( this.login.password == null || this.login.password == "" ) return this.validateError('Password');        
        return true;
    }

    validateError( value ){ 
        alert( value + " is not provided!" );
        return false;
    }

    onClickRegister(){
        if( this.validateInput() == false) return;
        this.userService.register( this.register, res => {
            alert( "User registration success!" );
        }, error => {
            alert( "User registration failed! Error: " + error );
        }, () => {

        });
    }
    
    onClickLogin(){
        if( this.validateInput() == false) return;
        this.userService.login( this.login, res => {
            
        }, error => {

        }); 
    }

}