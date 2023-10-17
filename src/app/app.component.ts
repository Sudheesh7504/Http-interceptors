import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'interceptors';

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.post('https://fakestoreapi.com/products', { name: "ms" })
      .subscribe((data) => {
        console.log(data)
      })

  }
}
