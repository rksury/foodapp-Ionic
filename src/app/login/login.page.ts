import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Validators, FormBuilder,} from '@angular/forms';
import {LoginService} from './login.service';
import {ToasterService} from './toaster.service';
// import {TabsPage} from '../tabs/tabs.page';

// import {FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    // tslint:disable-next-line:ban-types
    loginresdata: Object = {token: null, user: null};

    public errorMessage = {
        mobile_number: [
            {type: 'required', message: 'mobile number required'},
            // {type: 'maxlength', message: 'credential error with number'},
        ]
    };


    submitform = this.formBuilder.group({
        mobile_number: ['mobile_number', [Validators.required, Validators.maxLength(10)]],
    });

    constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router,
                private loginService: LoginService, private toaster: ToasterService) {
    }

    get mobile_number() {
        return this.submitform.get('mobile_number');
    }

    //
    // get password() {
    //     return this.submitform.get('password');
    // }


    ngOnInit() {
    }

    OnSubmit() {
        console.warn(this.submitform.value);
        this.loginService.Login(this.submitform.value).subscribe(data => {
                this.loginresdata = data;
                try {
                    // window.localStorage.setItem('token', data.token);
                    // window.localStorage.setItem('user', data.user.name);
                    // this.toaster.presentToast('Logged in as ' + data.user.name);
                    this.router.navigate(['/tabs/tab1']);
                    // this.tabPage.refresh();
                    this.submitform.reset();

                } catch (e) {
                    this.toaster.presentToast(e.toString());
                }
            },
            error => {
                this.toaster.presentToast(error.error.error[0]);
            }
        )
        ;
    }



}
