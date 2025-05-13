import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentInputSectionComponent } from './investment-input-section/investment-input-section.component';
import { InvestmentResultComponent } from "./investment-result/investment-result.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InvestmentInputSectionComponent, InvestmentResultComponent]
})
export class AppComponent {}
