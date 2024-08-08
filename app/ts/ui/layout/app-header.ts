import anchor from "../components/anchor/anchor"
import figure from "../components/figure/figure"
import navIcon from "../components/nav-icon/nav-icon"

function appHeader() {
	return `
        <header class="app-header">
            ${anchor({ href: "", template: figure({ src: "/assets/logo.png", alt: "Climber logo" }) })}
            <nav id="app-nav">
                    ${anchor({ href: "#login", template: navIcon({ icon: "fa-right-to-bracket" }) })}  
            </nav>
        </header>

    `
}

export default appHeader
