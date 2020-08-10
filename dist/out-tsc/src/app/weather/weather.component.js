import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { WeatherSevice } from './weather.service';
let WeatherComponent = class WeatherComponent {
    constructor(weatherService) {
        this.weatherService = weatherService;
        this.txtCityName = '';
        this.cityName = '';
    }
    ngOnInit() {
    }
    getWeather() {
        this.weatherService.getAll(this.txtCityName).subscribe(data => {
            this.temp = data.main.temp;
            this.pressure = data.main.pressure;
            this.humidity = data.main.humidity;
            this.windSpeed = data.wind.speed;
            this.country = data.sys.country;
            this.description = data.weather[0].description;
            this.tempMax = data.main.temp_max;
            this.tempMin = data.main.temp_min;
            this.cityName = this.txtCityName;
        }, error => {
            alert("Bạn điền tên thành phố chưa chính xác");
        });
    }
};
WeatherComponent = tslib_1.__decorate([
    Component({
        selector: 'app-weather',
        templateUrl: './weather.component.html',
        styleUrls: ['./weather.component.css'],
        providers: [WeatherSevice]
    }),
    tslib_1.__metadata("design:paramtypes", [WeatherSevice])
], WeatherComponent);
export { WeatherComponent };
//# sourceMappingURL=weather.component.js.map