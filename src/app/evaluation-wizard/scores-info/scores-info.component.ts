import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RadioGroupConfig, Radio } from 'app/common/animated-input/radio-group-config';

@Component({
  selector: 'app-scores-info',
  templateUrl: './scores-info.component.html',
  styleUrls: ['./scores-info.component.scss']
})
export class ScoresInfoComponent implements OnInit {

	@Output('onPreviousClick') onPreviousClick: EventEmitter<any> = new EventEmitter();
	@Output('onNextClick') onNextClick: EventEmitter<any> = new EventEmitter();

  	public scoresInfoForm:FormGroup;
	public experienceLevelConfig:RadioGroupConfig;
	public technologyStrengthConfig:RadioGroupConfig;
	public designCapabilitiesConfig:RadioGroupConfig;
	public leadershipAbilityConfig:RadioGroupConfig;

  	constructor(private formBuilder: FormBuilder) {
  		this.scoresInfoForm = formBuilder.group({
  			'experienceLevel' : [null, Validators.required],
		    'technologyStrength' : [null, Validators.required],
		    'designCapabilities' : [null, Validators.required],
		    'leadershipAbility' : [null, Validators.required]
		});
  	}

	ngOnInit() {
		this.initializeInputConfigurations();
	}

	save(formData : any):void{
		if(this.scoresInfoForm.valid){
			alert('your data is saved');
		}
		this.onNextClick.emit([]);
	}

	onPreviousClicked():void{
		this.onPreviousClick.emit([]);
	}

	private initializeInputConfigurations():void{
		let radioList = new Array<Radio>();
  		radioList.push(new Radio("B","Beginner"));
  		radioList.push(new Radio("T","Intermediate"));
  		radioList.push(new Radio("E","Expert"));
		this.experienceLevelConfig = new RadioGroupConfig(radioList, "experienceLevel", 4);
  		this.technologyStrengthConfig = new RadioGroupConfig(radioList, "technologyStrength", 4);
  		this.designCapabilitiesConfig = new RadioGroupConfig(radioList, "designCapabilities", 4);
  		this.leadershipAbilityConfig = new RadioGroupConfig(radioList, "leadershipAbility", 4);
	}

}
