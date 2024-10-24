import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getGender(name: string) {
    return firstValueFrom(
      this.httpClient.get<any>(`https://api.genderize.io/?name=${name}`)
    )
  }
  getAge(name: string) {
    return firstValueFrom(
      this.httpClient.get<any>(`https://api.agify.io/?name=${name}`)
    )
  }


  getUniversities(country: string) {
    return firstValueFrom(
      this.httpClient.get<any>(`http://universities.hipolabs.com/search?country=${country}`)
    )
  }

  
}
