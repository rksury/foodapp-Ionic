import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
 cart() {
    this.router.navigate(['/tabs/cart']);
}

}
