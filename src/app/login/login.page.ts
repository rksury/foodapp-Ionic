import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    submitform = new FormGroup({
        Number: new FormControl(''),
        password: new FormControl(''),

    });

    constructor(private router: Router) {
    }

    forgetpwdlink() {
        this.router.navigate(['/login'])
    }

    ngOnInit() {
    }

    OnSubmit() {
        console.warn(this.submitform.value);
    }

}
