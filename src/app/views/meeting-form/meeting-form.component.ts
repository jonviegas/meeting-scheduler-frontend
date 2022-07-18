import { MeetingService } from './../../meeting/meeting.service';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Meeting } from 'src/app/meeting/meeting.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-meeting-form',
  templateUrl: './meeting-form.component.html',
  styleUrls: ['./meeting-form.component.css'],
})
export class MeetingFormComponent implements OnChanges {
  @Input() meeting!: Meeting;
  @Input() operation!: string;
  @Input() disabled!: boolean;
  @Input() btnColors!: string[];
  @Input() icon!: string;
  @Output() action = new EventEmitter();

  datePattern = "(((0[1-9])|([12][0-9])|(3[01]))\\/((0[0-9])|(1[012]))\\/((20[012]\\d|19\\d\\d)|(1\\d|2[0123])))";
  hourPattern = "^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$";
  meetingForm!: FormGroup;

  constructor(
    public meetingService: MeetingService, 
    private fb: FormBuilder,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.meetingForm = this.fb.group({
      name: [this.meeting ? this.meeting.name : '', [Validators.minLength(4), Validators.maxLength(300), Validators.required]],
      date: [this.meeting ? this.meeting.date : '', [Validators.pattern(this.datePattern), Validators.required]],
      startHour: [this.meeting ? this.meeting.startHour : '', [Validators.pattern(this.hourPattern), Validators.required]],
      endHour: [this.meeting ? this.meeting.endHour : '', [Validators.pattern(this.hourPattern), Validators.required]],
    });
    if (this.disabled) {
      this.meetingForm.disable();
    }
  }

  send(): void {
    const meeting = {id: this.meeting.id || null, ...this.meetingForm.value};
    this.action.emit(meeting);
  }

  isValid(attribute: string): boolean {
    return this.meetingForm.controls[attribute].valid;
  }

  isInvalid(attribute: string): boolean {
    return this.meetingForm.controls[attribute].invalid;
  }

  isTouched(attribute: string): boolean {
    return this.meetingForm.controls[attribute].touched || this.meetingForm.controls[attribute].dirty;
  }

  hasError(attribute: string, error: string): boolean {
    return this.meetingForm.controls[attribute].hasError(error);
  }
}
