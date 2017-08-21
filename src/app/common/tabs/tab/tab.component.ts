import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})

export class TabComponent {
  @Input('tabTitle') title: string;
  @Input() active = false;
  @Output('onTabClick') onTabClick: EventEmitter<any> = new EventEmitter();
}
