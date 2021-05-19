import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-dto',
  templateUrl: './car-dto.component.html',
  styleUrls: ['./car-dto.component.css']
})
export class CarDtoComponent implements OnInit {
  cars : Car [] = [];
  cardetail:Car;
  images : CarImage[] = [];
  dataLoaded = false;


  baseUrl=environment.baseUrl
  defaultImage = '/Images/Default.jpg';
  imageBasePath='https://localhost:44331/';
  apiUrl=environment.apiUrl+'Images/'

  constructor(
    private activatedRoute:ActivatedRoute,
    private carService:CarService,
    private carImageService:CarImageService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.getCarById(params['carId']);
      this.getCarImagesByCarId(params['carId'])
    })
  }

  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
      this.images=response.data;
    })
  }

  getCarById(carId:number){
    this.carService.getDetailCarId(carId).subscribe(response=>{
      this.cardetail=response.data
    })
  }

  getCurrentSlideClass(carImage:CarImage){
    if (carImage === this.images[0] || carImage === null) {
      return "carousel-item active"
    }
    return "carousel-item"
  }
}
