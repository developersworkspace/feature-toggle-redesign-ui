import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerGroupRouteComponent } from './consumer-group-route.component';

describe('ConsumerGroupRouteComponent', () => {
  let component: ConsumerGroupRouteComponent;
  let fixture: ComponentFixture<ConsumerGroupRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerGroupRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerGroupRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
