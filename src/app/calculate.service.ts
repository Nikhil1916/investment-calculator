import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor() { }

  calculateInvestmentResults(params:{initial_investment:number, duration:number, expected_return:number, annual_investment:number}) {
  const annualData = [];
  const {initial_investment, duration, expected_return, annual_investment} = params;
  let investmentValue = initial_investment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expected_return / 100);
    investmentValue += interestEarnedInYear + annual_investment;
    const totalInterest =
      investmentValue - annual_investment * year - initial_investment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annual_investment: annual_investment,
      totalInterest: totalInterest,
      totalAmountInvested: initial_investment + annual_investment * year,
    });
  }

  return annualData;
}
}
