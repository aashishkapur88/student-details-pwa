import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() profile: any;
  ngOnChanges(change:SimpleChange){
    console.log(this.profile);
  }
}
