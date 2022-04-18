import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  Page = '';
  log = true;
  gjh: string | undefined ;
  count: number=0;
  increase() : void {
    this.count++;
  }
  constructor() {
    setInterval(()=>
    {this.gjh = new Date().toLocaleTimeString();
  },1000)
  }

  ngOnInit(): void {
  }

}
