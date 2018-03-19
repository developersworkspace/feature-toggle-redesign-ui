import { Component, OnInit } from '@angular/core';
import { Feature } from '../entities/feature';
import { FeatureService } from '../services/feature.service';
import { EnvironmentView } from '../entity-views/environment';
import { ValidationMessage } from '../models/validation-message';

@Component({
  selector: 'app-feature-route',
  templateUrl: './feature-route.component.html',
  styleUrls: ['./feature-route.component.css']
})
export class FeatureRouteComponent implements OnInit {

  public defaultEnvironmentKey: string = null;

  public features: Feature[] = [];

  public filterQuery: string = null;

  public toggleSelectedEnvironment: EnvironmentView = null;

  public toggleSelectedFeature: Feature = null;

  public validationMessages: ValidationMessage[] = [];

  constructor(
    private featureService: FeatureService,
  ) {

  }

  public ngOnInit(): void {
    this.defaultEnvironmentKey = localStorage.getItem('defaultEnvironment');

    this.loadFeatures();
  }

  public cancelToggle(): void {
    this.toggleSelectedEnvironment = null;
    this.toggleSelectedFeature = null;
  }

  public submitToggle(): void {
    this.toggleSelectedEnvironment.enabled = !this.toggleSelectedEnvironment.enabled;

    this.featureService.update(this.toggleSelectedFeature).subscribe((feature: Feature) => {
      this.toggleSelectedEnvironment = null;
      this.toggleSelectedFeature = null;
    }, (err) => {
      this.validationMessages = err.error;
    });
  }

  public toggle(feature: Feature, environment: EnvironmentView): void {
    this.toggleSelectedEnvironment = environment;
    this.toggleSelectedFeature = feature;
  }

  private loadFeatures(): void {
    this.featureService.list().subscribe((features: Feature[]) => {
      this.features = features;
    });
  }

}
