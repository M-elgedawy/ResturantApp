import { CartItem } from './cartItem';
export class Cart{
  items:CartItem[]=[];
  totalPrice():number{
    let total=0;
    this.items.forEach(item=>{
      total+=item.getprice()
    })
    return total;
  }
}
