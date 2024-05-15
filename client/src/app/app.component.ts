import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  constructor(private http: HttpClient)
  {
    this.http.get("TUO_URL/simple_json")
    .subscribe(
      (data) => this.data = data
    )
  }
}
