import { CartItem } from './../shared/models/cartItem';
import { Cart } from './../shared/models/Cart';
import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart:Cart;
  constructor(private cartservice:CartService) {

   }
   setCart(){
    this.cart=this.cartservice.getCart()
   }
   removeFromCart(CartItem:CartItem){
     this.cartservice.removeFromCart(CartItem.food.id)
     this.setCart()
   }
   changeQuantity(CartItem:CartItem,quantitystring:string){
     const quantity=parseInt(quantitystring);
     this.cartservice.changQuantity(CartItem.food.id,quantity)
     this.setCart()

   }



  ngOnInit(): void {
    this.setCart()
  }

}
