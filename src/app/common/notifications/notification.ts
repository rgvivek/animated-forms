export class Notification {
    type: NotificationType;
    message: string;
    time:number;
    class:string;
    marginTop:string = "-150px";
}

export enum NotificationType {
    Success,
    Error,
    Info,
    Warning
}