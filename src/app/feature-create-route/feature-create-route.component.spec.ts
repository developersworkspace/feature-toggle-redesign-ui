import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureCreateRouteComponent } from './feature-create-route.component';

describe('FeatureCreateRouteComponent', () => {
  let component: FeatureCreateRouteComponent;
  let fixture: ComponentFixture<FeatureCreateRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureCreateRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureCreateRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
