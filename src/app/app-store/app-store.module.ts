import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionTypeUniqueness: true
      }
    }),
    EffectsModule.forRoot([]),
    environment.production ? [] : [
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production
      })
    ]
  ]
})
export class AppStoreModule { }
