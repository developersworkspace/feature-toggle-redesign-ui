import { Component, OnInit } from '@angular/core';
import { Project } from '../entities/project';
import { ProjectService } from '../services/project.service';
import { Router } from '@angular/router';
import { ValidationMessage } from '../models/validation-message';

@Component({
  selector: 'app-project-create-route',
  templateUrl: './project-create-route.component.html',
  styleUrls: ['./project-create-route.component.css']
})
export class ProjectCreateRouteComponent implements OnInit {

  public project: Project = new Project(null, null);

  public validationMessages: ValidationMessage[] = [];

  constructor(
    private projectService: ProjectService,
    private router: Router,
  ) { }

  public ngOnInit() {

  }

  public submit(): void {
    this.projectService.create(this.project).subscribe((project: Project) => {
      this.router.navigateByUrl('/');
    }, (err) => {
      this.validationMessages = err.error;
    });
  }

}
