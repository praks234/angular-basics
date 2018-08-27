import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {
  form;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        name: []
      }),
      topics: fb.array([])
    })
  }

  ngOnInit() {
  }

  // form = new FormGroup({
  //   topics: new FormArray([])
  // });

  // Suppose we had a complex architecture of a form like this -->
  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl()
  //   }),
  //   topics: new FormArray([])
  // });

  // We could use form builder for the same architecture of the form in a cleaner way. Look the constructor function.

  addTopic = (topic: HTMLInputElement) => {
    this.topics.push(new FormControl(topic.value));
    topic.value= "";
  }

  removeTopic = (topic) => {
    let index = this.topics.controls.indexOf(topic);
    this.topics.controls.splice(index, 1);
  }

  get topics() {
    return this.form.get('topics') as FormArray
  }

}
