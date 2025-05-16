import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  imports: [],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  name: string = "";
  email: string = "";
  rating: number = 0;
  message: string = "";
}
