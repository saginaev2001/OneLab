import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Output() todoForm = new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void {
  }

  value='';
  todoList = [
    {
      completed: false,
      name: 'Купить молоко'
    },
    {
      completed: true,
      name: 'Купить хлеб'
    },
    {
      completed: false,
      name: 'Купить масло'
    },
  ];
  addData() {
    this.todoList.push({
      completed: false,
      name: this.value
    });
    this.value = '';
  }
  deleteTodo(index: number) {
    this.todoList.splice(index, 1);
  }

}
