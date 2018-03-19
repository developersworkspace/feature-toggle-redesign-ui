import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ConsumerGroup } from '../entities/consumer-group';

@Injectable()
export class ConsumerGroupService {

  constructor(private http: HttpClient) { }

  public create(consumergroup: ConsumerGroup): Observable<ConsumerGroup> {
    return this.http.post<ConsumerGroup>(`${environment.api.uri}/consumergroup`, consumergroup);
  }

  public find(key: string): Observable<ConsumerGroup> {
    return this.http.get<ConsumerGroup>(`${environment.api.uri}/consumergroup?key=${key}`);
  }

  public list(): Observable<ConsumerGroup[]> {
    return this.http.get<ConsumerGroup[]>(`${environment.api.uri}/consumergroup`);
  }

  public update(consumergroup: ConsumerGroup): Observable<ConsumerGroup> {
    return this.http.put<ConsumerGroup>(`${environment.api.uri}/consumergroup`, consumergroup);
  }

}
