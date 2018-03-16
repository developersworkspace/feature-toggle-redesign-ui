import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentCreateRouteComponent } from './environment-create-route.component';

describe('EnvironmentCreateRouteComponent', () => {
  let component: EnvironmentCreateRouteComponent;
  let fixture: ComponentFixture<EnvironmentCreateRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentCreateRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentCreateRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
