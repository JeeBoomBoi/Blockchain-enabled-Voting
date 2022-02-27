import { Component } from '@angular/core';
import { Poll } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showForm = false;
  activePoll: Poll = null;

  polls: Poll[] = [{
    id: 1,
    question: 'Do you like dogs or cats?',
    thumbnail: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    results: [0,5,7],
    options: ["Cats", "Dogs", "None"],
    voted: true
  },
  {
    id: 2,
    question: 'Best month for holidays?',
    thumbnail: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    results: [1,6,4],
    options: ["June", "July", "August"],
    voted: false
  }];

  setActivePoll(poll) {
    this.activePoll = null;

    setTimeout(() => {
      this.activePoll = poll;
    }, 100);
  }
}
