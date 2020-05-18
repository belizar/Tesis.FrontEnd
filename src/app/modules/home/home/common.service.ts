import { Injectable, Query } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private apollo: Apollo) { }

  Apollo(query: any, variables: any = null): QueryRef<any> {
    return this.apollo.watchQuery<Query>({
            query,
            variables,
            fetchPolicy: 'network-only'
          });
  }
}
