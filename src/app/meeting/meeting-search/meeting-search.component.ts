import { MeetingService } from './../meeting.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-meeting-search',
  templateUrl: './meeting-search.component.html',
  styleUrls: ['./meeting-search.component.css'],
})
export class MeetingSearchComponent {
  name!: string;

  constructor(private meetingService: MeetingService) {}

  search(): void {
    const name = !this.name || this.name === '' ? '' : this.name.trim();
    this.name = '';
    if (!name) {
      this.meetingService.showMessage('Please type a name before search', true);
    } else {
      this.meetingService.findByName(name).subscribe((meetings) => {
        const id = meetings[0] ? meetings[0].id : 0;
        this.meetingService.navigateTo(`/meetings/details/${id}`);
      });
    }
  }
}
