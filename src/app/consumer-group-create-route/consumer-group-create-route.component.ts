import { Component, OnInit } from '@angular/core';
import { ConsumerGroup } from '../entities/consumer-group';
import { ConsumerGroupService } from '../services/consumer-group.service';
import { Router } from '@angular/router';
import { ValidationMessage } from '../models/validation-message';

@Component({
  selector: 'app-consumer-group-create-route',
  templateUrl: './consumer-group-create-route.component.html',
  styleUrls: ['./consumer-group-create-route.component.css']
})
export class ConsumerGroupCreateRouteComponent implements OnInit {

  public consumerGroup: ConsumerGroup = new ConsumerGroup([], null, null);

  public validationMessages: ValidationMessage[] = [];

  constructor(
    private consumerGroupService: ConsumerGroupService,
    private router: Router,
  ) { }

  public ngOnInit() {

  }

  public submit(): void {
    this.consumerGroupService.create(this.consumerGroup).subscribe((project: ConsumerGroup) => {
      this.router.navigateByUrl('/consumergroup');
    }, (err) => {
      this.validationMessages = err.error;
    });
  }


}
