import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public selectedSort = 'Popularność';
  public allKitchens = ['Wszystkie typy kuchni', 'Włoskie', 'Chińskie', 'Pizza', 'Amerykańskie', 'Polskie'];
  public selectedKitchen = 'Wszystkie typy kuchni';
  constructor() { }

  ngOnInit() {
  }

}
