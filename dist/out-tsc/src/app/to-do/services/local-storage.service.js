import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let LocalStorageService = class LocalStorageService {
    constructor() {
        this.storage = window.localStorage;
    }
    getValue(key) {
        const obj = JSON.parse(this.storage[key] || null);
        return obj || null;
    }
    setObject(key, value) {
        if (!value) {
            return;
        }
        this.storage[key] = JSON.stringify(value);
    }
};
LocalStorageService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], LocalStorageService);
export { LocalStorageService };
//# sourceMappingURL=local-storage.service.js.map