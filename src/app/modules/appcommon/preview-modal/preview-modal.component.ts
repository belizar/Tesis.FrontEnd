import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalPreview } from 'src/app/models/preview-modal';



@Component({
  selector: 'app-preview-modal',
  templateUrl: './preview-modal.component.html',
  styleUrls: ['./preview-modal.component.css']
})
export class PreviewModalComponent implements OnInit {

  @Input()
  title = '';

  @Input()
  data: ModalPreview;

  @Output()
  toClose = new EventEmitter<any>();

  @Output()
  toEdit = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.title = '';
    this.data = null;
    this.toClose.emit();
  }

  editar() {
    this.toEdit.emit();
  }

}
