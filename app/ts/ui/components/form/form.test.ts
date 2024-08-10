import { screen } from "@testing-library/dom";
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import form from "./form"

describe("Form Test Suite", () => {
    let root: HTMLElement;
	beforeAll(() => {
		const formData = {
			id: "log-form",
			fields: [
				{
					icon: "fa-user",
					id: "firstname",
					type: "text",
					placeholder: "Entrez votre prénom"
				},
				{
					icon: "fa-user",
					id: "lastname",
					type: "text",
					placeholder: "Entrez votre nom"
				},
				{
					icon: "fa-envelope",
					id: "email",
					type: " email",
					placeholder: "Entrez votre email"
				},
				{
					icon: "fa-lock",
					id: "password",
					type: "password",
					placeholder: "Entrez votre mot de passe"
				},
				{
					icon: "fa-lock",
					id: "confirmed-password",
					type: "password",
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

		root = document.createElement("div")
		root.id = "root"
		document.body.appendChild(root)
		root.innerHTML += form(formData)
	})
    tests()

    describe('Form Test Change Suite', () => {
        let firstnameField;
        let lastnameField;
        let passwordField
        beforeAll(() => {
            passwordField = screen.getByTestId('password')
            lastnameField = screen.getByTestId('lastname')
            firstnameField = screen.getByPlaceholderText('Entrez votre prénom') as HTMLInputElement
        })

        test('password should be present as an input field', () => {
            expect(passwordField).toHaveValue("")

        })
        test('firstname placeholder should be present', () => {
            expect(firstnameField).toBeInTheDocument()
        })

        test('should get the password input caroline', async() => {
            await userEvent.type(passwordField, 'caroline')
            expect(passwordField).toHaveValue('caroline') 
        })

        test('should get the lastname input rose', async() => {
            expect(screen.getByTestId('lastname')).toHaveValue("")  
            await userEvent.type(lastnameField, 'rose')
            expect(lastnameField).toHaveValue('rose') 
        })
        test('should get the firstname ced', async() => {
            await userEvent.type(firstnameField, 'ced')
            expect(firstnameField).toHaveValue('ced')
        })

       
    })
})


function tests () {
    test('should have a form', () => {
        expect(screen.getByTestId("log-form")).toBeInTheDocument()
    })

    test('should have a password input', () => {
        expect(screen.getByPlaceholderText('Entrez votre mot de passe').id).toBe("password")
    })

  

}