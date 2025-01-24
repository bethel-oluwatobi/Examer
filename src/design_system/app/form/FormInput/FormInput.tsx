import { IFormConfig } from "../types"
import { LabelAndErrorCmp } from "./LabelAndErrorCmp"

export const FormInput = ({ ...formProps }: IFormConfig) => {
  return (
    <LabelAndErrorCmp  {...formProps} />
  )
}

