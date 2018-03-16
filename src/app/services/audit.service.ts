import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Audit } from '../entities/audit';

@Injectable()
export class AuditService {

  constructor(private http: HttpClient) { }

  public list(): Observable<Audit[]> {
    return this.http.get<Audit[]>(`${environment.api.uri}/audit`);
  }

}
