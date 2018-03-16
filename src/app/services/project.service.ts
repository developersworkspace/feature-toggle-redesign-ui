import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Project } from '../entities/project';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) { }

  public create(project: Project): Observable<Project> {
    return this.http.post<Project>(`${environment.api.uri}/project`, project);
  }

  public list(): Observable<Project[]> {
    return this.http.get<Project[]>(`${environment.api.uri}/project`);
  }

}
