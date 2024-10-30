export class Stock {
    constructor(
        public id:number,
        public symbol: String,
        public quantity: number,  
        public currentPrice: number,
        public totalValue: number
    ) { }
}
