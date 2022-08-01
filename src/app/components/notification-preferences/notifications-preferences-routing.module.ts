import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationPreferencesComponent } from './notification-preferences.component';


const routes: Routes = [
  {
    path: '',
    component: NotificationPreferencesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationPreferencesRoutingModule {}