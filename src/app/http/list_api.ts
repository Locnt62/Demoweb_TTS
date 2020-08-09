import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class SearchHttpService {
    constructor(private http: HttpClient) { }
    //get all sinh vien
    getallsv(): Observable<any> {
        return this.http.get('http://127.0.0.1:3000/student');
    }
}


