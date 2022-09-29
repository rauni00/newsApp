import { NewsService } from "./../news.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-businessNews",
  templateUrl: "./businessNews.component.html",
  styleUrls: ["./businessNews.component.css"],
})
export class BusinessesComponent implements OnInit {
  constructor(private _service: NewsService) {}
  BusinessData: any = [];
  ngOnInit(): void {
    this._service.businessNews().subscribe((res) => {
      this.BusinessData = res.articles;
      
    });
  }
}
