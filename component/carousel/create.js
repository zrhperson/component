



export function create (Cls, attributes, ...children) {
    console.log(arguments)
    let o = new Cls;
    for(let name in attributes) {
        o[name] = attributes[name]
    }
    return o;
}