import { Component, OnInit } from "@angular/core";
import { NewsService } from "../news.service";

@Component({
  selector: "app-top-heading",
  templateUrl: "./top-heading.component.html",
  styleUrls: ["./top-heading.component.css"],
})
export class TopHeadingComponent implements OnInit {
  constructor(private newsservice: NewsService) {}

  topHeadingDisplay: any = [];
  ngOnInit(): void {
    this.newsservice.topHeading().subscribe((result) => {
      this.topHeadingDisplay = result.articles;
    });
  }
}
