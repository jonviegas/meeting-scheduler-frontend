import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meeting } from '../meeting.model';
import { MeetingService } from '../meeting.service';

@Component({
  selector: 'app-meeting-update',
  templateUrl: './meeting-update.component.html',
  styleUrls: ['./meeting-update.component.css'],
})
export class MeetingUpdateComponent implements OnInit {
  meeting!: Meeting;

  constructor(
    public meetingService: MeetingService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.meetingService.findById(id).subscribe((meeting) => {
      this.meeting = meeting;
    });
  }

  update(meeting: Meeting): void {
    this.meetingService.update(meeting).subscribe(() => {
      this.meetingService.showMessage('Meeting successfully updated');
      this.meetingService.navigateTo('/meetings');
    });
  }
}
