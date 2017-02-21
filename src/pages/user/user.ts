import { Component } from '@angular/core';
import { User } from '../../api/backend-angular-api/user';
import { 
    USER_REGISTER_REQUEST_DATA, 
    USER_DATA_RESPONSE_DATA, 
    USER_LOGIN_REQUEST_DATA,
    USER_UPDATE_REQUEST_DATA 
} from '../../api/backend-angular-api/interface';

@Component({
    selector: 'user-page',
    templateUrl: 'user.html'
})

export class UserPage {

    register: USER_REGISTER_REQUEST_DATA = <USER_REGISTER_REQUEST_DATA> {}
    login: USER_LOGIN_REQUEST_DATA = <USER_LOGIN_REQUEST_DATA> {}

    constructor( private user: User ){
        this.getUser(); 
    }

    getUser(){
        if ( this.user.logged ) {
            this.user.getUserData( res => {
                console.log( "User Data: ", res );
                this.register.name = res['data']['user']['name'];
                this.register.address = res['data']['user']['address'];
                this.register.mobile = res['data']['user']['mobile'];
            }, error => {
                alert( "Unable to get user data. Error: " + error );
            }, () => {

            });
        } 
    }

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

    clearAll(){
    }

    onClickRegister(){
        if( this.validateInput() == false) return;
        this.user.register( this.register, res => {
            alert( "User registration success!" );
        }, error => {
            alert( "User registration failed! Error: " + error );
        }, () => {});
    }
    
    onClickLogin(){
        // if( this.validateInput() == false) return;
        this.user.login( this.login, res => {
            alert( "Logged In!" );
            this.getUser();
        }, error => {
            alert( "Unable to logged in! Error: " + error );
        }); 
    }

    onClickUpdateUser(){
        let data: USER_UPDATE_REQUEST_DATA = {
            name: this.register.name,
            address: this.register.address,
            mobile: this.register.mobile
        }
        this.user.update( data, res => {
            alert( "Update success!" );
        }, error => {
            alert( "Update failed! Error: " + error );
        }, () => {});
    }

    onClickDeleteUser(){

    }
}