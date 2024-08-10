import paragraph from "../../../ui/components/paragraph/paragraph"
import small from "../../../ui/components/small/small"

class NotificationService {
	notificationAside: HTMLElement
	constructor() {
		this.notificationAside = document.getElementById("app-notification")
	}

	displayNotification(data: any, time: number = 4000) {
		this.notificationAside.innerHTML = paragraph(data)
		setTimeout(() => {
			this.notificationAside.innerHTML = ""
		}, time)
	}
}

export default NotificationService
