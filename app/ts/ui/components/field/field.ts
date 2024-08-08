import input from "../input/input"

function field(data: any) {
	return ` 
    <article class="field custom-field">
        <p class="control has-icons-left has-icons-right">
            ${input(data)}
            <span class="icon is-small is-left">
                <i class="fas ${data.icon}"></i>
            </span>
        </p>
    </article>
    `
}

export default field
