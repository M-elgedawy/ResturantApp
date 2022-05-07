import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm:string;
  constructor(private Aroute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
      this.Aroute.params.subscribe(params=>{
        if(params.searchTerm){
          this.searchTerm=params.searchTerm
        }
      })
  }
  search(){
    if(this.searchTerm){
   this.route.navigateByUrl('/search/'+this.searchTerm)
    }
  }

}
