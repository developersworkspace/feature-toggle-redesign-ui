import { Component, OnInit } from '@angular/core';
import { Project } from '../entities/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-route',
  templateUrl: './project-route.component.html',
  styleUrls: ['./project-route.component.css']
})
export class ProjectRouteComponent implements OnInit {

  public filterQuery: string = null;

  public projects: Project[] = [];

  constructor(
    private projectService: ProjectService,
  ) {

  }

  public ngOnInit(): void {
    this.loadProjects();
  }

  private loadProjects(): void {
    this.projectService.list().subscribe((projects: Project[]) => {
      this.projects = projects;
    });
  }

}
