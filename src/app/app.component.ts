import { Component,ElementRef, Renderer2,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice11';

  constructor(private el:ElementRef, private renderer:Renderer2){
  }
@HostListener('click') onclick(){
  alert("clicked!!!");
}
@HostListener('mouseenter') onmouseover(){
  this.changebgcolor("red");
  // console.log('move over');
}
@HostListener('mouseleave') onmouseleave(){
  this.changebgcolor("blue")
}
changebgcolor(color:string){
  this.renderer.setStyle(this.el.nativeElement,'color',color);
}
  
}
