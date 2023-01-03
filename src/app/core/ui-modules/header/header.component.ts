import {Component, Input} from '@angular/core';

@Component({
  selector: 'so-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title: string = 'Smart One';
}
