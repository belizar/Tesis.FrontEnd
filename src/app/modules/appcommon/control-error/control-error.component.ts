import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-control-error',
  templateUrl: './control-error.component.html',
  styleUrls: ['./control-error.component.css']
})
export class ControlErrorComponent implements OnInit {

  @Input()
  text: string;

  constructor() { }

  ngOnInit() {
  }

}
