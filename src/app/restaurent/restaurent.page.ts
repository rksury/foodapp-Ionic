import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-restaurent',
    templateUrl: './restaurent.page.html',
    styleUrls: ['./restaurent.page.scss'],
})
export class RestaurentPage implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  restaurant_detail() {
    this.router.navigate(['/tabs/restdetail']);
  }
}
