import { Component, Input } from '@angular/core';
import { User } from '../../api/backend-angular-api/user';
import { Forum } from '../../api/backend-angular-api/forum';
import { USER_DATA_RESPONSE, FORUM_DATA_RESPONSE_DATA, USER_FIELDS } from '../../api/backend-angular-api/interface';

@Component({
    selector: 'view-component',
    templateUrl: 'view.html'
})

export class ViewComponent {

    postOwner: USER_FIELDS = <USER_FIELDS> {};

    @Input() post: FORUM_DATA_RESPONSE_DATA;

    // postData: FORUM_DATA_RESPONSE_DATA = <FORUM_DATA_RESPONSE_DATA> {};
    constructor( private user: User ) { 
     
    }

    getPostOwner(){
    
        this.user.getUserData( res => {

        }, error => {}, () => {} );
    }

}