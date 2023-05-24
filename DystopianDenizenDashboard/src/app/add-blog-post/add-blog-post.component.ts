import { Component, OnInit } from '@angular/core';
import { IBlogPost } from '../models/blogpost';

@Component({
  selector: 'app-add-blog-post',
  templateUrl: './add-blog-post.component.html',
  styleUrls: ['./add-blog-post.component.css']
})
export class AddBlogPostComponent implements OnInit{

  blogpost?: IBlogPost;

  constructor(){

  }

  ngOnInit(): void {
    
  }

  addNewBlogPost(){

  }

  

}
