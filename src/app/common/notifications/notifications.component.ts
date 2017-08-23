import { Component, OnInit } from '@angular/core';

import { Notification, NotificationType } from 'app/common/notifications/notification';
import { NotificationsService } from 'app/common/notifications/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

	notifications: Notification[] = new Array<Notification>();

    constructor(private notificationsService: NotificationsService) { }

    ngOnInit() {
        this.notificationsService.notifications.subscribe((notification: Notification) => {
            if (!notification) {
                this.notifications = [];
            }else{
                this.notifications.push(notification);
                setTimeout(_=> {
                        notification.marginTop = '30px';
                }, 100);
                if(notification.time){
                    setTimeout(_=> {
                        this.removeNotification(notification)
                    }, notification.time);
                }
            }           
        });
    }

    removeNotification(notification: Notification) {
        this.notifications = this.notifications.filter(x => x !== notification);
    }

}
