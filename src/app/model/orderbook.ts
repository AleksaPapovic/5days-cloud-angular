import { OrderTotal } from "./orderTotal";

export interface OrderBook{
    buyOrders: OrderTotal[];
	sellOrders: OrderTotal[];
}
