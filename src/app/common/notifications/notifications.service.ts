import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/Rx';

import { Notification, NotificationType } from 'app/common/notifications/notification';
@Injectable()
export class NotificationsService {
public notifications:BehaviorSubject<Notification> = new BehaviorSubject<Notification>(null);
    
    success(message: string, time = 5000) {
        this.notification(NotificationType.Success, message, time, 'success');
    }

    error(message: string, time = 5000) {
        this.notification(NotificationType.Error, message, time, 'error');
    }

    info(message: string, time = 5000) {
        this.notification(NotificationType.Info, message, time, 'info');
    }

    warn(message: string, time = 5000) {
        this.notification(NotificationType.Warning, message, time, 'warn');
    }

    /*Update the behaviour subject, to notify the listeners*/
    notification(type: NotificationType, message: string, time:number = 5000, className:string) {
        this.notifications.next(<Notification>{ type: type, message: message, time:time, class:className });
    }

    clear() {
        this.notifications.next(null);
    }

}
