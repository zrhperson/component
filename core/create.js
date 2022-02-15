
function create(Cls, attributes, ...children) {
    let o;
    if (typeof Cls === 'string') {
        o = new Wrapper(Cls)
    } else {
        o = new Cls
    }

    for (let name in attributes) {
        o.setAttribute(name, attributes[name])
    }

    console.log(o)
    let each = (childs) => {
        for (let child of childs) {
            if (typeof child === 'object' && child instanceof Array) {
                each(child)
                continue;
            }
            if (typeof child === 'string') {
                child = new Text(child)
            }

            o.appendChild(child)
        }
    }
    each(children)
    return o;
}

class Component {

}

class Wrapper {
    constructor(typeName) {
        this.children = []
        this.root = document.createElement(typeName)
    }

    get style () {
        return this.root.style
    }

    setAttribute(name, value) {
        this.root.setAttribute(name, value)
    }

    appendChild(child) {
        this.children.push(child);
    }

    addEventListener() {
        this.root.addEventListener(...arguments)
    }

    mountTo(parent) {
        parent.appendChild(this.root);
        for (let child of this.children) {
            child.mountTo(this.root)
        }
    }
}



class Text {
    constructor(text) {
        this.root = document.createTextNode(text)
    }

    mountTo(parent) {
        parent.appendChild(this.root)
    }
}

export {
    create,
    Component,
    Wrapper,
    Text,
}