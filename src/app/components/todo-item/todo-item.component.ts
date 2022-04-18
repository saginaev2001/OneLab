import { Component,Input, OnInit } from '@angular/core';
import {todoList} from "../../models";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: todoList;
  constructor() { }

  ngOnInit(): void {
  }

}
