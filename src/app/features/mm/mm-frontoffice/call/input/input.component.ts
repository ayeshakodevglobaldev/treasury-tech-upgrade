import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  activeSection: string = 'input'; // Default section to show

  setActiveSection(section: string) {
    this.activeSection = section;
  }
}
