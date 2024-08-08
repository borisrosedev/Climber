import HomeContainer from "./app/ts/containers/home/home-container"
import LogContainer from "./app/ts/containers/home/log-container"
import OnNavigate from "./app/ts/types/on-navigate.type"
import appHeader from "./app/ts/ui/layout/app-header"
import homeView from "./app/ts/ui/views/home/home.view"
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
	const root = document.getElementById("root")
	root.innerHTML = ""
	root.innerHTML += appHeader()
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
			new LogContainer(window.onNavigate, true)
			break
		default:
			break
	}
}

function router() {
	navigateToPage(window.location.hash)
}

router()
