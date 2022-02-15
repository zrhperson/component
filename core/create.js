
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
    let each = (childs) => {
        for (let child of childs) {
            if (typeof child === 'string') {
                child = new Text(child)
            }
            if (typeof child === 'object' && child instanceof Array) {
                // 只需要处理第一层级
                // each(child)
                // continue;
            }

            o.appendChild(child)
        }
    }
    each(children)
    return o;
}

class Component {
    constructor() {
        this.root = document.createElement('div')
        this.children = [];
        this.attributes = new Map();
    }
    
    setAttribute(name, value) {
        this.attributes.set(name, value);
    }
    
    appendChild(child) {
        this.children.push(child);
    }
    
    mountTo(parent) {
        parent.appendChild(this.root);
        this.slot = <div></div>;
        for (let child of this.children) {
          this.slot.appendChild(child);
        }
        this.render().mountTo(parent);


        // parent.appendChild(this.root);
        // for (let child of this.children) {
        //     console.log(child)
        //     child.mountTo(this.root)
        // }
        // this.render().mountTo(this.root);
    }
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