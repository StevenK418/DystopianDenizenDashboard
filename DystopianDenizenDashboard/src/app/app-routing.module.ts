import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogPostComponent } from './add-blog-post/add-blog-post.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DystopianDiscourseComponent } from './dystopian-discourse/dystopian-discourse.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'add-blog',component: AddBlogPostComponent},
  {path: 'dystopian-discourse',component: DystopianDiscourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
