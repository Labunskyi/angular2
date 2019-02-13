import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi } from '../../../shared/core/base-api';
import { WFMEvent } from '../models/event.model';

@Injectable()
export class EventsService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  addEvent(wfmevent: WFMEvent): Observable<WFMEvent> {
    return this.post('events', wfmevent);
  }

  getEvents(): Observable<WFMEvent[]> {
    return this.get('events');
  }
  
  getEventById(id: string): Observable<WFMEvent> {
    return this.get(`events/${id}`);
  }
}
