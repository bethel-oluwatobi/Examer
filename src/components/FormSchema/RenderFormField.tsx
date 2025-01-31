import { FormInput } from "../../design_system/app/form/FormInput/FormInput"
import { IFormConfig } from "../../design_system/app/form/types"

const RenderFormField = ({ ...formProps }: IFormConfig) => {
    const {type} = formProps
 
    switch (type)
    {
        case "text":
            return <FormInput {...formProps} />
        // case "email":
        // case "radio":
    }
}

export default RenderFormField
