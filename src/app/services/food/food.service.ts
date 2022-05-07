import { Tag } from './../../shared/models/tag';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getBySearch(searchTerm:string){
    return this.getAll().filter(food=>{
      return food.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }
  getByTags(tag:string):Food[]{
  if(tag=='all'){
    return this.getAll()

  }else{
  return this.getAll().filter(food=>{
   return  food.tags.includes(tag);
  })
  }
  }
  getById(id:number):Food{
     return this.getAll().find(food=>{
       return food.id==id
     })
  }
  getAll():Food[]{
    return [
      {id:1,name:"pizza",price:20,tags:['FastFood','pizza'],favorite:true,imageUrl:"/assets/images/food-1.jpg"
      ,origins:['East-food'],cookTime:"20"},
      {id:2,name:"meat",price:20,tags:['SlowFood'],favorite:true,imageUrl:"/assets/images/food-2.jpg"
      ,origins:['East-food'],cookTime:"20"},
      {id:3,name:"burger",price:20,tags:['FastFood'],favorite:false,imageUrl:"/assets/images/food-3.jpg"
      ,origins:['East-food'],cookTime:"20"},
      {id:4,name:"fried",price:20,tags:['FastFood'],favorite:true,imageUrl:"/assets/images/food-4.jpg"
      ,origins:['East-food'],cookTime:"20"},
      {id:5,name:"soup",price:20,tags:['SlowFood','soup'],favorite:false,imageUrl:"/assets/images/food-5.jpg"
      ,origins:['East-food'],cookTime:"20"},
      {id:6,name:"pizza",price:20,tags:['FastFood','pizza'],favorite:true,imageUrl:"/assets/images/food-6.jpg"
      ,origins:['East-food'],cookTime:"20"}

      ]
  }
  getAlltags():Tag[]{
  return [
    {name:'all',count:6},
    {name:'SlowFood',count:2},
    {name:'FastFood',count:4},
    {name:'pizza',count:2},
    {name:'soup',count:1}
  ]
  }

}
