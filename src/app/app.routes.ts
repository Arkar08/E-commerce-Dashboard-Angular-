import { Routes } from '@angular/router';
import { SingleLayoutComponent } from './layout/single-layout/single-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LogoutComponent } from './pages/auth/logout/logout.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'auth/login',
        pathMatch:'full'
    },
    {
        path:'auth',
        loadChildren:()=>import ('./pages/auth/auth.module').then(m=>m.AuthModule)
    },
    {
        path:'',
        component:SingleLayoutComponent,
        children:[
            {
                path:'dashboard',
                loadChildren:()=>import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path:"user",
                loadChildren:()=>import("./pages/user/user.module").then(m => m.UserModule)
            },
            {
                path:'category',
                loadChildren:()=>import('./pages/category/category.module').then(m => m.CategoryModule)
            },
            {
                path:'order',
                loadChildren:()=>import('./pages/order/order.module').then(m => m.OrderModule)
            },
            {
                path:'products',
                loadChildren:()=>import('./pages/products/products.module').then(m => m.ProductsModule)
            },
            {
                path:'logout',
                component:LogoutComponent
            }
        ]
    },
    {
        path:'**',
        component:NotFoundComponent
    }
];
