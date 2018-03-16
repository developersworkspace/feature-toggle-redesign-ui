import { Component, OnInit } from '@angular/core';
import { Environment } from '../entities/environment';
import { EnvironmentService } from '../services/environment.service';
import { Router } from '@angular/router';
import { ValidationMessage } from '../models/validation-message';

@Component({
  selector: 'app-environment-create-route',
  templateUrl: './environment-create-route.component.html',
  styleUrls: ['./environment-create-route.component.css']
})
export class EnvironmentCreateRouteComponent implements OnInit {

  public environment: Environment = new Environment(null, null);

  public validationMessages: ValidationMessage[] = [];

  constructor(
    private environmentService: EnvironmentService,
    private router: Router,
  ) { }

  public ngOnInit() {

  }

  public submit(): void {
    this.environmentService.create(this.environment).subscribe((environment: Environment) => {
      this.router.navigateByUrl('/environment');
    }, (err) => {
      this.validationMessages = JSON.parse(err._body);
    });
  }

}
