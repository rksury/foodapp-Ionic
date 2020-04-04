import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {

    islogedin = window.localStorage.getItem('token') === null;
    user = window.localStorage.getItem('user');
    searchQuery = '';

    constructor(private router: Router) {
       this.refresh();
    }
        ionViewWillEnter() {
        this.islogedin = window.localStorage.getItem('token') === null;

    }

    refresh() {
        this.islogedin = window.localStorage.getItem('token') === null;
        this.user = window.localStorage.getItem('user');
        if (this.user === null) {
            this.user = 'Welcome Guest';

        }

    }

    //   homelink() {
    //     this.router.navigate(['/tabs/tab1']);
    // }

    logout() {
        this.router.navigate(['/login']);
    }

    cart() {
        this.router.navigate(['/tabs/cart']);
    }

    profile() {
        this.router.navigate(['/tabs/profile']);
    }

    restaurant() {
        this.router.navigate(['/tabs/restaurent']);
    }

    myorders() {
        this.router.navigate(['/tabs/myorders']);
    }

    favorite() {
        this.router.navigate(['/tabs/favorite']);
    }

}
