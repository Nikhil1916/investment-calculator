import { Component,inject } from '@angular/core';
import { UserInputComponent } from '../user-input/user-input.component';
import { CalculateService } from '../calculate.service';
import { EventEmotterService, Events ,EmitEvent} from '../event-emotter.service';

@Component({
  selector: 'app-investment-input-section',
  standalone: true,
  imports: [UserInputComponent],
  templateUrl: './investment-input-section.component.html',
  styleUrl: './investment-input-section.component.css'
})
export class InvestmentInputSectionComponent {
  calculateService = inject(CalculateService);
  eventEmitterService = inject(EventEmotterService);
  value:any= {};
  onUpdateValue(value:{key:string,value:any }) {
    this.value[value.key] = value.value;
  }

  onCalculate() {
    if(Object.keys(this.value).length==4) {
      const data = this.calculateService.calculateInvestmentResults({...this.value});
      // console.log(data);
      this.eventEmitterService.emit(new EmitEvent(Events.InvestmentResult, data));
    }
  }
}
