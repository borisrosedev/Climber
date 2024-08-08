import button from "../../components/button/button"

function homeView() {
	return `
        <main class="custom-main home__main">
            <section>
                ${button({ textContent: "Se connecter", id: "home-login-button" })}
            </section>
        </main>
    `
}

export default homeView
