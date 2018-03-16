import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureEditRouteComponent } from './feature-edit-route.component';

describe('FeatureEditRouteComponent', () => {
  let component: FeatureEditRouteComponent;
  let fixture: ComponentFixture<FeatureEditRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureEditRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureEditRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
