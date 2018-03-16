import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditRouteComponent } from './audit-route.component';

describe('AuditRouteComponent', () => {
  let component: AuditRouteComponent;
  let fixture: ComponentFixture<AuditRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
