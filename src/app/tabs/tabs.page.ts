import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router: Router) {}
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
