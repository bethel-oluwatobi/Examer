import { z, ZodTypeAny } from "zod";

export type FormFieldConfig = {
    name: string,
    type: string | number | boolean,
    required: boolean,
    validation?:string,
}

export const schemaBuilder = (fieldConfig: FormFieldConfig[]) => {
    
    const schemaObject: Record<string, ZodTypeAny> = {}
    
    let schema: ZodTypeAny
    fieldConfig.forEach((fields, _) => {
        switch (fields.type)
        {
            case "string":
                if (fields.validation === 'email')
                {
                    schema = z.string().email()
                }
                break;
            case "number":
                schema = z.number()
                break;
            case "boolean":
                schema = z.boolean()
                break;
            default:
                throw new Error(`Unsupported field type`)
        }
        if (!fields.required)
        {
            schema = schema.optional()
        }
        schemaObject[fields.name] = schema
        
    })
    return z.object(schemaObject)
}

export const detailsSchema = z.object({

})