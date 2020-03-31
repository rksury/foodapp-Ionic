import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../tab1/tab1.module').then(m => m.Tab1PageModule)
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../tab2/tab2.module').then(m => m.Tab2PageModule)
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../tab3/tab3.module').then(m => m.Tab3PageModule)
                    }
                ]
            },

            {
                path:
                    'profile',
                loadChildren: () =>
                    import('../profile/profile.module').then(m => m.ProfilePageModule)
            },

            {
                path: 'cart',
                loadChildren: () =>
                    import('../cart/cart.module').then(m => m.CartPageModule)
            },

            {
                path: 'restaurent',
                loadChildren: () =>
                    import('../restaurent/restaurent.module').then(m => m.RestaurentPageModule)
            },

            {
                path: 'myorders',
                loadChildren: () => import('../myorders/myorders.module').then(m => m.MyordersPageModule)
            },
            {
                path: 'restdetail',
                loadChildren: () => import('../restdetail/restdetail.module').then(m => m.RestdetailPageModule)
            },
            {
                path: 'favorite',
                loadChildren: () => import('../favorite/favorite.module').then(m => m.FavoritePageModule)
            },
            {
                path: '', redirectTo: '/tabs/tab1', pathMatch: 'full'
            }
        ]
    },
    {
        path: '', redirectTo: '/tabs/tab1', pathMatch: 'full'
    },

];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
