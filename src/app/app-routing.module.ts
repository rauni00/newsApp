import { EntertainmentNewsComponent } from "./entertainment-news/entertainment-news.component";
import { BusinessesComponent } from "./businessnews/businessnews-component";
import { TechnewsComponent } from "./technews/technews.component";
import { TopHeadingComponent } from "./top-heading/top-heading.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: TopHeadingComponent }, //home
  { path: "tech", component: TechnewsComponent }, //home
  { path: "business", component: BusinessesComponent }, //home
  { path: "entertainment", component: EntertainmentNewsComponent }, //home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
