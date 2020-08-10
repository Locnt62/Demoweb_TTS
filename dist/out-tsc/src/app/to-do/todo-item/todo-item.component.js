import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let TodoItemComponent = class TodoItemComponent {
    constructor() {
        this.isHovered = false;
        this.isEditing = false;
    }
    ngOnInit() {
    }
};
TodoItemComponent = tslib_1.__decorate([
    Component({
        selector: 'app-todo-item',
        templateUrl: './todo-item.component.html',
        styleUrls: ['./todo-item.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], TodoItemComponent);
export { TodoItemComponent };
//# sourceMappingURL=todo-item.component.js.map