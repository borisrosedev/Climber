import input from "../input/input"

function field(data: any) {
	return ` 
    <article class="field custom-field">
        <section class="control has-icons-left">
            ${input(data)}
            <span class="icon is-small is-left">
                <i class="fas ${data.icon}"></i>
            </span>
        </section>
        <section id="${data.id}-errors" class="custom-field__errors"></section>
    </article>

    `
}

export default field
