import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  @Input() myFontSize: number = 50;
  @Input() attr2: number = 20;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // this.elementRef.nativeElement.style.fontWeight = 'bold';
    this.elementRef.nativeElement.style.color = 'black';
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', 'bold');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.color = 'blue';
    this.elementRef.nativeElement.style.fontSize = this.myFontSize + 'px';
    this.renderer.addClass(this.elementRef.nativeElement, 'box');
  }

  @HostListener('mouseleave') onMouseLeave() {
    // console.log('Пока мышка!');
    this.elementRef.nativeElement.style.color = 'black';
    this.elementRef.nativeElement.style.fontSize = this.attr2 + 'px';
    this.renderer.removeClass(this.elementRef.nativeElement, 'box');
  }
/*
  @HostListener('window:keydown.enter', ['$event']) handleKeyDown(event: KeyboardEvent) {
    this.elementRef.nativeElement.style.color = 'red';
    this.elementRef.nativeElement.style.fontSize = this.attr2 + 'px';
  }

  @HostListener('window:keyup.enter', ['$event']) handleKeyUp(event: KeyboardEvent) {
    this.elementRef.nativeElement.style.color = 'black';
    console.log(this.myFontSize);
    this.elementRef.nativeElement.style.fontSize = this.myFontSize + 'px';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', this.myFontSize + 'px');

  }

  @HostListener('window:keydown', ['$event']) handleKey(event: KeyboardEvent) {
    // console.log(event);
  }
*/

}
