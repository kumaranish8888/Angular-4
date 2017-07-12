import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../Services/comments.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  comments: Comments[];

  constructor(private commentsService: CommentsService) { 
      this.commentsService.getComments().subscribe(comments => {
        this.comments = comments;
      })
   }

  ngOnInit() {
  }

}

interface Comments {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}
