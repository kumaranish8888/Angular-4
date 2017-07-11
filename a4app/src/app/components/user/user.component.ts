import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address: Address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post;

  constructor(private dataService: DataService) { 
    this.name = "John Doe";
    this.dataService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
   }

  ngOnInit() {
    this.name = "Anish Kumar";
    this.age = 32;
    this.address = {
      street: 'Main Street',
      city: 'Kingsville',
      state: 'Texas'
    }
    this.hobbies = ["Music", "Sports", "Physics"];
    this.showHobbies = true;
  }

  myHobbies(){
    if(this.showHobbies == false){
      this.showHobbies = true;
    }else {
      this.showHobbies = false;
    }
  }

  addHobby(hobby){
    this.hobbies.push(hobby);
  }

}

interface Address {
  street: string,
  city: string,
  state: string
}

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}
