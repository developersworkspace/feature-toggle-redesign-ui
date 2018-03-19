import { Component, OnInit } from '@angular/core';
import { ConsumerGroup } from '../entities/consumer-group';
import { ConsumerGroupService } from '../services/consumer-group.service';

@Component({
  selector: 'app-consumer-group-route',
  templateUrl: './consumer-group-route.component.html',
  styleUrls: ['./consumer-group-route.component.css']
})
export class ConsumerGroupRouteComponent implements OnInit {

  public consumerGroups: ConsumerGroup[] = [];

  public filterQuery: string = null;

  constructor(
    private consumerGroupService: ConsumerGroupService,
  ) {

  }

  public ngOnInit(): void {
    this.loadConsumerGroup();
  }

  private loadConsumerGroup(): void {
    this.consumerGroupService.list().subscribe((consumerGroups: ConsumerGroup[]) => {
      this.consumerGroups = consumerGroups;
    });
  }

}
