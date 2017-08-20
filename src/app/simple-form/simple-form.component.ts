import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TextAreaConfig } from 'app/common/animated-input/text-area-config';
import { DateConfig } from 'app/common/animated-input/date-config';
import { DropDownConfig } from 'app/common/animated-input/drop-down-config';
import { RadioGroupConfig, Radio } from 'app/common/animated-input/radio-group-config';
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
	public dateOfBirthConfig = new DateConfig();
	public experienceLevelConfig = new RadioGroupConfig();
  	constructor(private formBuilder: FormBuilder) {
  		this.simpleForm = formBuilder.group({
			'firstName' : [null, Validators.required],
		    'lastName' : [null, Validators.required],
		    'age' : [null, Validators.required],
		    'dateOfBirth' : [null, Validators.required],
		    'sex' : [null, Validators.required],
		    'hobby' : [null, Validators.required],
		    'disclaimer' : [null, Validators.required],
		    'experienceLevel' : [null, Validators.required]
		});
  	}

	ngOnInit() {
		this.initializeInputConfigurations();
	}

	save(formData : any):void{
		if(this.simpleForm.valid){
			alert('your data is saved');
		}
	}

	private initializeInputConfigurations():void{
		this.sexDropDownConfig.options = [{id:1, value: 'Male'}, {id:2, value: 'Female'}];
  		this.sexDropDownConfig.valueField = "id";
  		this.sexDropDownConfig.displayField = "value";
  		this.dateOfBirthConfig.minDate = new Date();
  		this.experienceLevelConfig.groupName = "experienceLevel";
  		this.experienceLevelConfig.radioList = new Array<Radio>();
  		this.experienceLevelConfig.radioList.push(new Radio("B","Beginner"));
  		this.experienceLevelConfig.radioList.push(new Radio("T","Intermediate"));
  		this.experienceLevelConfig.radioList.push(new Radio("E","Expert"));
	}

}
