import { Meeting } from '../meeting.model';
import { MeetingService } from '../meeting.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.css'],
})
export class MeetingDetailsComponent implements OnInit {
  meeting!: Meeting;

  constructor(
    private meetingService: MeetingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.meetingService.findById(id).subscribe((meeting) => {
      this.meeting = meeting;
    });
  }
}
