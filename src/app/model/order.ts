import { Trade } from "./trade";

export interface Order{
    id: number;
	currencyPair: string;
	createdDateTime: Date;
	type: string;
	quantity: number;
	price: number;
	filledQuantity: number;
	orderStatus:string;
	trades: Trade[];
}