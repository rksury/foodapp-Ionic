import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    base_Url = environment.base_Url

    constructor(private httpClient: HttpClient, private router: Router) {
    }

    Login(payload): Observable<any> {
        return this.httpClient.post(this.base_Url + 'auth/login', payload);
    }

    VerifyLogin() {
        const payload = {token: window.localStorage.getItem('token')};
        return this.httpClient.post(this.base_Url + 'auth/verify-token', payload);
    }

    errorHandler(error: HttpErrorResponse) {
        console.log(HttpErrorResponse);
        return {};
    }


}
