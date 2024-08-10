import anchor from "../../components/anchor/anchor"
import form from "../../components/form/form"

function logQuestion (isLoggingIn: boolean) {
    if(isLoggingIn){
        return `
            Pas encore inscrit(e) ? - Cliquez ${anchor({textContent: 'ici', href: '#register'})}
        `
    } else {
        return `
            Déjà inscrit(e) ? - Cliquez ${anchor({textContent: 'ici', href: '#login'})}
        `
    }
  
}


function logView (isLoggingIn: boolean) {

    const formData = {
        id: "log-form",
        fields: [
            {
                icon: "fa-user",
                id: "firstname",
                type:"text",
                placeholder: "Entrez votre prénom"
            },
            {
                icon: "fa-user",
                id: "lastname",
                type:"text",
                placeholder: "Entrez votre nom"
            },
            {
                icon: "fa-envelope",
                id: "email",
                type:"email",
                placeholder: "Entrez votre email"
            },
            {
                icon: "fa-lock",
                id: "password",
                type:"password",
                placeholder: "Entrez votre mot de passe"
            },
            {
                icon: "fa-lock",
                id: "confirmed-password",
                type:"password",
                placeholder: "Confirmer le mot de passe" 
            }
        ],
        buttons: [
            {
                id: "submit-button",
                textContent: "Valider",
                type: "submit"
            },
            {
                id: "reset-button",
                textContent: "Réinitialiser",
                type: "reset"
            }
        ]
    }

    if(isLoggingIn){
        formData.fields.pop()
        const passwordField = formData.fields.pop()
        const emailField = formData.fields.pop()
        formData.fields[0] = emailField
        formData.fields[1] = passwordField

    }
    

    return `
    
        <main class="custom-main log__main">
            <section class="log__form-section">
                ${form(formData)}
                <aside class="log__question">
                    ${logQuestion(isLoggingIn)}
                </aside>
            </section>
        </main>
    
    `
}

export default logView