import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FakePageComponent } from './fake-page.component';

const routes: Routes = [
  {
    path: '',
    component: FakePageComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FakePageRoutingModule { }
