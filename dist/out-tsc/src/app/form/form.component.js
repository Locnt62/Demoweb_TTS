import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let FormComponent = class FormComponent {
    constructor() {
        this.form = {
            tenKhachHang: '',
            soDienThoai: '',
            email: '',
            diaChiKhachHang: ''
        };
    }
    ngOnInit() {
    }
    onSubmitForm(form) {
        console.log(form);
    }
};
FormComponent = tslib_1.__decorate([
    Component({
        selector: 'app-form',
        templateUrl: './form.component.html',
        styleUrls: ['./form.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], FormComponent);
export { FormComponent };
//# sourceMappingURL=form.component.js.map