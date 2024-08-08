import ConsoleService from "../services/basic/console/console.service";
import NotificationService from "../services/basic/notification/notification.service";
import OnNavigate from "../types/on-navigate.type";

class ContainerModel {
    notificationService: NotificationService;
    consoleService: ConsoleService
    onNavigate: OnNavigate

    constructor(onNavigate: OnNavigate){
        this.onNavigate = onNavigate
        this.notificationService = new NotificationService()
        this.consoleService = new ConsoleService()
    }
}

export default ContainerModel