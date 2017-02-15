export interface IProduct {
	id:number,
	name:string,
	description:string,
	image: Array<string>,
	starrating: number,
	price: number,
	discount: number,
	sizes: Array<string>,
	makerlogo: string,
	type: string,
}