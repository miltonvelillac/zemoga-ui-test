import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { routesData } from './shared/utils/constants/routes.constants';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: routesData.home,
        loadChildren: () => import('./home/home.module').then(childModule => childModule.HomeModule)
      },
      {
        path: routesData.trials,
        loadChildren: () => import('./fake-page/fake-page.module').then(childModule => childModule.FakePageModule)
      },
      {
        path: routesData.howItWorks,
        loadChildren: () => import('./fake-page/fake-page.module').then(childModule => childModule.FakePageModule)
      },
      {
        path: routesData.login,
        loadChildren: () => import('./fake-page/fake-page.module').then(childModule => childModule.FakePageModule)
      },
      {
        path: routesData.search,
        loadChildren: () => import('./fake-page/fake-page.module').then(childModule => childModule.FakePageModule)
      },
      { path: '**', redirectTo: routesData.home }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
