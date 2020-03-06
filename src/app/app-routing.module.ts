import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {BrowserModule} from "@angular/platform-browser";
import {IonicModule} from "@ionic/angular";
// import {CartPageModule} from "./cart/cart.module";

const routes: Routes = [

    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'signup',
        loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
    },


];

@NgModule({
    imports: [
        BrowserModule, IonicModule,
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
