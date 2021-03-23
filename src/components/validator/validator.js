export const Require = value =>{
    if(!value) return 'write text pleas';
    return undefined
};
export const Maxlength = length => value=>{
    debugger
    if(value&&length<value.length) return `max length ${length}`;
    return undefined
}