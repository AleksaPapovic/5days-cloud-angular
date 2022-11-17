import { Component, OnInit } from '@angular/core';
import { OrderBook } from 'src/app/model/orderbook';
import { OrderRequest } from 'src/app/model/orderRequest';
import { OrderService } from 'src/app/order/order.service';
import { OrderbookService } from 'src/app/orderbook/orderbook.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  orderbooks: OrderBook =  {buyOrders:[],sellOrders:[]};
  newOrder:OrderRequest={type:"BUY",price:-2,quantity:-2,currencyPair: "BTCUSD"};

  constructor(private orderService: OrderService,
    private orderbookService:OrderbookService) { }

  ngOnInit(): void {
   this.getOrderBooks();
    //this.orderService.getOrder(1).subscribe();
  }
getOrderBooks(){
  this.orderbookService.getOrderBook().subscribe((obs)=> this.orderbooks =obs);
}
  placeOrder(){
    this.orderService.createOrderTrade(this.newOrder).subscribe(data => {
      console.log("Order created",data);
    this.getOrderBooks()});
  }

  changeType(e: any) {
   this.newOrder.type= e.target.value;
  }
}
