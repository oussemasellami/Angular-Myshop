import { Component, OnInit } from '@angular/core';
import { Todo} from '../model/todo';
import {CalculService} from '../services/calcul.service';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  listTodo: Todo[] ;
  todo:Todo;
  n: number;
  val: string;
  constructor(private calcule: CalculService, private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodo().subscribe((data: Todo[]) => this.listTodo = data);
    this.todo = new Todo();
    this.val = 'Ajouter';

    this.n = 0;
  }

  delete(id) {
    this.todoService.deleteTodo(id).subscribe(
      () => this.listTodo = this.listTodo.filter(todo => todo.id != id)
    );

  }

  save() {
    if (this.val === 'Ajouter'){
      this.todoService.addTodo(this.todo).subscribe(
        () => this.listTodo = [this.todo, ...this.listTodo]
      );
    }
  }
  update(id){
    this.todo.id = id;
    this.val = 'Modifier';

  }
  changeCompleted(t: Todo){
    let i= this.listTodo.indexOf(t);
    this.listTodo[i].completed = true;
  }
  getStat(){
  //  for (let i in this.listTodo){
      //if (this.listTodo[i].completed === true){
        //this.n++;
      //}
    //}
    this.n = this.calcule.getStat(this.listTodo, 'completed',true)
  }

}
