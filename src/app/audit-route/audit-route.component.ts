import { Component, OnInit } from '@angular/core';
import { Audit } from '../entities/audit';
import { AuditService } from '../services/audit.service';

@Component({
  selector: 'app-audit-route',
  templateUrl: './audit-route.component.html',
  styleUrls: ['./audit-route.component.css']
})
export class AuditRouteComponent implements OnInit {

  public audits: Audit[] = [];

  constructor(
    private auditService: AuditService,
  ) {

  }

  public ngOnInit(): void {
    this.loadAudits();
  }

  private loadAudits(): void {
    this.auditService.list().subscribe((audits: Audit[]) => {
      this.audits = audits;
    });
  }

}
