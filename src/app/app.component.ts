import { Component, OnInit } from '@angular/core';
import { Environment } from './entities/environment';
import { EnvironmentService } from './services/environment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  public environment: Environment = null;

  public environments: Environment[] = [];

  constructor(
    private environmentService: EnvironmentService,
  ) {

  }

  public ngOnInit(): void {
    this.loadEnvironments();
  }

  public setDefaultEnvironment(): void {
    localStorage.setItem('defaultEnvironment', this.environment.key);
    window.location.reload();
  }

  private loadEnvironments(): void {
    this.environmentService.list().subscribe((environments: Environment[]) => {
      this.environments = environments;

      const defaultEnvironment: Environment = this.environments.find((environment: Environment) =>
      environment.key === localStorage.getItem('defaultEnvironment'));

      this.environment = defaultEnvironment;
    });
  }

}
