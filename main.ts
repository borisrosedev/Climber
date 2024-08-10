import HomeContainer from "./app/ts/containers/home/home-container"
import LogContainer from "./app/ts/containers/log/log-container"
import OnNavigate from "./app/ts/types/on-navigate.type"
import appHeader from "./app/ts/ui/layout/app-header"
import appNotification from "./app/ts/ui/layout/app-notification"
import homeView from "./app/ts/ui/views/home/home.view"
import logView from "./app/ts/ui/views/log/log"
import "./styles.scss"

declare global {
	interface Window {
		onNavigate: OnNavigate
	}
}

window.onNavigate = navigateToPage
window.onpopstate = router

function setNavHistory(h: string) {
	window.history.pushState({}, "", window.location.pathname + h)
}

function initializeRootInnerHTML() {
	const root = document.getElementById("root") as HTMLElement
	root.innerHTML = ""
	root.innerHTML += appHeader()
    root.innerHTML += appNotification()
	return root
}

function navigateToPage(h: string) {
	setNavHistory(h)
	const root = initializeRootInnerHTML()

	switch (h) {
		case "":
			root.innerHTML += homeView()
			new HomeContainer(window.onNavigate)
			break
		case "#login":
            root.innerHTML += logView(true)
            new LogContainer(window.onNavigate, true)
			break
        case "#register":
            root.innerHTML += logView(false)
            new LogContainer(window.onNavigate, false)
            break;
		default:
            break;
    }
}

function router() {
	navigateToPage(window.location.hash)
}

router()
