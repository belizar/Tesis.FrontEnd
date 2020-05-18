import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title = 'Tesis Analista';

  constructor() {}

  ngOnInit(): void {}

  // insert() {
  // this.database.get().pipe(map(res => res.docs),
  //                          map(docs => docs.map(doc => {
  //                            return {ID: doc.id, ...doc.data()};
  //                          })))
  //                     .subscribe(asd => console.log(asd));
  // }

}
