import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'angular2-datatable';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProjectRouteComponent } from './project-route/project-route.component';
import { DataFilterPipe } from './data-filter.pipe';
import { ProjectService } from './services/project.service';
import { ProjectCreateRouteComponent } from './project-create-route/project-create-route.component';
import { EnvironmentCreateRouteComponent } from './environment-create-route/environment-create-route.component';
import { EnvironmentRouteComponent } from './environment-route/environment-route.component';
import { EnvironmentService } from './services/environment.service';
import { AuditRouteComponent } from './audit-route/audit-route.component';
import { AuditService } from './services/audit.service';
import { FeatureGroupCreateRouteComponent } from './feature-group-create-route/feature-group-create-route.component';
import { FeatureGroupRouteComponent } from './feature-group-route/feature-group-route.component';
import { FeatureGroupEditRouteComponent } from './feature-group-edit-route/feature-group-edit-route.component';
import { FeatureRouteComponent } from './feature-route/feature-route.component';
import { FeatureCreateRouteComponent } from './feature-create-route/feature-create-route.component';
import { FeatureEditRouteComponent } from './feature-edit-route/feature-edit-route.component';
import { FeatureService } from './services/feature.service';
import { ConsumerGroupService } from './services/consumer-group.service';
import { ConsumerGroupRouteComponent } from './consumer-group-route/consumer-group-route.component';

const routes = [
  {
    component: ProjectRouteComponent,
    path: '',
    // canActivate: [
    //   AuthGuard
    // ]
  },
  {
    component: ProjectRouteComponent,
    path: 'project',
    // canActivate: [
    //   AuthGuard
    // ]
  },
  // {
  //   component: CallbackComponent,
  //   path: 'callback'
  // },
  {
    component: ProjectCreateRouteComponent,
    path: 'project/create',
    // canActivate: [
    //   AuthGuard
    // ]
  },
  {
    component: FeatureRouteComponent,
    path: 'feature',
    // canActivate: [
    //   AuthGuard
    // ]
  },
  {
    component: FeatureCreateRouteComponent,
    path: 'feature/create',
    // canActivate: [
    //   AuthGuard
    // ]
  },
  {
    component: FeatureEditRouteComponent,
    path: 'feature/edit',
    // canActivate: [
    //   AuthGuard
    // ]
  },
  {
    component: ConsumerGroupRouteComponent,
    path: 'consumergroup',
    // canActivate: [
    //   AuthGuard
    // ]
  },
  // {
  //   component: GroupsCreateRouteComponent,
  //   path: 'groups/create',
  //   canActivate: [
  //     AuthGuard
  //   ]
  // },
  // {
  //   component: GroupsEditRouteComponent,
  //   path: 'groups/edit',
  //   canActivate: [
  //     AuthGuard
  //   ]
  // },
  {
    component: AuditRouteComponent,
    path: 'audit',
    // canActivate: [
    //   AuthGuard
    // ]
  },
  {
    component: FeatureGroupRouteComponent,
    path: 'featuregroup',
    // canActivate: [
    //   AuthGuard
    // ]
  },
  {
    component: FeatureGroupCreateRouteComponent,
    path: 'featuregroup/create',
    // canActivate: [
    //   AuthGuard
    // ]
  },
  {
    component: FeatureGroupEditRouteComponent,
    path: 'featuregroup/edit',
    // canActivate: [
    //   AuthGuard
    // ]
  },
  {
    component: EnvironmentRouteComponent,
    path: 'environment',
    // canActivate: [
    //   AuthGuard
    // ]
  },
  {
    component: EnvironmentCreateRouteComponent,
    path: 'environment/create',
    // canActivate: [
    //   AuthGuard
    // ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectRouteComponent,
    DataFilterPipe,
    ProjectCreateRouteComponent,
    EnvironmentCreateRouteComponent,
    EnvironmentRouteComponent,
    AuditRouteComponent,
    FeatureGroupCreateRouteComponent,
    FeatureGroupRouteComponent,
    FeatureGroupEditRouteComponent,
    FeatureRouteComponent,
    FeatureCreateRouteComponent,
    FeatureEditRouteComponent,
    ConsumerGroupRouteComponent,
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    AuditService,
    ConsumerGroupService,
    EnvironmentService,
    FeatureService,
    ProjectService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
