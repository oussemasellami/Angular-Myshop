import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() eventCompleted = new EventEmitter<Todo>();
  constructor() { }
  ngOnInit(): void {
  }
  sendEvent(){
    this.eventCompleted.emit(this.todo);
  }

}
