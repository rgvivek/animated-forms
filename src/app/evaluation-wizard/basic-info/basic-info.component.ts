import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TextAreaConfig } from 'app/common/animated-input/text-area-config';
import { DateConfig } from 'app/common/animated-input/date-config';
import { DropDownConfig } from 'app/common/animated-input/drop-down-config';
import { RadioGroupConfig, Radio } from 'app/common/animated-input/radio-group-config';
import { CheckBoxConfig } from 'app/common/animated-input/check-box-config';
import { NotificationsService } from 'app/common/notifications/notifications.service';


@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

	@Output('onNextClick') onNextClick: EventEmitter<any> = new EventEmitter();
  	public basicInfoForm:FormGroup;
	public dateOfBirthConfig = new DateConfig();

  	constructor(private formBuilder: FormBuilder, private notificationsService:NotificationsService) {
  		this.basicInfoForm = formBuilder.group({
  			'candidatePhoto' : [null],
			'candidateName' : [null, Validators.required],
		    'panelistName' : [null, Validators.required],
		    'dateOfInterview' : [null, Validators.required]
		});
  	}

	ngOnInit() {
		this.initializeInputConfigurations();
	}

	save(formData : any):void{
		if(this.basicInfoForm.valid){
			this.notificationsService.success("Basic information successfully saved.");
		}else{
			this.notificationsService.warn("Basic information details are not filled completely");
		}
		this.onNextClick.emit([]);
	}

	private initializeInputConfigurations():void{
  		this.dateOfBirthConfig.minDate = new Date();
	}

}
