import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomeInfoComponent } from './home/home-info/home-info.component';
import { HomeContentComponent } from './home/home-content/home-content.component';
import { HomeContactComponent } from './home/home-contact/home-contact.component';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { ReportEffects } from '../app-store/report/effects/report.effects';
import { StoreModule } from '@ngrx/store';
import { reportFeatureKey } from '../app-store/report/report.store';
import { reportReducer } from '../app-store/report/reducer/report.reducer';



@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeInfoComponent,
    HomeContentComponent,
    HomeContactComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    StoreModule.forFeature(reportFeatureKey, reportReducer),
    EffectsModule.forFeature([ReportEffects])
  ]
})
export class HomeModule { }
