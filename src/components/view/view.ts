import { Component, Input } from '@angular/core';
import { User } from '../../api/backend-angular-api/user';
import { Forum } from '../../api/backend-angular-api/forum';
import { USER_DATA_RESPONSE_DATA, FORUM_DATA_RESPONSE_DATA } from '../../api/backend-angular-api/interface';

@Component({
    selector: 'view-component',
    templateUrl: 'view.html'
})

export class ViewComponent {

    userData: USER_DATA_RESPONSE_DATA;

    @Input() post: any;

    // postData: FORUM_DATA_RESPONSE_DATA = <FORUM_DATA_RESPONSE_DATA> {};
    constructor( private user: User ) { 
     
    }

    
}