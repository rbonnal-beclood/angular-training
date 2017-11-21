import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentsService {

  constructor(private http: HttpClient) {}

    getComments(filters, offset: number = null, limit: number = null): Observable<any> {
      return this.http.get('https://jsonplaceholder.typicode.com/comments', {
        // params: this.buildQueryParams(filters)
      });
    }

    // buildQueryParams(filters) {
    //   var params = new HttpParams();

    //   for (let filter of Object.keys(filters)) {
    //       params = params.append(filter, filters[filter]);
    //   }
    //   return params.append('organizationId', this.organizationService.organizationId);
    // }
}
