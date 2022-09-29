import { Component, OnInit } from "@angular/core";
import { NewsService } from "../news.service";

@Component({
  selector: "app-technews",
  templateUrl: "./technews.component.html",
  styleUrls: ["./technews.component.css"],
})
export class TechnewsComponent implements OnInit {
  constructor(private techservice: NewsService) {}
  techData: any = [];
  ngOnInit(): void {
    this.techservice.TechNews().subscribe((res) => {
      this.techData = res.articles;
    });
  }
}
