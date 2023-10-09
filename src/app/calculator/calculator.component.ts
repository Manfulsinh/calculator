import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  currentValue = '';

  appendValue(value: string): void {
    this.currentValue += value;
  }

  clear(): void {
    this.currentValue = '';
  }

  evaluate(): void {
    try {
      this.currentValue = eval(this.currentValue).toString();
    } catch (err) {
      this.currentValue = 'Error';
    }
  }

 
}
