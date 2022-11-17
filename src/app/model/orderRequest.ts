export interface OrderRequest{
	currencyPair: string;
	type: string;
	quantity: number;
	price: number;
}