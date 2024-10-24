import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  country: string = ""
  results: any[] = []
  constructor(
    private apiService: ApiService
  ) {}

  getUniversity() {
    this.apiService.getUniversities(this.country).then(results => {
      this.results = results
    })
  }

}
