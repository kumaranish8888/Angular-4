import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentsService {

  constructor(private http: Http) { }

  getComments(){
    return this.http.get('http://jsonplaceholder.typicode.com/comments')
    .map(res => res.json());
  }

}
