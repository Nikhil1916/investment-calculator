import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ColDefination, RowDefination } from './table.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnChanges {
  @Input() cols:Array<ColDefination> = [];
  @Input() rows:Array<RowDefination> = [];

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
  }
}
