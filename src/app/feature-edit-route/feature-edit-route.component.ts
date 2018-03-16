import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FeatureService } from '../services/feature.service';
import { Feature } from '../entities/feature';
import { ProjectView } from '../entity-views/project-view';
import { ConsumerGroupView } from '../entity-views/consumer-group';
import { EnvironmentView } from '../entity-views/environment';
import { Option } from '../value-objects/option';
import { ValidationMessage } from '../models/validation-message';

@Component({
  selector: 'app-feature-edit-route',
  templateUrl: './feature-edit-route.component.html',
  styleUrls: ['./feature-edit-route.component.css']
})
export class FeatureEditRouteComponent implements OnInit {

  public consumerGroups: ConsumerGroupView[] = [
    new ConsumerGroupView([], 'a', 'aaa')
  ];

  public defaultEnvironmentKey: string = null;

  public feature: Feature = new Feature([], null, null, null, new ProjectView(null, null), null);

  public newConsumerGroup: ConsumerGroupView = new ConsumerGroupView([], null, null);

  public newOption: Option = new Option(null, null, null);

  public validationMessages: ValidationMessage[] = [];

   constructor(
    private activatedRoute: ActivatedRoute,
    private featureService: FeatureService,
    private router: Router,
  ) { }

  public ngOnInit() {
    this.defaultEnvironmentKey = localStorage.getItem('defaultEnvironment');

    this.activatedRoute.queryParams.subscribe((params: Params): void => {
      const key: string = params['key'];
      this.loadFeature(key);
    });
  }

  public addConsumerGroup(environment: EnvironmentView): void {
    environment.consumerGroups.push(this.newConsumerGroup);
    this.newConsumerGroup = new ConsumerGroupView([], null, null);

    this.submit();
  }

  public removeConsumerGroup(consumerGroup: ConsumerGroupView, environment: EnvironmentView): void {
    // TODO

    this.submit();
  }

  public addOption(environment: EnvironmentView): void {
    environment.options.push(this.newOption);
    this.newOption = new Option(null, null, null);

    this.submit();
  }

  public removeOption(environment: EnvironmentView, option: Option): void {
    // TODO

    this.submit();
  }

  private loadFeature(featureKey: string): void {
    this.featureService.find(featureKey).subscribe((feature: Feature) => {
      this.feature = feature;
    });
  }

  private submit(): void {
    this.featureService.update(this.feature).subscribe((feature: Feature) => {
      // this.router.navigateByUrl('/feature');
    }, (err) => {
      this.validationMessages = err.error;
    });
  }

}
