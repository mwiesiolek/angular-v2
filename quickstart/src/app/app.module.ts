// angular modules
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
// demo components, service, etc
import {AppComponent} from "./app.component";
import {HeroesComponent} from "./heroes.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {DashboardComponent} from "./dashboard.component";
import {HeroService} from "./hero.service";
import {HeroSearchComponent} from "./hearo-search.component";
// routing
import {AppRoutingModule} from "./app-routing.module";
// in memory web api
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    HeroService
  ]
})

export class AppModule {
}
