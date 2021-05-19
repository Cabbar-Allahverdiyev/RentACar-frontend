import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { environment } from 'src/environments/environment';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath =environment.apiUrl + 'cars/getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrandId(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = environment.apiUrl + 'cars/getcarsbybranid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarDetailsByBrandId(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = environment.apiUrl + 'cars/getcardetailsbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailByColorId(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = environment.apiUrl + 'cars/getcardetailsbycolorid?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsDetail(): Observable<ListResponseModel<Car>> {
    let newPath = environment.apiUrl + 'cars/getcardetail';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsDetailByBrandName(brandName:string):Observable<ListResponseModel<Car>>{
    let newPath=environment.apiUrl+'cars/getcardetailbybrandname?brandName='+brandName;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsDetailByColorName(colorName:string):Observable<ListResponseModel<Car>>{
    let newPath=environment.apiUrl+'cars/getcardetailbycolorname?colorName='+colorName;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

 

  getDetailCarId(carId:number):Observable<SingleResponseModel<Car>>{
    let newPath=environment.apiUrl+'cars/getdetail?carId='+carId;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
  }

 

  
}
