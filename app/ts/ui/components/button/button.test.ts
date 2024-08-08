import button from "./button"
import { screen } from "@testing-library/dom"
import "@testing-library/jest-dom"

describe("Button Test Suite", () => {
	beforeAll(() => {
		document.body.innerHTML += button({
			textContent: "Se connecter",
			id: "home-login-button",
			type: "button"
		})
	})

	test("shoud be a button in the document", () => {
		expect(screen.getByRole("button")).toBeInTheDocument()
	})
})
