import small from "../../../ui/components/small/small"

class NotificationService {
	notificationAside: HTMLElement
	constructor() {
		this.notificationAside = document.getElementById("notification-aside")
	}

	displayNotification(data: any, time: number = 4000) {
		this.notificationAside.innerHTML = small(data)
		setTimeout(() => {
			this.notificationAside.innerHTML = ""
		}, time)
	}
}

export default NotificationService
