import { Component,inject } from '@angular/core';
import { UserInputComponent } from '../user-input/user-input.component';
import { CalculateService } from '../calculate.service';

@Component({
  selector: 'app-investment-input-section',
  standalone: true,
  imports: [UserInputComponent],
  templateUrl: './investment-input-section.component.html',
  styleUrl: './investment-input-section.component.css'
})
export class InvestmentInputSectionComponent {
  calculateService = inject(CalculateService);
  value:any= {};
  onUpdateValue(value:{key:string,value:any }) {
    this.value[value.key] = value.value;
    console.log(this.value);
  }

  onCalculate() {
    this.calculateService.calculateInvestmentResults({...this.value});
  }
}
