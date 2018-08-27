import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts()
      .subscribe(
        (res) => {
          console.log(res.json());
          this.posts = res.json();
        },
        error => {
          console.log(error);
        });
  }

  createPost = (input: HTMLInputElement) => {
    let post = {
      title: input.value
    }
    input.value = '';
    this.service.createPost(post)
      .subscribe(
        (res) => {
          post['id'] = res.json().id;
          this.posts.splice(0, 0, post);
          console.log(res.json())
        },
        (error: Response) => {
          if(error.status === 400) {

          } else {
            console.log(error);
          }
        });
  };

  updatePost = (post) => {
    //Patch will only require us to send the property which needs to be updated, whereas put will ask to send the complete object which needs to be updated.
    this.service.updatePost(post)
      .subscribe(
        res => {
          console.log(res.json());
        },
        error => {
          console.log(error);
        });
  }

  deletePost = (post) => {
    this.service.deletePost(post.id)
      .subscribe(
        res => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: Response) => {
          if(error.status === 404) {
            alert("This post does not exist");
          }else {
            alert("an unexpected error occurred");
            console.log(error);
          }
        });
  }

}
