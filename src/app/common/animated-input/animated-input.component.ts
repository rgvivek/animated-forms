import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TextAreaConfig } from './text-area-config';
import { DateConfig } from './date-config';
import { DropDownConfig } from './drop-down-config';
import { RadioGroupConfig } from './radio-group-config';
import { CheckBoxConfig } from './check-box-config';
import { FileConfig } from './file-config';

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
  @Input() classList: string = '';
	@Input() textAreaConfig:TextAreaConfig;
	@Input() dateConfig:DateConfig;
	@Input() dropDownConfig:DropDownConfig;
	@Input() radioGroupConfig:RadioGroupConfig;
	@Input() checkBoxConfig:CheckBoxConfig;
	@Input() fileConfig:FileConfig;
  @Output() onChange: EventEmitter<any> = new EventEmitter();
	showLabel:boolean = true;
  isPortraitMode:boolean = false;
  logo:any = "assets/user.png";

	ngOnInit() {
		switch(this.inputType){
			case "file":
      case "radio":
      case "checkbox-icon":
			case "checkbox":{
				this.showLabel = false;
				break;
			}
		}
	}

  onFileChange(fileInput:any){
    let reader = new FileReader();
    let animatedInput = this;
    reader.onload = (e: any) => {
      let userImage = new Image();
      userImage.onload = (image:any) => {
        if(userImage.width < userImage.height){
          animatedInput.isPortraitMode = true;
        }else{
          animatedInput.isPortraitMode = false;
        }
      }
      userImage.src = e.target.result;
      this.logo = e.target.result;
    }
    reader.readAsDataURL(fileInput.target.files[0]);
  }

}
