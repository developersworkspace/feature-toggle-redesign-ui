import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureGroupRouteComponent } from './feature-group-route.component';

describe('FeatureGroupRouteComponent', () => {
  let component: FeatureGroupRouteComponent;
  let fixture: ComponentFixture<FeatureGroupRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureGroupRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureGroupRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
