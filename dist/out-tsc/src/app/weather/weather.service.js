import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let WeatherSevice = class WeatherSevice {
    constructor(http) {
        this.http = http;
    }
    getAll(cityName) {
        const API = 'https://api.openweathermap.org/data/2.5/weather?appid=b18d92e2b908f4b447d3c48791c19a24&units=metric&q=' + cityName;
        return this.http.get(API);
    }
};
WeatherSevice = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], WeatherSevice);
export { WeatherSevice };
//# sourceMappingURL=weather.service.js.map