export interface Trade{
    id:number;
	buyOrderId:number;
	sellOrderId:number;
	createdDateTime: Date;
	price: number;
	quantity: number;
}