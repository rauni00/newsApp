import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NewsService } from "./news.service";
import { TopHeadingComponent } from "./top-heading/top-heading.component";
import { HttpClientModule } from "@angular/common/http";
import { TechnewsComponent } from "./technews/technews.component";
import { BusinessesComponent } from "./businessnews/businessnews-component";
import { EntertainmentNewsComponent } from "./entertainment-news/entertainment-news.component";
// for HttpClient import:
import { LoadingBarHttpClientModule } from "@ngx-loading-bar/http-client";
@NgModule({
  declarations: [
    AppComponent,
    TopHeadingComponent,
    TechnewsComponent,
    BusinessesComponent,
    EntertainmentNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
  ],
  providers: [NewsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
