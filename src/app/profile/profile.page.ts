import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    submitform = new FormGroup({
        fullname: new FormControl(''),
        email: new FormControl(''),
        dob: new FormControl(''),
        mobile: new FormControl(''),
        password: new FormControl(''),
        address: new FormControl(''),

    });

  constructor() { }


  ngOnInit() {
  }

  OnSubmit() {
        console.warn(this.submitform.value);
    }

}
