import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RadioGroupConfig, Radio } from 'app/common/animated-input/radio-group-config';

@Component({
  selector: 'app-skills-info',
  templateUrl: './skills-info.component.html',
  styleUrls: ['./skills-info.component.scss']
})
export class SkillsInfoComponent implements OnInit {

	@Output('onPreviousClick') onPreviousClick: EventEmitter<any> = new EventEmitter();
	@Output('onNextClick') onNextClick: EventEmitter<any> = new EventEmitter();
  	public skillsInfoForm:FormGroup;
	
  	constructor(private formBuilder: FormBuilder) {
  		this.skillsInfoForm = formBuilder.group({
  			'angular' : [null],
		    'html' : [null],
		    'css' : [null],
		    'javascript' : [null]
		});
  	}

	ngOnInit() {
	}

	save(formData : any):void{
		if(this.skillsInfoForm.valid){
			alert('your data is saved');
		}
		this.onNextClick.emit([]);
	}

	onPreviousClicked():void{
		this.onPreviousClick.emit([]);
	}
}
