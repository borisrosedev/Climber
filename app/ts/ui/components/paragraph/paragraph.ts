interface ParagraphProps {
    textContent: string 
    id?: string
    classNames?: string
}


function paragraph (data: ParagraphProps) {
    return `
        <p 
            id="${data.id ? data.id : ""}" 
            class="custom-paragraph ${data.classNames ? data.classNames : ""}"
        >
            ${data.textContent}
        </p>
    `
}

export default paragraph