import { Component, OnInit } from '@angular/core';
import { EventEmotterService, Events ,EmitEvent} from '../event-emotter.service';
import { ColDefination, RowDefination } from '../table/table.model';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent implements OnInit {
  constructor(private eventEmitterService:EventEmotterService) {}

  columnConfig:Array<ColDefination> = [];
  rowData:Array<RowDefination> = []
  ngOnInit(): void {
    this.columnConfig = [
      {
        name: "Year",
        slug: "year"
      }, 
      {
        name: "Investment Value",
        slug: "valueEndOfYear"
      },
      {
        name: "Interest(year)",
        slug: "interest"
      },
      {
        name:"Total Intrest",
        slug: "totalInterest"
      },
      {
        name: "Invested Capital",
        slug: "totalAmountInvested"
      }
    ]
      this.eventEmitterService.on(Events.InvestmentResult).subscribe((data:any)=>{
        // console.log(data);
        this.rowData = data;
      })
  }
}
