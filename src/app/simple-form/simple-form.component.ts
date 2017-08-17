import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TextAreaConfig } from 'app/common/animated-input/text-area-config';
import { DateConfig } from 'app/common/animated-input/date-config';
import { DropDownConfig } from 'app/common/animated-input/drop-down-config';
import { RadioGroupConfig } from 'app/common/animated-input/radio-group-config';
import { CheckBoxConfig } from 'app/common/animated-input/check-box-config';
import { ToggleButtonConfig } from 'app/common/animated-input/toggle-button-config';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {
	public simpleForm:FormGroup;
	public sexDropDownConfig:DropDownConfig = new DropDownConfig();
  	constructor(private formBuilder: FormBuilder) {
  		this.sexDropDownConfig.options = [{id:1, value: 'Male'}, {id:2, value: 'Female'}];
  		this.sexDropDownConfig.valueField = "id";
  		this.sexDropDownConfig.displayField = "value";
  		this.simpleForm = formBuilder.group({
			'firstName' : [null, Validators.required],
		    'lastName' : [null, Validators.required],
		    'age' : [null, Validators.required],
		    'sex' : [null, Validators.required],
		    'hobby' : [null, Validators.required]
		});
  	}

	ngOnInit() {
	}

	save(formData : any):void{
		if(this.simpleForm.valid){
			alert('your data is saved');
		}
	}

}
