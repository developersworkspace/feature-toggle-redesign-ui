import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreateRouteComponent } from './project-create-route.component';

describe('ProjectCreateRouteComponent', () => {
  let component: ProjectCreateRouteComponent;
  let fixture: ComponentFixture<ProjectCreateRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCreateRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCreateRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
