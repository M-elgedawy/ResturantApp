import { Tag } from './../shared/models/tag';
import { FoodService } from './../services/food/food.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags:Tag[]=[];
  @Input()   tagsNames:string[];

  constructor(private foodservice:FoodService) { }

  ngOnInit(): void {
  if(!this.tagsNames){
    this.tags=this.foodservice.getAlltags();
  }



  }

}
