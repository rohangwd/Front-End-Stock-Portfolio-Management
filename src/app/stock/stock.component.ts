import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Stock } from '../models/stock';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent implements OnInit {
  
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor(public stockService: StockService,private route: ActivatedRoute,
    private router: Router ){}
  message:any
  stock : Stock = new Stock(0,"",0,0,0);


    saveStockDetail(): void {
      this.stockService.saveStock(this.stock).subscribe({
          next: (data: string) => {
             this.message = data; 
          },
          error: (err: HttpErrorResponse) => {
              console.error('Error:', err);
              this.message="Real Time Stock Service Down";
          }
      });
  }
  

  fetchStockById(stockId: number): void {
      this.stockService.getStockById(stockId).subscribe((stock: Stock) => {
        this.stock = stock;
      });
    }

  
   updateStock(): void {
      if (this.stock) {
        this.stockService.updateStock(this.stock.id, this.stock).subscribe(() => {
          // Navigate back to the portfolio or success message after update
         // this.router.navigate(['/Portfolio']);
        });
      }
    }

}
