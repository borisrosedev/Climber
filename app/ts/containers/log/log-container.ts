import ContainerModel from "../../models/container.model"
import FormatService from "../../services/shared/format.service"
import OnNavigate from "../../types/on-navigate.type"
import small from "../../ui/components/small/small"

class LogContainer extends ContainerModel {
	//----------------------- DÉBUT DE LA DÉCLARATION DES ATTRIBUTS
	isLoggingIn: boolean
    submitButton: HTMLButtonElement
	formatService: FormatService
	formErrorsSection: HTMLElement
	firstnameErrorsSection: HTMLElement
	lastnameErrorsSection: HTMLElement
	emailErrorsSection: HTMLElement
	passwordErrorsSection: HTMLElement
	confirmedPasswordErrorsSection: HTMLElement
	passwordField: HTMLInputElement
	emailField: HTMLInputElement
	firstnameField?: HTMLInputElement
	lastnameField?: HTMLInputElement
	confirmedPasswordField?: HTMLInputElement
	credentials: any = {}
	//----------------------FIN DE LA DECLARATION DES ATTRIBUTS

	constructor(onNavigate: OnNavigate, isLoggingIn: boolean) {
		super(onNavigate)
		this.isLoggingIn = isLoggingIn
		this.formatService = new FormatService()
        this.submitButton = document.getElementById("submit-button") as HTMLButtonElement
		this.formErrorsSection = document.getElementById("form-errors")
		this.emailErrorsSection = document.getElementById("email-errors")
		this.passwordErrorsSection = document.getElementById("password-errors")
		this.passwordField = document.getElementById("password") as HTMLInputElement
		console.log(this.passwordField)
		this.emailField = document.getElementById("email") as HTMLInputElement

		if (!this.isLoggingIn) {
			this.firstnameErrorsSection = document.getElementById("firstname-errors")
			this.lastnameErrorsSection = document.getElementById("lastname-errors")

			this.lastnameField = document.getElementById(
				"lastname"
			) as HTMLInputElement
			this.firstnameField = document.getElementById(
				"firstname"
			) as HTMLInputElement
			this.confirmedPasswordField = document.getElementById(
				"confirmed-password"
			) as HTMLInputElement
			this.confirmedPasswordErrorsSection = document.getElementById(
				"confirmed-password-errors"
			)
		}

		const form = document.getElementById("log-form")
		form.addEventListener("submit", (e) => this.onSubmit(e))
        form.addEventListener('reset', () => {
            this.clearErrors()
        })
	}


    disableOrEnableSubmitButton() {
        if(this.submitButton.disabled){
            this.submitButton.disabled = false
        } else {
            this.submitButton.disabled = true
        }
    }

	getFormValues() {
		console.log(this)
		this.credentials.password = this.passwordField.value
		this.credentials.email = this.emailField.value
		if (!this.isLoggingIn) {
			this.credentials.firstname = this.firstnameField.value
			this.credentials.lastname = this.lastnameField.value
			this.credentials.confirmedPassword = this.confirmedPasswordField.value
		}
	}

	checkIfValuesPresent() {
		if (this.isLoggingIn) {
			return this.credentials.email && this.credentials.password
		} else {
			return (
				this.credentials.email &&
				this.credentials.password &&
				this.credentials.firstname &&
				this.credentials.lastname &&
				this.credentials.confirmedPassword
			)
		}
	}

	callTheApi() {
		if (!this.isLoggingIn) {
			this.notificationService.displayNotification({
				textContent: "Registering ..."
			})
		} else {
			this.notificationService.displayNotification({
				textContent: "Logging in ..."
			})
		}
	}

	updateFormErrorsSectionInnerHTML(ans: boolean) {
		if (!ans) {
			this.formErrorsSection.innerHTML = small({
				textContent: "Veuillez compléter correctement le formulaire"
			})
		} else {
			this.formErrorsSection.innerHTML = ""
		}
	}

	checkValuesFormat() {
		const emailResult = this.formatService.checkEmail(this.credentials.email)
		const passwordResult = this.formatService.checkPassword(
			this.credentials.password
		)
		if (
			this.isLoggingIn &&
			emailResult == "email valide" &&
			passwordResult == "mot de passe valide"
		) {
			return true
		}

		if (!this.isLoggingIn) {
			const firstnameResult = this.formatService.checkName(
				this.credentials.firstname
			)
			const lastnameResult = this.formatService.checkName(
				this.credentials.lastname
			)
			const confirmedPasswordResult =
				this.credentials.password === this.credentials.confirmedPassword
			if (
				emailResult == "email valide" &&
				passwordResult == "mot de passe valide" &&
				firstnameResult == "valide" &&
				lastnameResult == "valide" &&
				confirmedPasswordResult == true
			) {
				return true
			} else {
				emailResult !== "email valide"
					? (this.emailErrorsSection.innerHTML = small({
							textContent: emailResult
						}))
					: (this.emailErrorsSection.innerHTML = "")
				passwordResult !== "mot de passe valide"
					? (this.passwordErrorsSection.innerHTML = small({
							textContent: passwordResult
						}))
					: (this.passwordErrorsSection.innerHTML = "")
				firstnameResult !== "valide"
					? (this.firstnameErrorsSection.innerHTML = small({
							textContent: firstnameResult
						}))
					: (this.firstnameErrorsSection.innerHTML = "")
				lastnameResult !== "valide"
					? (this.lastnameErrorsSection.innerHTML = small({
							textContent: lastnameResult
						}))
					: (this.lastnameErrorsSection.innerHTML = "")
				!confirmedPasswordResult
					? (this.confirmedPasswordErrorsSection.innerHTML = small({
							textContent: "Les mots de passe doivent être identiques"
						}))
					: (this.confirmedPasswordErrorsSection.innerHTML = "")
                return false
            }
		}
	}

	clearErrors() {
		this.emailErrorsSection.innerHTML = ""
		this.passwordErrorsSection.innerHTML = ""
		if (!this.isLoggingIn) {
            this.firstnameErrorsSection.innerHTML = ""
            this.lastnameErrorsSection.innerHTML = ""
			this.confirmedPasswordErrorsSection.innerHTML = ""
		}
		this.formErrorsSection.innerHTML = ""
	}

	onSubmit(event: any) {
		event.preventDefault()
        this.disableOrEnableSubmitButton()
		this.getFormValues()
		this.updateFormErrorsSectionInnerHTML(this.checkIfValuesPresent())
        const result = this.checkValuesFormat()
        if(result){
            this.clearErrors()
            if(this.isLoggingIn){
                this.notificationService.displayNotification({ textContent: 'Connexion en cours'})
            } else {
                this.notificationService.displayNotification({ textContent: 'Inscription en cours'})
            }
        }
        this.disableOrEnableSubmitButton()
	}
}

export default LogContainer
