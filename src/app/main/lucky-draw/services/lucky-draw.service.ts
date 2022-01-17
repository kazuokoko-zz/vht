import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class LuckyDrawService {
  constructor(private httpClient: HttpClient) {}

  getData(employeeCode: any): Observable<any> {
    const params = new HttpParams({
      fromString: `empcode=${employeeCode}`,
    });
    return this.httpClient.post<any>(
      environment.apiUrl + `?empcode=${employeeCode}`,
      {}
    );
  }
}
