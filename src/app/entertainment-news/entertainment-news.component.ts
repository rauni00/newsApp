import { NewsService } from "./../news.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-entertainment-news",
  templateUrl: "./entertainment-news.component.html",
  styleUrls: ["./entertainment-news.component.css"],
})
export class EntertainmentNewsComponent implements OnInit {
  constructor(private _service: NewsService) {}
  entertainment: any;
  ngOnInit(): void {
    this._service.entertainmentNews().subscribe((res) => {
      this.entertainment = res.articles;
    });
  }
}
