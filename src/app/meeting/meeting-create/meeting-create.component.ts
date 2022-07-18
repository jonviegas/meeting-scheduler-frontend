import { MeetingService } from './../meeting.service';
import { Component, OnInit } from '@angular/core';
import { Meeting } from '../meeting.model';

@Component({
  selector: 'app-meeting-create',
  templateUrl: './meeting-create.component.html',
  styleUrls: ['./meeting-create.component.css'],
})
export class MeetingCreateComponent implements OnInit {
  meeting = this.meetingService.emptyMeeting();

  constructor(private meetingService: MeetingService) {}

  ngOnInit(): void {}

  create(meeting: Meeting): void {
    this.meetingService.save(meeting).subscribe(() => {
      this.meetingService.showMessage('Meeting successfully saved');
      this.meetingService.navigateTo('/meetings');
    });
  }
}
