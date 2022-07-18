import { NotFoundComponent } from './views/not-found/not-found.component';
import { MeetingCreateComponent } from './meeting/meeting-create/meeting-create.component';
import { MeetingDeleteComponent } from './meeting/meeting-delete/meeting-delete.component';
import { MeetingUpdateComponent } from './meeting/meeting-update/meeting-update.component';
import { MeetingDetailsComponent } from './meeting/meeting-details/meeting-details.component';
import { MeetingReadComponent } from './meeting/meeting-read/meeting-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'meetings', pathMatch: 'full' },
  { path: 'meetings', component: MeetingReadComponent },
  { path: 'meetings/create', component: MeetingCreateComponent },
  { path: 'meetings/details/:id', component: MeetingDetailsComponent },
  { path: 'meetings/update/:id', component: MeetingUpdateComponent },
  { path: 'meetings/delete/:id', component: MeetingDeleteComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
