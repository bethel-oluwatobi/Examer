
// look for a better way
//  this is buliding an allternative to the cn utility of tailwind which helps renderClassnameConditionally
// it is not totally solving the problem

export const renderClassNamesConditionally = (dynamicClassName: string | undefined, defaultClassName: string) => {
    if (dynamicClassName)
    {
        return dynamicClassName
    }
    return defaultClassName
}