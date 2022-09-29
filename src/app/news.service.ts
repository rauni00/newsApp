import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  constructor(private _http: HttpClient) {}
  // headline url
  private NewsApiUrl =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=78552d713a61443596775917009acff1";

  //technologyUrl
  techUrl =
    "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=78552d713a61443596775917009acff1";

  //businessUrl
  businessUrl =
    "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=78552d713a61443596775917009acff1";

  // entertainmentUrl
  // entertainmentUrl="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=78552d713a61443596775917009acff1"
  entertainmentUrl =
    "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=78552d713a61443596775917009acff1";

  topHeading(): Observable<any> {
    return this._http.get(this.NewsApiUrl);
  }
  TechNews(): Observable<any> {
    return this._http.get(this.techUrl);
  }
  businessNews(): Observable<any> {
    return this._http.get(this.businessUrl);
  }
  entertainmentNews(): Observable<any> {
    return this._http.get(this.entertainmentUrl);
  }
}
