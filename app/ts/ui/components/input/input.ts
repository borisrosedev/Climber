interface InputProps {
	id: string
	type?: string
	placeholder: string
	icon?: string
}

function input(data: InputProps) {
	return `
        <input
            class="input"
            data-testid="${data.id}"
            id="${data.id}"
            type="${data.type ? data.type : "text"}"
            placeholder="${data.placeholder}"
            required
            aria-required="true"
            multiple="false" 
        >
    `
}

export default input
