import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { DataService } from './Services/data.service';
import { CommentsService } from './Services/comments.service';
import { AboutComponent } from './components/about/about.component';
import { routing } from './app.routing';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [DataService, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
