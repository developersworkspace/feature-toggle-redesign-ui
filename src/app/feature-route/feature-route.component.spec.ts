import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureRouteComponent } from './feature-route.component';

describe('FeatureRouteComponent', () => {
  let component: FeatureRouteComponent;
  let fixture: ComponentFixture<FeatureRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
