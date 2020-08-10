import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { CarouselComponent } from './carousel/carousel.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { WeatherComponent } from './weather/weather.component';
import { ToDoComponent } from './to-do/to-do.component';
const routes = [
    { path: '', component: HomeComponent },
    { path: 'form', component: FormComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'carousel', component: CarouselComponent },
    { path: 'jumbotron', component: JumbotronComponent },
    { path: 'weather', component: WeatherComponent },
    { path: 'todo', component: ToDoComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map