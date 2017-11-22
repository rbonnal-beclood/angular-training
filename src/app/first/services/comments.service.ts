import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentsService {

  constructor(private http: HttpClient) {}

    getComments(filters, offset: number = null, limit: number = null): Observable<any> {
      let cloneFilters = Object.assign({}, filters);

      if(!!offset) {
          cloneFilters['_start'] = offset;
      }
      if(!!limit) {
        cloneFilters['_limit'] = limit;
      }

      return this.http.get('https://jsonplaceholder.typicode.com/comments', {
        params: this.buildQueryParams(cloneFilters)
      });
    }

    buildQueryParams(filters) {
      var params = new HttpParams();

      for (let filter of Object.keys(filters)) {
          params = params.append(filter, filters[filter]);
      }
      return params;
    }

    deleteComment(comment: string) {
      return this.http.delete('https://jsonplaceholder.typicode.com/comments/' + this.getCommentId(comment));
    }

    getCommentId(comment) {
      return comment['id'];
    }
}
