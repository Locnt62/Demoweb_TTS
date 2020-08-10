import * as tslib_1 from "tslib";
var TodoService_1;
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { BehaviorSubject } from 'rxjs';
import { Filter } from '../models/filtering.model';
import { LocalStorageService } from './local-storage.service';
let TodoService = TodoService_1 = class TodoService {
    constructor(storageSevices) {
        this.storageSevices = storageSevices;
        this.lengthSubject = new BehaviorSubject(0);
        this.displayTodoSubject = new BehaviorSubject([]);
        this.currentFilter = Filter.All;
        this.todos$ = this.displayTodoSubject.asObservable();
        this.length$ = this.lengthSubject.asObservable();
    }
    fetchFromLocalStorage() {
        this.todos = this.storageSevices.getValue(TodoService_1.TodoStorageKey) || [];
        this.filteredTodos = [...this.todos.map(todo => (Object.assign({}, todo)))];
        this.updateTodosData();
    }
    updateTodosData() {
        this.displayTodoSubject.next(this.filteredTodos);
        this.lengthSubject.next(this.todos.length);
        this.updateTodosData();
    }
    updateToLocalStorage() {
        this.storageSevices.setObject(TodoService_1.TodoStorageKey, this.todos);
        this.filterTodos(this.currentFilter, false);
        this.updateTodosData();
    }
    filterTodos(filter, isFiltering = true) {
        this.currentFilter = filter;
        switch (filter) {
            case Filter.Active:
                this.filteredTodos = this.todos.filter(todo => !todo.isCompleted);
                break;
            case Filter.Completed:
                this.filteredTodos = this.todos.filter(todo => todo.isCompleted);
                break;
            case Filter.All:
                this.filteredTodos = [...this.todos.map(todo => (Object.assign({}, todo)))];
                break;
        }
        if (isFiltering) {
            this.updateTodosData();
        }
    }
    addTodo(content) {
        const date = new Date(Date.now()).getTime();
        const newTodo = new Todo(date, content, null);
        this.todos.unshift(newTodo);
    }
};
TodoService.TodoStorageKey = 'todos';
TodoService = TodoService_1 = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [LocalStorageService])
], TodoService);
export { TodoService };
//# sourceMappingURL=todo.service.js.map