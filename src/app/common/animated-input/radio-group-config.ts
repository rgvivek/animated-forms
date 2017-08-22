export class RadioGroupConfig {
	radioList:Array<Radio>;
	groupName:string;
	columns:number;
	constructor(radioList:Array<Radio>, groupName:string, columns:number){
		this.radioList = radioList;
		this.groupName = groupName;
		this.columns = columns;
	}
}

export class Radio {
	value:any;
	text:string;
	
	constructor(value:any, text:string){
		this.value = value;
		this.text = text;
	}
}
