import { CartService } from './../services/cart.service';
import { FoodService } from './../services/food/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from './../shared/models/Food';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food:Food;
  constructor(private Aroute:ActivatedRoute,private foodservice:FoodService, private cartservice:CartService
    ,private route:Router) {
    this.Aroute.params.subscribe(params=>{
      if (params.id){
        this.food=this.foodservice.getById(params.id)
      }
    })
   }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartservice.addToCart(this.food)
    this.route.navigateByUrl('/cart-page')
  }

}
