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
    path: 'projects',
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
  // {
  //   component: FeaturesListRouteComponent,
  //   path: 'features',
  //   canActivate: [
  //     AuthGuard
  //   ]
  // },
  // {
  //   component: FeaturesCreateRouteComponent,
  //   path: 'features/create',
  //   canActivate: [
  //     AuthGuard
  //   ]
  // },
  // {
  //   component: FeaturesEditRouteComponent,
  //   path: 'features/edit',
  //   canActivate: [
  //     AuthGuard
  //   ]
  // },
  // {
  //   component: GroupsListRouteComponent,
  //   path: 'groups',
  //   canActivate: [
  //     AuthGuard
  //   ]
  // },
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
  // {
  //   component: AuditListRouteComponent,
  //   path: 'audits',
  //   canActivate: [
  //     AuthGuard
  //   ]
  // },
  // {
  //   component: FeatureGroupsListRouteComponent,
  //   path: 'featuregroups',
  //   canActivate: [
  //     AuthGuard
  //   ]
  // },
  // {
  //   component: FeatureGroupsCreateRouteComponent,
  //   path: 'featuregroups/create',
  //   canActivate: [
  //     AuthGuard
  //   ]
  // },
  // {
  //   component: FeatureGroupsEditRouteComponent,
  //   path: 'featuregroups/edit',
  //   canActivate: [
  //     AuthGuard
  //   ]
  // },
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
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    EnvironmentService,
    ProjectService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
