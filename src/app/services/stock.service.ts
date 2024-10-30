import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';
import { HistoricalStock } from '../models/HistoricalStock';


@Injectable({
  providedIn: 'root'
})
export class StockService {

  api="http://localhost:8080/api";
 
  constructor(private httpClient:HttpClient) { }


  saveStock(stock: Stock): Observable<string> {
    return this.httpClient.post<string>(`${this.api}/addStock`, stock, { responseType: 'text' as 'json' });
  }

  // Fetch the list of stocks with current prices
  getPortfolioStocks(): Observable<Stock[]> {
    return this.httpClient.get<Stock[]>(`${this.api}/stocks/getAllStocks`);
  }

   // Delete a stock from the portfolio by ID
   deleteStock(stockId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.api}/stock/${stockId}`);
  }

   // Method to fetch stock by ID
   getStockById(stockId: number): Observable<Stock> {
    return this.httpClient.get<Stock>(`${this.api}/stock/${stockId}`);
  }


  // Method to update a stock by ID
  updateStock(stockId: number, stock: Stock): Observable<Stock> {
    return this.httpClient.put<Stock>(`${this.api}/stock/${stockId}`, stock);
  }

  }
