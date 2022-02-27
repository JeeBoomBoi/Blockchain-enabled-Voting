import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Poll, PollForm } from '../types';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor() { }

  getPolls(): Observable<Poll[]> {
    return of([{
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
    }]).pipe(delay(2000));
  }

  vote(pollId: number, voteNumber: number) {
    console.log(pollId, voteNumber);
  }

  createPoll(poll: PollForm) {
    console.log(poll)
  }
}


