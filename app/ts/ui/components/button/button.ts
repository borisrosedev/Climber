interface ButtonProps {
	id: string
	textContent: string
	type?: "submit" | "button" | "reset"
	classNames?: string
}

function button(data: ButtonProps): string {
	return `
        <button 
            id="${data.id}"
            type="${data.type ? data.type : "button"}"
            class="button ${data.classNames ? data.classNames : ""}"
        >${data.textContent}</button>
    `
}

export default button
