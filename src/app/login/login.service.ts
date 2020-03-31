import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 public mobile_number: any;
 public password: any;

  base_Url = environment.base_Url;

    constructor(private httpClient: HttpClient) {
    }

    Login(data) {
        return this.httpClient.post(this.base_Url + 'auth/login', data);
    }


}
