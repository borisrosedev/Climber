class FormatService {
	constructor() {}

	checkEmail(e: string): string {
		const pattern = new RegExp(
			/^[a-z0-9._]{2,30}[@]{1}[a-z0-9]{2,7}[.]{1}[a-z]{2,5}$/
		)
		const result = pattern.test(e)
		if (!result) {
			return "email invalide"
		} else {
			const splittedEmail = e.split("@")
			const splittedEmailPartOne = splittedEmail[0]
			//const splittedEmailPartTwo = splittedEmail[1]
			const lastChar = splittedEmailPartOne.charAt(
				splittedEmailPartOne.length - 1
			)
			if (lastChar == "." || lastChar == "_") {
				return "email invalide - ./_ existe juste avant le @"
			} else {
				return "email valide"
			}
		}
	}

    checkName(n: string) {
        const pattern = new RegExp(/^[a-zïüûîéèà\-\ ]{2,20}$/i)
        const result = pattern.test(n)
        if (!result) {
			return "invalide - seuls les espaces, traits d'union et lettres sont autorisés"
		} else { 
            return "valide"
        }
    }

	checkPassword(p: string): string {
		const pattern = new RegExp(/^[a-z0-9._ïüûîéèà$!?-_]{12,20}$/i)
		const result = pattern.test(p)
		if (!result) {
			return "mot de passe invalide - doit comprendre entre 12 et 20 caractères"
		} else {
			let counter = 0
			for (const char of p) {
				counter++
				if (char == char.toUpperCase()) {
					return "mot de passe valide"
				}

				if (counter == p.length - 1) {
					return "mot de passe invalide - une majuscule est exigée"
				}
			}
		}
	}
}

export default FormatService
