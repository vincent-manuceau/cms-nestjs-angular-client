import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'articles', loadChildren: ()=> import('./articles/articles.module').then(m=>m.ArticlesModule)},
  { path:'admin', loadChildren: ()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  { path:'auth', loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
