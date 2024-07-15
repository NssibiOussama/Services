import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CvService {

    private apiUrl = 'http://127.0.0.1:5000/'; // Update the API URL here

    constructor(private http: HttpClient) { }

    search(keywords: string): Observable<any> {
        const body = {
            keywords: keywords
        };

        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        return this.http.post(this.apiUrl + "search", body, { headers: headers });
    }
    searchByPosition(keywords: string): Observable<any> {
        const body = {
            keywords: keywords
        };

        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        return this.http.post(this.apiUrl + "searchbyposition", body, { headers: headers });
    }
}
