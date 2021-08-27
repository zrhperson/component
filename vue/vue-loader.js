const {parseHTML} = require('./parser')

module.exports = function (source, map) {
    let tree = parseHTML(source)
    let template = null;
    let script = null;

    for (const node of tree.children) {
        if(node.tagName === 'template'){
            template = node.children.filter(t => t.type !== 'text')[0]
        }
        if(node.tagName === 'script'){
            script = node.children[0].content;
        }
    }
    let visit = (node) => {
        if(node.type === 'text') {
            return JSON.stringify(node.content);
        }
        let attrs = {}
        for (const attr of node.attributes) {
            attrs[attr.name] = attr.value
        }
        let children = node.children.map(node => visit(node));
        return `create("${node.tagName}", ${JSON.stringify(attrs)}, ${children})`
        
    }
    

    let code = `
import {create, Text, Wrapper} from './create'
export class Carousel {
    setAttribute(name, value) {
        this[name] = value
    }
    render(){
        return ${visit(template)}
    }
    
    mountTo(parent) {
        this.render().mountTo(parent)
    }
}
    `

    return code;
}