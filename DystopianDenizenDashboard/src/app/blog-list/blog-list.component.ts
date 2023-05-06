import { Component } from '@angular/core';
import { Blogpost } from '../models/blogpost';
import { BlogAPIServiceService } from '../services/blog-apiservice.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
  BlogpostList: Blogpost[] = [];
  message: string = "";

  currentBlogpost: Blogpost| undefined;

  constructor(private BlogpostService: BlogAPIServiceService) { }

  ngOnInit(): void 
  {
    this.BlogpostService.getBlogposts().subscribe(
      {
        next: (value: Blogpost[] )=> this.BlogpostList = value,
        complete: () => console.log('Blogpost service finished'),
        error: (mess) => this.message = mess
      })
  }

  clicked(Blogpost: Blogpost): void
  {
    this.loadBlogpostDetails(Blogpost);
  }

  dismissAlert()
  {
    this.message = "";
  }

  // Used to manually load the Blogpost details after updates and onClickevents
  loadBlogpostDetails(Blogpost:Blogpost)
  {
    this.currentBlogpost = Blogpost;
  }

    // Highlight the selected item
    isSelected(Blogpost: Blogpost): boolean 
    {
      if (!Blogpost || !this.currentBlogpost) 
      {
        return false;
      }
      else 
      {
        return Blogpost._id === this.currentBlogpost._id;
      }
    }

}
