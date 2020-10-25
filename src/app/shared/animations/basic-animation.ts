import {animate, style, transition, trigger} from '@angular/animations';

export const basicAnimation = [
  trigger('fade', [
    transition('void => *', [
      style({opacity: 0}),
      animate(100, style({opacity: 1}))
    ])
  ])
];
