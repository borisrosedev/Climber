import button from "../button/button"
import field from "../field/field"

interface FormProps {
    id: string
    fields: Array<any>
    buttons: any
}


function form (data: FormProps) {
    return `
        <form 
            id="${data.id}"
            class="custom-form"
            data-testid="${data.id}"
        >
            <section class="form__fields">
                ${data.fields.map((el: any) => field(el)).join("")}
            </section>
            <section class="form__buttons">
                ${data.buttons.map((el: any) => button(el)).join("")}
            </section>
            <section id="form-errors" class="form__errors"></section>
        </form>
    
    `
}

export default form