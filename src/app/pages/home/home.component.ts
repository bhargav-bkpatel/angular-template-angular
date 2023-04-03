import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  raw3ae7: string = ' '
  rawfdgb: string = ' '
  rawjg3w: string = ' '
  rawbjcv: string = ' '
  rawz0mr: string = ' '
  rawchv1: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Up Start Template')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Up Start Template',
      },
    ])
  }
}
