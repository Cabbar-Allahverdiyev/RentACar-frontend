import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';

import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  singleCar:Car;
  colors:Color[]=[];
  brands:Brand[]=[];
  dataLoaded = false;
  filterText=""; 
  colorFilterText="";
  brandFilterText="";
  
  

  images: CarImage[];
  imageUrl = environment.baseUrl;
  closeResult = '';

  constructor(
    private carService: CarService,
    private toastrService:ToastrService,
    private activatedRoot: ActivatedRoute,
    
  ) {}

  ngOnInit(): void {
    this.activatedRoot.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarDetailsByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarDetailsByColorId(params['colorId']);
      } else if(params['carId']){
        this.getCarById(params['carId'])
      }
       else {
        this.getCarsDetail();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsDetail() {
    this.carService.getCarsDetail().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByBrandId(brandId: number) {
    this.carService.getCarDetailsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByColorId(colorId: number) {
    this.carService.getCarDetailByColorId(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarById(carId:number){
    this.carService.getDetailCarId(carId).subscribe(response=>{
      this.singleCar=response.data
    })
  }

 

  
}
