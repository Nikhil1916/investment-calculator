import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentInputSectionComponent } from './investment-input-section/investment-input-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InvestmentInputSectionComponent]
})
export class AppComponent {}
