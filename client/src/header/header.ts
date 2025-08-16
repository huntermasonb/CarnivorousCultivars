import {Component, ElementRef, HostListener} from '@angular/core';
import {RouterLink} from '@angular/router';

import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {Drawer} from 'primeng/drawer';
import {ButtonDirective} from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    Drawer,
    ButtonDirective,
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  isMenuOpen = false;
  constructor(private elementRef: ElementRef){}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    const headerElement = this.elementRef.nativeElement;

    if (!headerElement.contains(target)) {
      this.closeMenu();
    }
  }
  @HostListener('document:keydown.escape')
  onEscapeKey(event: Event){
    this.closeMenu();
  }
}
