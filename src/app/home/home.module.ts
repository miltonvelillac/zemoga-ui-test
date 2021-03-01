import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ReportEffects } from '../app-store/report/effects/report.effects';
import { reportReducer } from '../app-store/report/reducer/report.reducer';
import { reportFeatureKey } from '../app-store/report/report.store';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeContactComponent } from './home/home-contact/home-contact.component';
import { CardReportComponent } from './home/home-content/card-reports/card-report.component';
import { HomeContentComponent } from './home/home-content/home-content.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomeInfoComponent } from './home/home-info/home-info.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeInfoComponent,
    HomeContentComponent,
    HomeContactComponent,
    CardReportComponent
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
