import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TextAreaConfig } from './text-area-config';
import { DateConfig } from './date-config';
import { DropDownConfig } from './drop-down-config';
import { RadioGroupConfig } from './radio-group-config';
import { CheckBoxConfig } from './check-box-config';
import { ToggleButtonConfig } from './toggle-button-config';

@Component({
  selector: 'app-animated-input',
  templateUrl: './animated-input.component.html',
  styleUrls: ['./animated-input.component.scss']
})

export class AnimatedInputComponent implements OnInit {

  	constructor() { }
  	@Input() inputControl: AbstractControl;
  	@Input() inputType: string = 'text';
	@Input() labelText: string = '';
	@Input() placeholderText: string = '';
	@Input() textAreaConfig:TextAreaConfig;
	@Input() dateConfig:DateConfig;
	@Input() dropDownConfig:DropDownConfig;
	@Input() radioGroupConfig:RadioGroupConfig;
	@Input() checkBoxConfig:CheckBoxConfig;
	@Input() toggleButtonConfig:ToggleButtonConfig;
	showLabel:boolean = true;

  	ngOnInit() {
  		switch(this.inputType){
  			case "radio":
  			case "checkbox":{
  				this.showLabel = false;
  				break;
  			}
  		}
  	}

}
