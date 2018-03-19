import { Component, OnInit } from '@angular/core';
import { ConsumerGroup } from '../entities/consumer-group';
import { ValidationMessage } from '../models/validation-message';
import { ConsumerGroupService } from '../services/consumer-group.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-consumer-group-edit-route',
  templateUrl: './consumer-group-edit-route.component.html',
  styleUrls: ['./consumer-group-edit-route.component.css']
})
export class ConsumerGroupEditRouteComponent implements OnInit {

  public consumerGroup: ConsumerGroup = new ConsumerGroup([], null, null);

  public newConsumer: string = null;

  public validationMessages: ValidationMessage[] = [];

   constructor(
    private activatedRoute: ActivatedRoute,
    private consumerGroupService: ConsumerGroupService,
  ) { }

  public ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params): void => {
      const key: string = params['key'];

      this.loadConsumerGroup(key);
    });
  }

  public addConsumer(): void {
    this.consumerGroup.consumers.push(this.newConsumer);

    this.newConsumer = null;

    this.submit();
  }

  public loadConsumerGroup(key: string): void {
    this.consumerGroupService.find(key).subscribe((consumerGroup: ConsumerGroup) => {
      this.consumerGroup = consumerGroup;
    });
  }

  public removeConsumer(consumer: string): void {
    const index: number = this.consumerGroup.consumers.indexOf(consumer);

    this.consumerGroup.consumers.splice(index, 1);

    this.submit();
  }

  public submit(): void {
    this.consumerGroupService.update(this.consumerGroup).subscribe((consumerGroup: ConsumerGroup) => {

    }, (err) => {
      this.validationMessages = err.error;
    });
  }

}
