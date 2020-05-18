import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible-panel-item',
  templateUrl: './collapsible-panel-item.component.html',
  styleUrls: ['./collapsible-panel-item.component.css']
})
export class CollapsiblePanelItemComponent implements OnInit {

  @Input()
  show = false;

  @Input()
  title: string;

  constructor() { }

  ngOnInit() {
  }

  togglePanel() {
    this.show = !this.show;
  }

}
