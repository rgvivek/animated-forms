export class RadioGroupConfig {
	radioList:Array<Radio>;
	groupName:string;
}

export class Radio {
	value:any;
	text:string;
	constructor(value:any, text:string){
		this.value = value;
		this.text = text;
	}
}
