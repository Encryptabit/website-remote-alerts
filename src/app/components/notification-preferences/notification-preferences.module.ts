import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationPreferencesComponent } from './notification-preferences.component';
import { NotificationPreferencesRoutingModule } from './notifications-preferences-routing.module';

@NgModule({
  declarations: [
    NotificationPreferencesComponent
  ],
  imports: [
    CommonModule,
    NotificationPreferencesRoutingModule
  ]
})
export class NotificationPreferencesModule { }
