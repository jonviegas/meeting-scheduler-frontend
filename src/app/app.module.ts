import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { NavComponent } from './template/nav/nav.component';
import { MainComponent } from './template/main/main.component';
import { MeetingReadComponent } from './meeting/meeting-read/meeting-read.component';
import { MeetingDetailsComponent } from './meeting/meeting-details/meeting-details.component';
import { MeetingUpdateComponent } from './meeting/meeting-update/meeting-update.component';
import { MeetingFormComponent } from './views/meeting-form/meeting-form.component';
import { MeetingDeleteComponent } from './meeting/meeting-delete/meeting-delete.component';
import { MeetingCreateComponent } from './meeting/meeting-create/meeting-create.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { MeetingSearchComponent } from './meeting/meeting-search/meeting-search.component';
import { EmptyListComponent } from './views/empty-list/empty-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    MeetingReadComponent,
    MeetingDetailsComponent,
    MeetingUpdateComponent,
    MeetingFormComponent,
    MeetingDeleteComponent,
    MeetingCreateComponent,
    NotFoundComponent,
    MeetingSearchComponent,
    EmptyListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
