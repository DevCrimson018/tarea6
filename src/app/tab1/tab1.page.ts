import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  name:string = ""
  result: any

  constructor(
    private apiService: ApiService
  ) {}


  getGender() {
    this.apiService.getGender(this.name).then(result => {
      this.result = result
    })
  }
}
