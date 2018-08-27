import { Component } from '@angular/core';

interface FavoriteChangedEventArgs {
  newValue: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-basics';
  imageUrl: string = '';
  task = {
    assignee: null
  }
  post = {
    title: "Title",
    isFavorite: true
  }

  courses: any[] = [];

  trackCourse(index, course) {
    return course ? course.id : undefined
  }

  loadCourses() {
    this.courses = [
      {id: 1, name: 'Course 1'},
      {id: 2, name: 'Course 2'},
      {id: 3, name: 'Course 3'},
      {id: 4, name: 'Course 4'}
    ];
  }
  addCourse() {
    let index = this.courses.length + 1;
    this.courses.push({
      id: index,
      name: 'Course '+ index
    })
  };

  removeCourse(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  viewMode = 'map';

  // onFavoriteChange(isFavorite) {
  //   console.log("Favorite Changed", isFavorite);
  // }
  //in case we are passing an object

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite Changed", eventArgs);
  }
}
