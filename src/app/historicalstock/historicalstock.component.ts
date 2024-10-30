import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/stock';
import { HistoricalStock } from '../models/HistoricalStock';
import { HistoricalstockService } from '../services/historicalstock.service';


@Component({
  selector: 'app-historicalstock',
  templateUrl: './historicalstock.component.html',
  styleUrl: './historicalstock.component.css'
})
export class HistoricalstockComponent implements OnInit {
  
  historicalStocks: HistoricalStock[] = [];
  totalPortfolioValue: number = 0;

  constructor(private historicalstockService: HistoricalstockService) { }

  ngOnInit(): void {
    this.loadhistoricalStocks();
  }

  loadhistoricalStocks(): void {
    // Fetch historicalStocks in the portfolio
    this.historicalstockService.getHistoricalStocks().subscribe((historicalStocks: HistoricalStock[]) => {
      this.historicalStocks = historicalStocks;
    });

  }

} 