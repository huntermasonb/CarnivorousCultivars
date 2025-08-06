import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {BsDropdownDirective, BsDropdownMenuDirective, BsDropdownToggleDirective} from 'ngx-bootstrap/dropdown';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink, ButtonsModule, BsDropdownDirective, BsDropdownToggleDirective, BsDropdownMenuDirective
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {

}
