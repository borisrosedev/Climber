interface AnchorProps {
	textContent?: string
	template?: string
	href: string
}

function anchor(data: AnchorProps) {
	return `
        <a href="${data.href}">${data.template ? data.template : data.textContent}</a>
    
    `
}

export default anchor
