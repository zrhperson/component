// import {create} from './create'

function create (Cls, attributes, ...children) {
    console.log(arguments)
    let o ;
    if( typeof Cls === 'string') {
        o = new Wrapper(Cls)
    } else {
        o = new Cls
    }
    for(let name in attributes) {
        o.setAttribute(name, attributes[name])
    }
    for(let child of children) {
        o.appendChild(child)
    }
    return o;
}

class Wrapper {
    constructor(typeName){
        this.root = document.createElement(typeName)
    }


    render() {
          document.body.appendChild(this.root)
    }

}

class Child {
    constructor() {
        this.root = document.createElement('div')
    }

    setAttribute(name, value) {
        this.root.setAttribute(name, value)
    }

    appendChild(child) {
        child.mountTo(this.root)
    }

    mountTo(parent) {
        parent.appendChild(this.root)
    }
}

class Carousel {
    constructor() {
        this.root = document.createElement('div')
    }

    setAttribute(name, value) {
        this.root.setAttribute(name, value)
    }

    appendChild(child) {
        child.mountTo(this.root)
    }

    mountTo(parent) {
        parent.appendChild(this.root)
    }
}

// let component = <Carousel data={[
//     'https://static001.geekbang.org/resource/image/88/f1/8807661ef5b82fcb75e8b8f2dbd71ef1.jpg',
//     'https://static001.geekbang.org/resource/image/65/9a/6590fb3f37a385b8d88b8679529e9c9a.jpg',
//     'https://static001.geekbang.org/resource/image/b1/d6/b1b70d207fed37fd54c127f9667d1fd6.jpg',
//     'https://static001.geekbang.org/resource/image/95/d1/95775d0927a580170673aedfc70e33d1.jpg',
//     'https://static001.geekbang.org/resource/image/bb/45/bb942ebf2e824427554b830e02e81d45.jpg',
// ]} />
let component = <Carousel name='carousel'>
    <Child />
    <Child>
        <Child />
    </Child>
</Carousel>

component.mountTo(document.body);
