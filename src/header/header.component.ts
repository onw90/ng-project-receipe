import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  // collapsed = true;
  // zeby mozna bylo go nasluchiwac z zewnatrz - przez rodzica (app.component): @Output()
  @Output() featureSelected = new EventEmitter<string>();
  
  onSelect(feature: string) {
    // wysyla eventy - recipe lub shoppinh-list
    this.featureSelected.emit(feature);
  }
}
