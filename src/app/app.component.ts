import { Component } from '@angular/core';
import { Model, TodoItem } from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  model = new Model();
  getName(){
    return this.model.user;
  }
  getTodoItems(){
    return this.model.items.filter(items => !items.done);
  }
  addItem(newItem: string){
    if(newItem != ""){
      this.model.items.push(new TodoItem(newItem,false));
    }
  }
}
