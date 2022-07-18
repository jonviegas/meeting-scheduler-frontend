import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Meeting } from './meeting.model';

@Injectable({
  providedIn: 'root',
})
export class MeetingService {
  private url = 'https://meeting-scheduler-system.herokuapp.com/rooms';

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  findAll(): Observable<Meeting[]> {
    return this.http.get<any>(this.url).pipe(map((page) => page['content']));
  }

  findById(id: string): Observable<Meeting> {
    const url = `${this.url}/${id}`;
    return this.http.get<Meeting>(url).pipe(
      map((meeting) => meeting),
      catchError((e: HttpErrorResponse) => this.handleError(e.error))
    );
  }

  findByName(name: string): Observable<Meeting[]> {
    const url = `${this.url}/search/${name}`;
    return this.http.get<any>(url).pipe(
      map((page) => page['content']),
      catchError((e: HttpErrorResponse) => this.handleError(e.error))
    );
  }

  save(meeting: Meeting): Observable<Meeting> {
    return this.http.post<Meeting>(this.url, meeting).pipe(
      map((room) => room),
      catchError((e: HttpErrorResponse) => this.handleError(e.error))
    );
  }

  update(meeting: Meeting): Observable<Meeting> {
    const url = `${this.url}/${meeting.id}`;
    return this.http.put<Meeting>(url, meeting).pipe(
      map((meeting) => meeting),
      catchError((e: HttpErrorResponse) => this.handleError(e.error))
    );
  }

  delete(meeting: Meeting): Observable<Meeting> {
    const url = `${this.url}/${meeting.id}`;
    return this.http.delete<Meeting>(url).pipe(
      map((meeting) => meeting),
      catchError((e: HttpErrorResponse) => this.handleError(e.error))
    );
  }

  handleError(error: HttpErrorResponse): Observable<any> {
    const isNotFound = error['status'] == 404;
    const msg = isNotFound
      ? error['message'].replace('Room', 'Meeting')
      : 'There was an error while connecting to the server';
    this.showMessage(msg, true);
    const route = isNotFound ? '/not-found' : '/meetings';
    this.navigateTo(route);
    return EMPTY;
  }

  showMessage(message: string, isError: boolean = false): void {
    this.snackBar.open(message, 'X', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: isError ? ['message-error'] : ['message-success'],
    });
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  emptyMeeting(): Meeting {
    return {
      name: '',
      date: '',
      startHour: '',
      endHour: '',
    };
  }
}
