class FormatService {
	constructor() {}

	checkEmail(e: string): string {
		const pattern = new RegExp(
			/^[a-z0-9._]{2,30}[@]{1}[a-z0-9]{2,7}[.]{1}[a-z]{2,5}$/
		)
		const result = pattern.test(e)
		if (!result) {
			return "invalid email"
		} else {
			const splittedEmail = e.split("@")
			const splittedEmailPartOne = splittedEmail[0]
			//const splittedEmailPartTwo = splittedEmail[1]
			const lastChar = splittedEmailPartOne.charAt(
				splittedEmailPartOne.length - 1
			)
			if (lastChar == "." || lastChar == "_") {
				return "invalid email : ./_ before @"
			} else {
				return "valid email"
			}
		}
	}

	checkPassword(p: string): string {
		const pattern = new RegExp(/^[a-z0-9._ïüûîéèà$!?-_]{12, 20}$/i)
		const result = pattern.test(p)
		if (!result) {
			return "invalid password - must have at least 12 characters and at most 20"
		} else {
			let counter = 0
			for (const char of p) {
				counter++
				if (char == char.toUpperCase()) {
					return "valid password"
				}

				if (counter == p.length - 1) {
					return "invalid password : no uppercase character"
				}
			}
		}
	}
}

export default FormatService
