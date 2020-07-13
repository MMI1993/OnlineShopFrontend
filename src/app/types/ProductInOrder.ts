
import {ProductInfo} from "./productInfo";

export class ProductInOrder {
  id: number;
  categoryType: number;
  productDescription: string;
  productId: string;
  productName: string;
  productPrice: number;
  productStatus: string;
  productStock: string;
  cartUserId:number;
  orderId: number;


  constructor(productInfo:ProductInfo, quantity = 1){
    this.id = productInfo.id;
    this.productName = productInfo.productName;
    this.productPrice = productInfo.productPrice;
    this.productStock = productInfo.productStock;
    this.productDescription = productInfo.productDescription;;
    this.categoryType = productInfo.categoryType;
    this.productStatus = productInfo.productStatus;

  }
}
