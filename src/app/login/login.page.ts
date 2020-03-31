import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {LoginService} from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    public errorMessage = {
        mobile_number: [
            {type: 'required', message: 'mobile number required'},
            {type: 'maxlength', message: 'mobile number cant be longer than 10 characters'},


        ],
        password: [
            {type: 'required', message: 'password required'},
            {type: 'maxlength', message: 'username cant be longer than 50 characters'},
            {type: 'minlength', message: 'username must be 4 characters'},

        ]
    };

    // submitform = new FormGroup({
    //     mobile_number: new FormControl(''),
    //     password: new FormControl('')
    //
    // });

    submitform = this.formBuilder.group({
        mobile_number: ['number', [Validators.required, Validators.maxLength(10)]],
        password: ['string', [Validators.required, Validators.maxLength(50), Validators.minLength(4)]]
    });

    constructor(private router: Router, private formBuilder, private loginService: LoginService,
                private route: ActivatedRoute) {
    }

    forgetpwdlink() {
        this.router.navigate(['/login']);
    }

    get mobile_number() {
        return this.submitform.get('mobile_number');
    }

    get password() {
        return this.submitform.get('password');
    }


    ngOnInit() {
    }

    OnSubmit() {
        console.warn(this.submitform.value);
        this.loginService.Login(this.submitform.value).subscribe(data => {
            try {
                window.localStorage.setItem('token', data['token']);
                window.localStorage.setItem('user', data['user'].name);
                this.router.navigate(['/tabs/tab1']);
                // window.localStorage.setItem('user', data.user);
                // this.utils.presentToast('Logged in as ' + data.user.name);
            } catch (e) {
                console.log(e);
            }

        });


    }

}
