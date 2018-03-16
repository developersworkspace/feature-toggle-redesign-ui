import { Component, OnInit } from '@angular/core';
import { Feature } from '../entities/feature';
import { ValidationMessage } from '../models/validation-message';
import { FeatureService } from '../services/feature.service';
import { Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { Project } from '../entities/project';
import { ProjectView } from '../entity-views/project-view';

@Component({
  selector: 'app-feature-create-route',
  templateUrl: './feature-create-route.component.html',
  styleUrls: ['./feature-create-route.component.css']
})
export class FeatureCreateRouteComponent implements OnInit {

  public feature: Feature = new Feature([], null, null, null, null, null);

  public projects: ProjectView[] = [];

  public validationMessages: ValidationMessage[] = [];

  constructor(
    private featureService: FeatureService,
    private projectService: ProjectService,
    private router: Router,
  ) { }

  public ngOnInit() {
    this.loadProjects();
  }

  private loadProjects(): void {
    this.projectService.list().subscribe((projects: Project[]) => {
      this.projects = projects.map((x) => new ProjectView(x.key, x.name));
    });
  }

  public submit(): void {
    this.featureService.create(this.feature).subscribe((feature: Feature) => {
      this.router.navigateByUrl('/feature');
    }, (err) => {
      this.validationMessages = err.error;
    });
  }

}
