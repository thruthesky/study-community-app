import { Component } from '@angular/core';
import { User } from '../../api/backend-angular-api/user';
import { Forum } from '../../api/backend-angular-api/forum';
import { USER_DATA_RESPONSE_DATA, FORUM_CONFIG_GET_REQUEST_DATA, FORUM_DATA_GETS_REQUEST_DATA, FORUM_DATA_GETS_RESPONSE_DATA } from '../../api/backend-angular-api/interface';

@Component({
    selector: 'forum-home',
    templateUrl: 'forum-home.html'
})  

export class ForumHomePage {

    userData: USER_DATA_RESPONSE_DATA = <USER_DATA_RESPONSE_DATA> {};
    list_posts = [];
    constructor( private user: User,
                 private forum: Forum ) {
                    this.checkLoggedIn();
                    this.getConfig();     
                 }

    checkLoggedIn(){
        if( this.user.logged ){
            this.user.getUserData( res => {
                this.userData.name = res['data']['user']['name'];
                // console.log( "userData: " , res );
            }, error => {
                console.log( "Unable to get current user. Error: ", error );
            }, () => { });
        }
    }

    getConfig(){
        let data: FORUM_CONFIG_GET_REQUEST_DATA = <FORUM_CONFIG_GET_REQUEST_DATA> {}
        data.config_idx = 1;
        this.forum.getForumConfig( data, res =>{
            console.log( "res:: ", res );
            this.getPostLists( res['data']['idx'] );
        }, error => { });
    }

    getPostLists( idx ){
        let data: FORUM_DATA_GETS_REQUEST_DATA = <FORUM_DATA_GETS_REQUEST_DATA>{}
        data.config_idx = idx;
        this.forum.getsForumData( data, res => {
            this.list_posts = res['data'];
            console.log('data :: ', this.list_posts);
        }, error => console.log( "Unable to get post lists. Error: ", error ) );
    }

}