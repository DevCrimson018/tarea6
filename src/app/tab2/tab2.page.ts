import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  name: string = ""
  result: any 
  constructor(
    private apiService: ApiService
  ) {}

  getAge() {
    this.apiService.getAge(this.name).then(result => {
      this.result = result
    })
  }

}
