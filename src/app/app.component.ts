import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';
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
  car='Lexus';
}
