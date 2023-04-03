import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
})
export class Card {
  @Input()
  rootClassName: string = ''
  @Input()
  text: string = 'Business'
  @Input()
  text1: string =
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do.'

  constructor() {}
}
