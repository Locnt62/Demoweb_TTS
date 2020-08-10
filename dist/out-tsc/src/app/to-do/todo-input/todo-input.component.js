import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
let TodoInputComponent = class TodoInputComponent {
    constructor(todoService) {
        this.todoService = todoService;
    }
    ngOnInit() {
    }
    onSubmit() {
        if (this.todoContent.trim() === '') {
            return false;
        }
        this.todoService.addTodo(this.todoContent);
        this.todoContent = '';
        console.log(this.todoContent);
    }
};
TodoInputComponent = tslib_1.__decorate([
    Component({
        selector: 'app-todo-input',
        templateUrl: './todo-input.component.html',
        styleUrls: ['./todo-input.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [TodoService])
], TodoInputComponent);
export { TodoInputComponent };
//# sourceMappingURL=todo-input.component.js.map