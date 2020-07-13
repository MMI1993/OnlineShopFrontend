import {ProductInOrder} from "./ProductInOrder";


export class ProductInfo {
  id: number;
  categoryType: number;
  productDescription: string;
  productName: string;
  productStatus: string;
  productPrice: number;
  productStock: string;
  createTime: string;
  updateTime: string;

  constructor(productInOrder?: ProductInOrder) {
    if (productInOrder) {
      this.id = productInOrder.id;
      this.categoryType = productInOrder.categoryType;
      this.productDescription = productInOrder.productDescription;
      this.productName = productInOrder.productName;
      this.productPrice = productInOrder.productPrice;
      this.productStock = productInOrder.productStock;
      this.productStatus = 'None';
    } else {
      this.id = 0;
      this.categoryType = 0;
      this.productDescription = '';
      this.productName = '';
      this.productPrice = 20;
      this.productStock = '';
      this.productStatus = '';
    }
  }
}
