import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    {{text | summary: 10}}
  `
})
export class CoursesComponent implements OnInit {

  text = "Hello this is the heavon of Earth and I am going to kill you."

  constructor() { }

  ngOnInit() {
  }

}
