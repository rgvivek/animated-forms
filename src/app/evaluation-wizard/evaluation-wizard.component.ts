import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsComponent } from 'app/common/tabs/tabs.component';

@Component({
  selector: 'app-evaluation-wizard',
  templateUrl: './evaluation-wizard.component.html',
  styleUrls: ['./evaluation-wizard.component.scss']
})
export class EvaluationWizardComponent implements OnInit {
	@ViewChild(TabsComponent) tabs:TabsComponent;
 	constructor() { }

  	ngOnInit() {
  	}

  	onBasicNextClick():void{
  		this.tabs.selectTab(this.tabs.tabs.toArray()[1]);
  	};

  	onSkillsPreviousClick():void{
  		this.tabs.selectTab(this.tabs.tabs.toArray()[0]);
  	};

  	onSkillsNextClick():void{
  		this.tabs.selectTab(this.tabs.tabs.toArray()[2]);
  	};

}
