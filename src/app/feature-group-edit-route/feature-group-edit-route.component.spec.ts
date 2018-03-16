import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureGroupEditRouteComponent } from './feature-group-edit-route.component';

describe('FeatureGroupEditRouteComponent', () => {
  let component: FeatureGroupEditRouteComponent;
  let fixture: ComponentFixture<FeatureGroupEditRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureGroupEditRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureGroupEditRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
