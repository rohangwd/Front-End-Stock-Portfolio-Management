import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { HistoricalstockComponent } from './historicalstock/historicalstock.component';

const routes: Routes = [
  {  path:"" , redirectTo:"home" , pathMatch:"full"},
  {  path:"home" , component:HomeComponent },
  {  path:"stock" , component:StockComponent },
  {  path:"portfolio" , component:PortfolioComponent },
  {  path:"historicalstock" , component:HistoricalstockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
