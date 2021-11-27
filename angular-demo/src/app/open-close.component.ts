import { Component, Input } from '@angular/core';
import { trigger, transition, state, animate, style, AnimationEvent } from '@angular/animations';
// to start :  ng serve
@Component({
  selector: 'app-open-close',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      //The transition() function accepts two arguments: 
      //the first argument accepts an expression that defines
      // the direction between two transition states, 
      //and the second argument accepts one or a series of animate() steps.

      // transition('open => closed', [
      //   animate('1s')
      // ]),
      // // ,
      transition('closed => open', [
        animate('0.2s')
      ]),
      // transition('* => closed', [
      //   animate('1s')
      // ]),
      // transition('* => open', [
      //   animate('0.5s')
      // ]),
      // transition('open <=> closed', [
      //   animate('0.2s')
      // ]),
      // transition ('* => open', [
      //   animate ('1s',
      //     style ({ opacity: '*' }),
      //   ),
      // ]),
      transition('* => *', [
        animate('1s')
      ]),
    ]),
  ],
  templateUrl: 'open-close.component.html',
  styleUrls: ['open-close.component.css']
})
export class OpenCloseComponent {
  @Input() logging = false;
  isOpen = true; // any variable defined here are reactive

  toggle() {
    this.isOpen = !this.isOpen;
  }

  onAnimationEvent(event: AnimationEvent) {
    if (!this.logging) {
      return;
    }
    // openClose is trigger name in this example
    console.warn(`Animation Trigger: ${event.triggerName}`);

    // phaseName is "start" or "done"
    console.warn(`Phase: ${event.phaseName}`);

    // in our example, totalTime is 1000 (number of milliseconds in a second)
    console.warn(`Total time: ${event.totalTime}`);

    // in our example, fromState is either "open" or "closed"
    console.warn(`From: ${event.fromState}`);

    // in our example, toState either "open" or "closed"
    console.warn(`To: ${event.toState}`);

    // the HTML element itself, the button in this case
    console.warn(`Element: ${event.element}`);
  }
}
