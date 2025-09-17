import {Component, ElementRef, HostListener} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {Drawer} from 'primeng/drawer';
import {ButtonDirective} from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    Drawer,
    ButtonDirective,
    RouterLinkActive,
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  constructor(private elementRef: ElementRef){}
  element = ElementRef;

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

  protected readonly console = console;
}
