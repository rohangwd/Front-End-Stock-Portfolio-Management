import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';
import { HistoricalStock } from '../models/HistoricalStock';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  api="http://localhost:8080/api";
 
  constructor(private httpClient:HttpClient) { }


  // Fetch the total value of the portfolio
  getPortfolioTotalValue(): Observable<number> {
    return this.httpClient.get<number>(`${this.api}/portfolio/totalValue`);
  }

  }

