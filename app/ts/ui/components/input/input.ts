interface InputProps {
	id: string
	type?: string
	placeholder: string
	icon?: string
}

function input(data: InputProps) {
	return `
        <section class="control has-icons-left field__input">
            <label for="${data.id}"></label>
            <input
                multiple="false" 
                id="${data.id}"
                name="${data.id}" 
                type="${data.type ? data.type : "text"}"
                placeholder="${data.placeholder}"
                required
                aria-required="true"
            >
        </section>
    
    `
}

export default input
