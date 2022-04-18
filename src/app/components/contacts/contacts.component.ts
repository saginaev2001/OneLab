import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  template: `<div class="contacts"><img src="{{photo}}"  alt="" height="200" width="250">
                <p>2022 Lexus IS 250</p></div>
  `
})
export class ContactsComponent {
  photo: string = 'https://d2ivfcfbdvj3sm.cloudfront.net/7fc965ab77efe6e0fa62e4ca1ea7673bb25e4659021e3d8e88cb/stills_0640_png/MY2021/14789/14789_st0640_116.png'
}
