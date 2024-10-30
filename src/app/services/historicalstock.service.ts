import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';
import { HistoricalStock } from '../models/HistoricalStock';


@Injectable({
  providedIn: 'root'
})
export class HistoricalstockService {

  api="http://localhost:8080/api";
 
  constructor(private httpClient:HttpClient) { }

  // Fetch the list of Historical Stocks.
  getHistoricalStocks(): Observable<HistoricalStock[]> {
    return this.httpClient.get<HistoricalStock[]>(`${this.api}/stocks/getAllHistoricalStocks`);
  }

  }

