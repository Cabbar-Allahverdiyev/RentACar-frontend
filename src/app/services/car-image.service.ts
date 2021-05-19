import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';
import { ResponseModel } from '../models/responseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

 

  constructor(private httpClient:HttpClient) { }

  getCarImages():Observable<ListResponseModel<CarImage>>{
    let newPath=environment.apiUrl+"carimages/getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath=environment.apiUrl+"carimages/getbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getImage(imagePath:string){
    let newPath=environment.apiUrl+imagePath;
    return newPath;
  }

  uploadImage(image: File,carId:number):Observable<any> {

    console.log(image.name)
    console.log(carId)
    const formData:FormData = new FormData();

    formData.append('Image', image);
    formData.append('CarId',carId.toString());

    let newPath=environment.apiUrl+'carImages/add';
    return this.httpClient.post<ResponseModel>(newPath,formData,{
      reportProgress: true,
      responseType: 'json',
    });
    
  }

 
}
