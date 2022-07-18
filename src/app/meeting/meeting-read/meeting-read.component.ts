import { MeetingService } from '../meeting.service';
import { Component, OnInit } from '@angular/core';
import { Meeting } from '../meeting.model';

@Component({
  selector: 'app-meeting-read',
  templateUrl: './meeting-read.component.html',
  styleUrls: ['./meeting-read.component.css'],
})
export class MeetingReadComponent implements OnInit {
  constructor(private meetingService: MeetingService) {}

  meetings!: Meeting[];
  timeout = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.timeout = false
    }, 300);
    this.meetingService.findAll().subscribe((meetings) => {
      this.meetings = meetings;
    });
  }
}
