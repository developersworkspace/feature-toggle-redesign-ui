import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerGroupCreateRouteComponent } from './consumer-group-create-route.component';

describe('ConsumerGroupCreateRouteComponent', () => {
  let component: ConsumerGroupCreateRouteComponent;
  let fixture: ComponentFixture<ConsumerGroupCreateRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerGroupCreateRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerGroupCreateRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
