import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles: [
    `
      .glyphicon {
        color: green;
        font-size: 40px;
      }
    `
  ]
})
export class FavoriteComponent implements OnInit {

  @Input('is-favorite') isSelected: boolean;

  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isSelected = !this.isSelected;
    //this.change.emit(this.isSelected);
    //what if we want to pass an object
    this.change.emit({newValue: this.isSelected});
  }

}
