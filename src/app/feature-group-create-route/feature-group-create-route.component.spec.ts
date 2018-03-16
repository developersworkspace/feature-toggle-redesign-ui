import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureGroupCreateRouteComponent } from './feature-group-create-route.component';

describe('FeatureGroupCreateRouteComponent', () => {
  let component: FeatureGroupCreateRouteComponent;
  let fixture: ComponentFixture<FeatureGroupCreateRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureGroupCreateRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureGroupCreateRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
