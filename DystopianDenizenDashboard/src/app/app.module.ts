import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawerComponent } from './drawer/drawer.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddBlogPostComponent } from './add-blog-post/add-blog-post.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TextEditorComponent } from './text-editor/text-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    DrawerComponent,
    HeaderComponent,
    FooterComponent,
    AddBlogPostComponent,
    HomeComponent,
    AboutComponent,
    BlogListComponent,
    BlogPostComponent,
    CarouselComponent,
    TextEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
