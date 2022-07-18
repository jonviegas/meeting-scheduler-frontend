import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../meeting.service';
import { Meeting } from '../meeting.model';

@Component({
  selector: 'app-meeting-delete',
  templateUrl: './meeting-delete.component.html',
  styleUrls: ['./meeting-delete.component.css'],
})
export class MeetingDeleteComponent implements OnInit {
  meeting!: Meeting;

  constructor(
    public meetingService: MeetingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.meetingService.findById(id).subscribe((meeting) => {
      this.meeting = meeting;
    });
  }

  delete(meeting: Meeting): void {
    if (confirm(`Are you sure you want to delete ${meeting.name} meeting?`)) {
      this.meetingService.delete(this.meeting).subscribe(() => {
        this.meetingService.showMessage('Meeting successfully deleted');
        this.meetingService.navigateTo('/meetings');
      });
    }
  }
}
