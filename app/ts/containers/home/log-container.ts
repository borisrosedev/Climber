import ContainerModel from "../../models/container.model";
import FormatService from "../../services/shared/format.service";
import OnNavigate from "../../types/on-navigate.type";
import small from "../../ui/components/small/small";

class LogContainer extends ContainerModel {
    isLoggingIn: boolean
    formatService: FormatService
    formErrorsSection: HTMLElement
    emailErrorsSection: HTMLElement
    passwordErrorsSection: HTMLElement
    confirmedPasswordErrorsSection: HTMLElement
    
    credentials: { email: string , password: string, confirmedPassword?: string}
    constructor (onNavigate: OnNavigate, isLoggingIn: boolean){
        super(onNavigate)
        this.isLoggingIn = isLoggingIn
        this.formatService = new FormatService()
        this.formErrorsSection = document.getElementById("form-errors");
        this.emailErrorsSection = document.getElementById("email-errors");
        this.passwordErrorsSection = document.getElementById("password-errors");

        if(!this.isLoggingIn){
            this.confirmedPasswordErrorsSection = document.getElementById("confirmed-password-errors");

        }
    }

    getFormValues () {
        this.credentials.password = (document.getElementById("password") as HTMLInputElement).value 
        this.credentials.email = (document.getElementById("email") as HTMLInputElement).value
        if(!this.isLoggingIn){
            this.credentials.confirmedPassword = (document.getElementById("confirmed-password") as HTMLInputElement).value
        }
     
    }


    callTheApi() {
        if(!this.isLoggingIn){
            this.notificationService.displayNotification({ textContent: "Registering ..."})
        } else {
            this.notificationService.displayNotification({ textContent: "Logging in ..."})
        }

    }

    clearErrors () {
        this.emailErrorsSection.innerHTML = ""
        this.passwordErrorsSection.innerHTML = ""
        if(!this.isLoggingIn){
            this.confirmedPasswordErrorsSection.innerHTML = ""
        }
        this.formErrorsSection.innerHTML = ""
    }

    onSubmit () {
        this.getFormValues()
        if(this.credentials.email && this.credentials.password){
            const emailResult = this.formatService.checkEmail(this.credentials.email)
            const passwordResult = this.formatService.checkPassword(this.credentials.password)
            if(emailResult == "valid email" && passwordResult == "valid password"){
                this.clearErrors()
                this.callTheApi()
            } else {
               if(emailResult !== "valid email") {
                 this.emailErrorsSection.innerHTML = small({ textContent: emailResult })
               } 

               if(emailResult == "valid email") {
                    this.emailErrorsSection.innerHTML = ""
               }

               if(passwordResult !== "valid password") {
                 this.passwordErrorsSection.innerHTML = small({ textContent: passwordResult })
               }

               if(passwordResult == "valid password") {
                this.passwordErrorsSection.innerHTML = ""
               }
            }
        } else {
            this.formErrorsSection.innerHTML = small({ textContent: "Missing data"})
            return
        }

        if(!this.isLoggingIn) {
            if(!this.credentials.confirmedPassword) {
                this.formErrorsSection.innerHTML = small({ textContent: "You need to confirm the password"})
                return
            } 

            if(this.credentials.confirmedPassword) {
                this.formErrorsSection.innerHTML = ""
            }

            if(this.credentials.confirmedPassword !== this.credentials.password){
                this.formErrorsSection.innerHTML = small({ textContent: "The passwords must be the same"})
            } 

            if(this.credentials.confirmedPassword === this.credentials.password) {
                this.clearErrors()
                this.callTheApi()
            }
          
        }
     
    }

}

export default LogContainer