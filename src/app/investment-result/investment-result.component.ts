import { Component, OnInit } from '@angular/core';
import { EventEmotterService, Events ,EmitEvent} from '../event-emotter.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent implements OnInit {
  constructor(private eventEmitterService:EventEmotterService) {}
  ngOnInit(): void {
      this.eventEmitterService.on(Events.InvestmentResult).subscribe((data:any)=>{
        console.log(data);
      })
  }
}
