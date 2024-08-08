import ContainerModel from "../../models/container.model";
import OnNavigate from "../../types/on-navigate.type";

class HomeContainer extends ContainerModel {
    constructor(onNavigate: OnNavigate){
        super(onNavigate)
        const homeLoginButton = document.getElementById('home-login-button')
        homeLoginButton.addEventListener('click', this.onClick.bind(this))
    }

    onClick () {
        this.onNavigate("#login")
    }
}

export default HomeContainer