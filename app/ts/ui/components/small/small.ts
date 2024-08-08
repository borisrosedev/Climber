interface SmallProps {
    textContent: string
    classNames?: string
    id?: string
}

function small (data: SmallProps): string {
    return `
        <small id="${data.id ? data.id : ''}" class="custom-small ${data.classNames ? data.classNames : ''}">
            ${data.textContent}
        </smail>
    `
}

export default small