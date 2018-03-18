import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerGroupEditRouteComponent } from './consumer-group-edit-route.component';

describe('ConsumerGroupEditRouteComponent', () => {
  let component: ConsumerGroupEditRouteComponent;
  let fixture: ComponentFixture<ConsumerGroupEditRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerGroupEditRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerGroupEditRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
