import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../api/backend-angular-api/user';
import { Forum } from '../../api/backend-angular-api/forum';
import { FORUM_DATA_REQUEST_DATA, FORUM_DATA_UPDATE_REQUEST_DATA, FORUM_CONFIG_REQUEST_DATA, FORUM_CONFIG_GET_REQUEST_DATA } from '../../api/backend-angular-api/interface';

@Component({
    selector: "edit-component",
    templateUrl: "edit.html"
})

export class EditComponent {
    @Input() post;
 
    postData: FORUM_DATA_REQUEST_DATA = <FORUM_DATA_REQUEST_DATA> {};
    user_idx: number;
    constructor( private forum: Forum,
                 private user: User ) {
                     this.getConfig();
                     this.getCurrentUser()
    }

    clearAll(){
        this.postData = <FORUM_DATA_REQUEST_DATA> {};
    }

    getCurrentUser(){
        this.user.getUserData( res => {
            this.user_idx = res['data']['user']['idx'];
            console.log( "User IDX: ", this.user_idx );
        }, error => console.log( "Unable to get user's IDX. Error: ", error ) , () => {});
    }

    getConfig(){
        let data : FORUM_CONFIG_GET_REQUEST_DATA = <FORUM_CONFIG_GET_REQUEST_DATA> {}
        data.config_idx = 1;
        this.forum.getForumConfig( data, res =>{
            console.log('config :: ' + res);
        }, error =>{
            this.createPostConfig();
        })
    }

    createPostConfig(){
        let data : FORUM_CONFIG_REQUEST_DATA = <FORUM_CONFIG_REQUEST_DATA>{}
        data.id = 'study';
        data.name = 'Study Community Forum';
        this.forum.createForumConfig( data, res => {
            console.info('config created ' + res );
        }, error =>{ console.error('error ' + error ) }, ()=>{})
    }

    create(){
        this.postData.config_idx = 1;
        this.postData.user_idx = this.user_idx;        
        this.forum.createForumData( this.postData, res => {
            console.log( "Write post success!" );
            this.clearAll();
        }, error => {
            console.log( "Unable to write post. Error: ", error );
        });
    }

    update(){
        // let data: FORUM_DATA_UPDATE_REQUEST_DATA = {
        //     user_idx: this.postData.user_idx,
        //     content: this.postData.content
        // }
        // this.forum.editForumData( data, res => {})
    }

    onClickSubmit(){
        if( this.post ){
            this.update();
        }
        this.create();
    }


}