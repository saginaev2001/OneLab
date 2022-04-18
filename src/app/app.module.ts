import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from "@angular/forms";
import {MainComponent} from "./components/main/main.component";
import {AboutusComponent} from "./components/aboutus/aboutus.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import {CarPipe} from "./shared/pipes/car.pipe";
import { ZoomDirective } from './shared/Directives/zoom.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    MainComponent,
    AboutusComponent,
    ContactsComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoItemComponent,
    CarPipe,
    ZoomDirective
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
