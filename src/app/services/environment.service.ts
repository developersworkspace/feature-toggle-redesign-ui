import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Environment } from '../entities/environment';

@Injectable()
export class EnvironmentService {

  constructor(private http: HttpClient) { }

  public create(environmentCreate: Environment): Observable<Environment> {
    return this.http.post<Environment>(`${environment.api.uri}/environment`, environmentCreate);
  }

  public list(): Observable<Environment[]> {
    return this.http.get<Environment[]>(`${environment.api.uri}/environment`);
  }

}
