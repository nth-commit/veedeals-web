import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LocationService {

  constructor() { }

  listLocations(): Observable<string[]> {
    return Observable.of(['London'])
  }

}
