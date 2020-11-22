import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRollOnScroll]'
})
export class RollOnScrollDirective {

  @HostListener('window:scroll', []) onWindowScroll(){
    const rotation = `rotateZ(${window.scrollY/15}deg)`;
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'transform',
      rotation
    );
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }




}
