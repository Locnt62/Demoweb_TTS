import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Filter } from '../models/filtering.model';
let FooterComponent = class FooterComponent {
    constructor() {
        this.filterButtons = [
            { type: Filter.All, label: 'All', isActive: true },
            { type: Filter.Active, label: 'Active', isActive: false },
            { type: Filter.Completed, label: 'Completed', isActive: false },
        ];
    }
    ngOnInit() {
    }
};
FooterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-footer',
        templateUrl: './footer.component.html',
        styleUrls: ['./footer.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], FooterComponent);
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map