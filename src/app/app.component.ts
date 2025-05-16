import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeedbackComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  feedbacks: FeedbackComponent[] = [];

  submitFeedback(name:string, email:string, rating:string, message:string){
    console.log(name);

if (name && email && rating) {
    this.feedbacks.push({
      name: name,
      email: email,
      rating: Number(rating),
      message: message
    });

  const form = document.getElementById("feedbackform") as HTMLFormElement;
  form.reset();
  } else {
    alert('Please fill all required fields.');
  }
  }
}
