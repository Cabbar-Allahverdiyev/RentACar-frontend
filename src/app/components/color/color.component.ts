import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';

import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors:Color[]=[];
  currentColors:Color
  filterColorText:"";

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
        this.colors=response.data
    });
  }

  setCurrentColor(color:Color){
    this.currentColors=color;
  }
   
  getCurrentColorClass(color:Color){
    if(color==this.currentColors){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

  getAllColorClass(){
    let defaultColor:Color={colorId:-1,colorName:""};
    if(!this.currentColors){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

  removeCurrentColor(){
    this.filterColorText="";
    this.currentColors={colorId:-1, colorName:''}
  }

}
