import { Component, OnInit } from '@angular/core';
import { Environment } from '../entities/environment';
import { EnvironmentService } from '../services/environment.service';

@Component({
  selector: 'app-environment-route',
  templateUrl: './environment-route.component.html',
  styleUrls: ['./environment-route.component.css']
})
export class EnvironmentRouteComponent implements OnInit {

  public environments: Environment[] = [];

  public filterQuery: string = null;

  constructor(
    private environmentService: EnvironmentService,
  ) {

  }

  public ngOnInit(): void {
    this.loadEnvironments();
  }

  private loadEnvironments(): void {
    this.environmentService.list().subscribe((environments: Environment[]) => {
      this.environments = environments;
    });
  }

}
