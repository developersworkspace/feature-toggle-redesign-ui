import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ConsumerGroup } from '../entities/consumer-group';

@Injectable()
export class ConsumerGroupService {

  constructor(private http: HttpClient) { }

  public create(project: ConsumerGroup): Observable<ConsumerGroup> {
    return this.http.post<ConsumerGroup>(`${environment.api.uri}/consumergroup`, project);
  }

  public list(): Observable<ConsumerGroup[]> {
    return this.http.get<ConsumerGroup[]>(`${environment.api.uri}/consumergroup`);
  }

}
