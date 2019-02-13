import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { BillPageComponent } from './bill-page/bill-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { PlanningPageComponent } from './planning-page/planning-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import { SystemComponent } from './system.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { BillService } from './shared/services/bill.service';
import { BillCardComponent } from './bill-page/bill-card/bill-card.component';
import { AddEventComponent } from './records-page/add-event/add-event.component';
import { AddCategoryComponent } from './records-page/add-category/add-category.component';
import { EditCategoryComponent } from './records-page/edit-category/edit-category.component';
import { CategoriesService } from './shared/services/categories.service';
import { EventsService } from './shared/services/events.service';
import { HistoryChartComponent } from './history-page/history-chart/history-chart.component';
import { HistoryEventsComponent } from './history-page/history-events/history-events.component';
import { HistoryDetailComponent } from './history-page/history-detail/history-detail.component';
import { HistoryFilterComponent } from './history-page/history-filter/history-filter.component';
import { MomentPipe } from './shared/pipes/moment.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';

@NgModule({
	imports: [CommonModule, 
	SharedModule, 
	SystemRoutingModule,
	NgxChartsModule,
	BsDropdownModule.forRoot()
	],
	
	declarations: [BillPageComponent, 
	HistoryPageComponent, 
	PlanningPageComponent, 
	RecordsPageComponent, 
	SystemComponent,
	DropdownDirective,
	BillCardComponent,
	AddEventComponent,
	AddCategoryComponent,
	EditCategoryComponent,
	HistoryChartComponent,
	HistoryEventsComponent,
	HistoryDetailComponent,
	HistoryFilterComponent,
	MomentPipe,
	FilterPipe
	],
	
	providers: [BillService, CategoriesService, EventsService]
})

export class SystemModule {
	
}