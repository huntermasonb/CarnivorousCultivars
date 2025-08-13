import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  closeDropdown(dropdown: any) {
    dropdown.hide();
  }
}
