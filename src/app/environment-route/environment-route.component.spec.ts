import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentRouteComponent } from './environment-route.component';

describe('EnvironmentRouteComponent', () => {
  let component: EnvironmentRouteComponent;
  let fixture: ComponentFixture<EnvironmentRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
