import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsiblePanelItemComponent } from './collapsible-panel-item.component';

describe('CollapsiblePanelItemComponent', () => {
  let component: CollapsiblePanelItemComponent;
  let fixture: ComponentFixture<CollapsiblePanelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsiblePanelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsiblePanelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
