import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataTableModule } from "angular2-datatable";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProjectRouteComponent } from './project-route/project-route.component';
import { DataFilterPipe } from './data-filter.pipe';

const routes = [
  {
    component: ProjectRouteComponent,
    path: '',
    // canActivate: [
    //   AuthGuard
    // ]
  },
  // {
  //   component: ProjectsListComponent,
  //   path: 'projects',
  //   canActivate: [
  //     AuthGuard
  //   ]
  // },
  // {
  //   component: CallbackComponent,
  //   path: 'callback'
  // },
  // {
  //   component: ProjectsCreateRouteComponent,
  //   path: 'projects/create',
  //   canActivate: [
  //     AuthGuard
  //   ]
  // },
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
  // {
  //   component: EnvironmentListRouteComponent,
  //   path: 'environments',
  //   canActivate: [
  //     AuthGuard
  //   ]
  // },
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectRouteComponent,
    DataFilterPipe,
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
