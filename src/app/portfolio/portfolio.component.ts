import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/stock';
import { StockService } from '../services/stock.service';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  
  stocks: Stock[] = [];
  totalPortfolioValue: number = 0;

  constructor(private stockService: StockService,private portfolioService : PortfolioService) { }

  ngOnInit(): void {
    this.loadPortfolio();
  }

  loadPortfolio(): void {
    // Fetch stocks in the portfolio
    this.stockService.getPortfolioStocks().subscribe((stocks: Stock[]) => {
      this.stocks = stocks;
    });

    // Fetch the total portfolio value
    this.portfolioService.getPortfolioTotalValue().subscribe((totalValue: number) => {
      this.totalPortfolioValue = totalValue;
    });
  }

  deleteStock(stockId: number): void {
    this.stockService.deleteStock(stockId).subscribe(() => {
      // Refresh the list of stocks and total value after deletion
      this.loadPortfolio();
    });
  }

} 
