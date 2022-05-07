import { Food } from './../shared/models/Food';
import { Cart } from './../shared/models/Cart';
import { Injectable } from '@angular/core';
import { CartItem } from '../shared/models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart=new Cart();

  addToCart(food:Food){
    let cartItem=this.cart.items.find(item=>{return item.food.id===food.id})
    if(cartItem){
      this.changQuantity(food.id,cartItem.quantity+1)
    }else{
      this.cart.items.push(new CartItem(food))
    }
  }
  changQuantity(foodId:number,quantity:number){
   let cartItem=this.cart.items.find(item=>{ return item.food.id===foodId})
   if(!cartItem){
     return ;
   }else{
     cartItem.quantity=quantity;
   }
  }
  removeFromCart(foodId:number){
    this.cart.items =this.cart.items.filter(item=>{return item.food.id!=foodId})
  }
  getCart():Cart{
    return this.cart;
  }
}
