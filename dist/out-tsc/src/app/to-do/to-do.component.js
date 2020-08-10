import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';
import { map } from 'rxjs/operators';
let ToDoComponent = class ToDoComponent {
    constructor(todoService) {
        this.todoService = todoService;
    }
    ngOnInit() {
        this.todoService.fetchFromLocalStorage();
        this.hasTodo$ = this.todoService.length$.pipe(map(length => length > 0));
    }
};
ToDoComponent = tslib_1.__decorate([
    Component({
        selector: 'app-to-do',
        templateUrl: './to-do.component.html',
        styleUrls: ['./to-do.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [TodoService])
], ToDoComponent);
export { ToDoComponent };
//# sourceMappingURL=to-do.component.js.map