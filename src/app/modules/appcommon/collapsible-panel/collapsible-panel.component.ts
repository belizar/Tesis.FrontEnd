import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible-panel',
  templateUrl: './collapsible-panel.component.html',
  styleUrls: ['./collapsible-panel.component.css']
})
export class CollapsiblePanelComponent implements OnInit {

  @Input()
  show: boolean = false;

  @Input()
  title: string;

constructor() { }

  ngOnInit() {
  }

  togglePanel() {
    this.show = !this.show;
  }

}
