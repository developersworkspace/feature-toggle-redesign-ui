import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Feature } from '../entities/feature';

@Injectable()
export class FeatureService {

  constructor(private http: HttpClient) { }

  public create(feature: Feature): Observable<Feature> {
    return this.http.post<Feature>(`${environment.api.uri}/feature`, feature);
  }

  public find(featureKey: string): Observable<Feature> {
    return this.http.get<Feature[]>(`${environment.api.uri}/feature`).map((features: Feature[]) => {
      return features.find((feature) => feature.key === featureKey);
    });
  }

  public list(): Observable<Feature[]> {
    return this.http.get<Feature[]>(`${environment.api.uri}/feature`);
  }

  public update(feature: Feature): Observable<Feature> {
    return this.http.put<Feature>(`${environment.api.uri}/feature`, feature);
  }

}
