import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherSevice } from './weather/weather.service';
import { ToDoComponent } from './to-do/to-do.component';
import { HeaderComponent } from './to-do/header/header.component';
import { FooterComponent } from './to-do/footer/footer.component';
import { TodoInputComponent } from './to-do/todo-input/todo-input.component';
import { TodoItemComponent } from './to-do/todo-item/todo-item.component';
import { TodoListComponent } from './to-do/todo-list/todo-list.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            FormComponent,
            PricingComponent,
            HomeComponent,
            CarouselComponent,
            JumbotronComponent,
            WeatherComponent,
            ToDoComponent,
            HeaderComponent,
            FooterComponent,
            TodoInputComponent,
            TodoItemComponent,
            TodoListComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            FormsModule,
            HttpClientModule
        ],
        providers: [WeatherSevice],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map